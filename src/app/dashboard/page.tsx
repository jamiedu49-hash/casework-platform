"use client";

import { useState, useMemo, Fragment } from "react";
import {
  Users,
  Clock,
  BarChart3,
  Trophy,
  LogIn,
  Download,
  ChevronDown,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

interface SessionRow {
  id: string;
  practitioner_id: string;
  practitioner_name: string;
  scenario_title: string;
  start_time: string;
  duration_seconds: number;
  score_overall: number;
  score_empathy: number;
  score_questioning: number;
  score_intervention: number;
  score_structure: number;
  score_ethics: number;
  completed: boolean;
}

interface StudentSummary {
  id: string;
  name: string;
  totalSessions: number;
  totalDuration: number;
  avgScore: number;
  lastPractice: string;
  sessions: SessionRow[];
}

function fmt(seconds: number): string {
  if (seconds < 60) return `${seconds}秒`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}小时${m}分`;
  return `${m}分钟`;
}

function grade(score: number) {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  return "D";
}

const gradeColor: Record<string, string> = {
  A: "text-emerald-600",
  B: "text-blue-600",
  C: "text-amber-600",
  D: "text-red-600",
};

export default function DashboardPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  async function fetchData(pw?: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/sessions", {
        headers: { "x-teacher-key": pw || password },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || (res.status === 401 ? "密码错误" : "服务器错误"));
      setSessions(data);
      setAuthed(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "加载失败");
    } finally {
      setLoading(false);
    }
  }

  const students = useMemo<StudentSummary[]>(() => {
    const map = new Map<string, StudentSummary>();
    for (const s of sessions) {
      let st = map.get(s.practitioner_id);
      if (!st) {
        st = {
          id: s.practitioner_id,
          name: s.practitioner_name,
          totalSessions: 0,
          totalDuration: 0,
          avgScore: 0,
          lastPractice: s.start_time,
          sessions: [],
        };
        map.set(s.practitioner_id, st);
      }
      st.totalSessions++;
      st.totalDuration += s.duration_seconds;
      st.sessions.push(s);
      if (s.start_time > st.lastPractice) st.lastPractice = s.start_time;
    }
    for (const st of map.values()) {
      st.avgScore = Math.round(
        st.sessions.reduce((a, s) => a + s.score_overall, 0) / st.sessions.length
      );
      st.sessions.sort((a, b) => b.start_time.localeCompare(a.start_time));
    }
    return Array.from(map.values()).sort((a, b) => a.id.localeCompare(b.id));
  }, [sessions]);

  const stats = useMemo(
    () => ({
      students: students.length,
      sessions: sessions.length,
      hours:
        Math.round(
          sessions.reduce((a, s) => a + s.duration_seconds, 0) / 36
        ) / 100,
      avgScore:
        sessions.length > 0
          ? Math.round(
              sessions.reduce((a, s) => a + s.score_overall, 0) /
                sessions.length
            )
          : 0,
    }),
    [students, sessions]
  );

  function exportCSV() {
    const head = [
      "学号",
      "姓名",
      "场景",
      "开始时间",
      "用时(秒)",
      "综合分",
      "共情",
      "提问",
      "干预",
      "结构",
      "伦理",
      "完成",
    ];
    const rows = sessions.map((s) => [
      s.practitioner_id,
      s.practitioner_name,
      s.scenario_title,
      new Date(s.start_time).toLocaleString("zh-CN"),
      s.duration_seconds,
      s.score_overall,
      s.score_empathy,
      s.score_questioning,
      s.score_intervention,
      s.score_structure,
      s.score_ethics,
      s.completed ? "是" : "否",
    ]);
    const csv =
      "\uFEFF" + [head, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `练习记录_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /* ---- Login screen ---- */
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 w-[90%] max-w-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-sm mb-3">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">教师仪表盘</h1>
            <p className="text-sm text-slate-500 mt-1">
              输入教师密码查看学生练习数据
            </p>
          </div>
          <input
            type="password"
            placeholder="教师密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchData()}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent mb-3"
            autoFocus
          />
          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
          <button
            onClick={() => fetchData()}
            disabled={loading || !password.trim()}
            className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "验证中..." : "登录"}
          </button>
        </div>
      </div>
    );
  }

  /* ---- Dashboard ---- */
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">教师仪表盘</h1>
            <p className="text-sm text-slate-500 mt-1">
              查看所有学生的练习数据
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchData()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 hover:bg-slate-50"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
              />
              刷新
            </button>
            <button
              onClick={exportCSV}
              disabled={sessions.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400"
            >
              <Download className="w-3.5 h-3.5" />
              导出 CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="w-4 h-4 text-indigo-500" />}
            label="学生人数"
            value={stats.students}
          />
          <StatCard
            icon={<BarChart3 className="w-4 h-4 text-blue-500" />}
            label="总练习次数"
            value={stats.sessions}
          />
          <StatCard
            icon={<Clock className="w-4 h-4 text-emerald-500" />}
            label="总练习时长"
            value={`${stats.hours}h`}
          />
          <StatCard
            icon={<Trophy className="w-4 h-4 text-amber-500" />}
            label="平均分数"
            value={stats.avgScore}
          />
        </div>

        {/* Student table */}
        {students.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-400">暂无练习数据</p>
            <p className="text-sm text-slate-400 mt-1">
              学生完成练习后数据会自动显示
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">
                      学号
                    </th>
                    <th className="text-left text-xs font-semibold text-slate-500 px-4 py-3">
                      姓名
                    </th>
                    <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">
                      练习次数
                    </th>
                    <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">
                      总时长
                    </th>
                    <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">
                      平均分
                    </th>
                    <th className="text-center text-xs font-semibold text-slate-500 px-4 py-3">
                      等级
                    </th>
                    <th className="text-right text-xs font-semibold text-slate-500 px-4 py-3">
                      最近练习
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((st) => {
                    const isOpen = expanded === st.id;
                    const g = grade(st.avgScore);
                    return (
                      <Fragment key={st.id}>
                        <tr
                          className="border-b border-slate-50 hover:bg-slate-50/50 cursor-pointer transition-colors"
                          onClick={() =>
                            setExpanded(isOpen ? null : st.id)
                          }
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {isOpen ? (
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                              )}
                              <span className="text-sm text-slate-600">
                                {st.id}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm font-medium text-slate-800">
                            {st.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600 text-center">
                            {st.totalSessions}
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600 text-center">
                            {fmt(st.totalDuration)}
                          </td>
                          <td className="px-4 py-3 text-sm font-bold text-slate-800 text-center">
                            {st.avgScore}
                          </td>
                          <td
                            className={`px-4 py-3 text-sm font-bold text-center ${gradeColor[g]}`}
                          >
                            {g}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-400 text-right">
                            {new Date(st.lastPractice).toLocaleDateString(
                              "zh-CN"
                            )}
                          </td>
                        </tr>
                        {isOpen &&
                          st.sessions.map((s) => (
                            <tr
                              key={s.id}
                              className="bg-slate-50/80 border-b border-slate-50"
                            >
                              <td className="px-4 py-2 pl-10" colSpan={2}>
                                <p className="text-xs text-slate-600">
                                  {s.scenario_title}
                                </p>
                              </td>
                              <td className="px-4 py-2 text-xs text-slate-500 text-center">
                                {new Date(s.start_time).toLocaleString(
                                  "zh-CN",
                                  {
                                    month: "numeric",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </td>
                              <td className="px-4 py-2 text-xs text-slate-500 text-center">
                                {fmt(s.duration_seconds)}
                              </td>
                              <td className="px-4 py-2 text-xs font-bold text-slate-700 text-center">
                                {s.score_overall}
                              </td>
                              <td
                                className={`px-4 py-2 text-xs font-bold text-center ${gradeColor[grade(s.score_overall)]}`}
                              >
                                {grade(s.score_overall)}
                              </td>
                              <td className="px-4 py-2 text-xs text-slate-400 text-right">
                                {s.completed ? "已完成" : "未完成"}
                              </td>
                            </tr>
                          ))}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <p className="text-xs text-slate-400">{label}</p>
      </div>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  );
}
