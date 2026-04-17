"use client";

import { useState, useEffect, useMemo } from "react";
import { Clock, BarChart3, Trophy, AlertCircle } from "lucide-react";
import { getPractitioner, getSessions, formatDuration } from "@/lib/storage";
import type { PractitionerProfile, SessionRecord } from "@/data/types";

const gradeConfig: Record<string, { label: string; color: string }> = {
  A: { label: "A 优秀", color: "text-emerald-600" },
  B: { label: "B 良好", color: "text-blue-600" },
  C: { label: "C 合格", color: "text-amber-600" },
  D: { label: "D 需改进", color: "text-red-600" },
};

function getGrade(score: number): string {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  return "D";
}

export default function HistoryPage() {
  const [practitioner, setPractitioner] = useState<PractitionerProfile | null>(
    null
  );
  const [sessions, setSessions] = useState<SessionRecord[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const p = getPractitioner();
    setPractitioner(p);
    if (p) {
      const all = getSessions().filter((s) => s.practitionerId === p.id);
      setSessions(all.sort((a, b) => b.startTime.localeCompare(a.startTime)));
    }
    setLoaded(true);
  }, []);

  const stats = useMemo(() => {
    if (sessions.length === 0) return null;
    const totalTime = sessions.reduce((s, r) => s + r.durationSeconds, 0);
    const avgScore =
      sessions.reduce((s, r) => s + r.score.overall, 0) / sessions.length;
    const completed = sessions.filter((s) => s.completed).length;
    return { totalTime, avgScore, completed, total: sessions.length };
  }, [sessions]);

  if (!loaded) return null;

  if (!practitioner) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-sm">
          <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-700 mb-2">
            请先登录
          </h2>
          <p className="text-sm text-slate-500">
            点击右上角的登录按钮，输入学号和姓名后即可查看练习记录
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            练习记录
          </h1>
          <p className="mt-1 text-slate-500">
            {practitioner.name}（{practitioner.id}）的练习历史
          </p>
        </div>

        {/* Stats cards */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-xs text-slate-400 mb-1">总练习次数</p>
              <p className="text-2xl font-bold text-slate-800">
                {stats.total}
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-xs text-slate-400 mb-1">完成练习</p>
              <p className="text-2xl font-bold text-emerald-600">
                {stats.completed}
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-xs text-slate-400 mb-1">总练习时长</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatDuration(stats.totalTime)}
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-xs text-slate-400 mb-1">平均分数</p>
              <p className="text-2xl font-bold text-amber-600">
                {Math.round(stats.avgScore)}
              </p>
            </div>
          </div>
        )}

        {/* Session list */}
        {sessions.length === 0 ? (
          <div className="text-center py-20">
            <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-400 mb-2">暂无练习记录</p>
            <p className="text-sm text-slate-400">
              完成一次练习场景后，记录会自动保存在这里
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sessions.map((session) => {
              const grade = getGrade(session.score.overall);
              const gc = gradeConfig[grade];
              const date = new Date(session.startTime);
              return (
                <div
                  key={session.id}
                  className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-800 truncate">
                        {session.scenarioTitle}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-400">
                        <span>
                          {date.toLocaleDateString("zh-CN")} {date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDuration(session.durationSeconds)}
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          {Math.round(session.score.overall)}分
                        </span>
                        {session.completed && (
                          <span className="flex items-center gap-1 text-emerald-500">
                            <Trophy className="w-3 h-3" />
                            已完成
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-lg font-bold shrink-0 ${gc.color}`}
                    >
                      {gc.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
