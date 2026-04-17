"use client";

import {
  Award,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import type { AssessmentScore } from "@/data/types";

interface AssessmentReportProps {
  score: AssessmentScore;
  scenarioTitle: string;
  onBack?: () => void;
  onRetry?: () => void;
}

interface DimensionInfo {
  key: keyof Pick<
    AssessmentScore,
    "empathy" | "questioning" | "intervention" | "structure" | "ethics"
  >;
  label: string;
  weight: string;
}

const dimensions: DimensionInfo[] = [
  { key: "empathy", label: "共情能力", weight: "30%" },
  { key: "questioning", label: "提问探索", weight: "20%" },
  { key: "intervention", label: "干预技巧", weight: "25%" },
  { key: "structure", label: "会谈结构", weight: "15%" },
  { key: "ethics", label: "伦理边界", weight: "10%" },
];

function getGrade(score: number): {
  letter: string;
  color: string;
  bg: string;
  label: string;
} {
  if (score >= 90)
    return { letter: "A", color: "text-emerald-600", bg: "bg-emerald-50", label: "优秀" };
  if (score >= 80)
    return { letter: "A-", color: "text-emerald-600", bg: "bg-emerald-50", label: "良好" };
  if (score >= 70)
    return { letter: "B", color: "text-blue-600", bg: "bg-blue-50", label: "合格" };
  if (score >= 60)
    return { letter: "C", color: "text-amber-600", bg: "bg-amber-50", label: "需改进" };
  return { letter: "D", color: "text-red-600", bg: "bg-red-50", label: "待加强" };
}

function getBarColor(score: number): string {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-blue-500";
  if (score >= 40) return "bg-amber-500";
  return "bg-red-500";
}

export default function AssessmentReport({
  score,
  scenarioTitle,
  onBack,
  onRetry,
}: AssessmentReportProps) {
  const grade = getGrade(score.overall);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header card */}
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center text-white">
          <Award className="w-10 h-10 mx-auto mb-2 opacity-90" />
          <h2 className="text-xl font-bold mb-1">练习报告</h2>
          <p className="text-sm text-blue-100">{scenarioTitle}</p>
        </div>

        {/* Overall score */}
        <div className="p-6 flex items-center justify-center gap-6">
          <div
            className={`w-24 h-24 rounded-2xl ${grade.bg} flex flex-col items-center justify-center`}
          >
            <span className={`text-3xl font-black ${grade.color}`}>
              {grade.letter}
            </span>
            <span className={`text-xs font-medium ${grade.color} mt-0.5`}>
              {grade.label}
            </span>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">综合得分</p>
            <p className="text-4xl font-black text-slate-800">
              {score.overall}
              <span className="text-lg text-slate-400 font-normal"> / 100</span>
            </p>
          </div>
        </div>
      </div>

      {/* Dimension scores */}
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <BarChart3 className="w-5 h-5 text-blue-500" />
          <h3 className="text-base font-bold text-slate-800">维度评分</h3>
        </div>

        <div className="space-y-4">
          {dimensions.map((dim) => {
            const value = score[dim.key];
            const barColor = getBarColor(value);

            return (
              <div key={dim.key}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">
                      {dim.label}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      权重 {dim.weight}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    {value}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColor} transition-all duration-1000 ease-out`}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Techniques used */}
      {score.techniquesUsed.length > 0 && (
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5 sm:p-6">
          <h3 className="text-base font-bold text-slate-800 mb-3">
            使用的技巧
          </h3>
          <div className="flex flex-wrap gap-2">
            {score.techniquesUsed.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-blue-50 text-sm font-medium text-blue-700 border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Strengths & improvements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Strengths */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <h3 className="text-base font-bold text-slate-800">优势</h3>
          </div>
          <ul className="space-y-2">
            {score.strengths.map((s, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
              >
                <span className="text-emerald-400 mt-1 shrink-0">&#x2022;</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-slate-800">改进建议</h3>
          </div>
          <ul className="space-y-2">
            {score.improvements.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
              >
                <span className="text-amber-400 mt-1 shrink-0">&#x2022;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Feedback list */}
      {score.feedback.length > 0 && (
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5 sm:p-6">
          <h3 className="text-base font-bold text-slate-800 mb-3">
            详细反馈
          </h3>
          <ul className="space-y-2">
            {score.feedback.map((fb, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-200"
              >
                {fb}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2 pb-6">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            返回场景库
          </button>
        )}
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-sm font-semibold text-white hover:bg-blue-600 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            重新练习
          </button>
        )}
      </div>
    </div>
  );
}
