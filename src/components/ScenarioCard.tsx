"use client";

import { Clock, Users } from "lucide-react";
import type { Scenario, DifficultyLevel, CaseStage } from "@/data/types";

interface ScenarioCardProps {
  scenario: Scenario;
  onClick: (scenario: Scenario) => void;
}

const difficultyConfig: Record<
  DifficultyLevel,
  { label: string; bg: string; text: string }
> = {
  beginner: {
    label: "初级",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  intermediate: {
    label: "中级",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  advanced: {
    label: "高级",
    bg: "bg-purple-50",
    text: "text-purple-700",
  },
};

const stageLabels: Record<CaseStage, string> = {
  intake: "接案",
  assessment: "预估",
  planning: "计划",
  intervention: "介入",
  evaluation: "评估",
  termination: "结案",
};

export default function ScenarioCard({ scenario, onClick }: ScenarioCardProps) {
  const difficulty = difficultyConfig[scenario.difficulty];

  return (
    <button
      type="button"
      onClick={() => onClick(scenario)}
      className="group w-full text-left rounded-2xl bg-white shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      {/* Top gradient banner */}
      <div
        className="h-28 sm:h-32 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${scenario.coverColor})`,
        }}
      >
        <span className="text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
          {scenario.icon}
        </span>
        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/80 text-slate-700 backdrop-blur-sm">
            {stageLabels[scenario.primaryStage]}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${difficulty.bg} ${difficulty.text}`}
          >
            {difficulty.label}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-bold text-slate-800 mb-1 line-clamp-1">
          {scenario.title}
        </h3>
        <p className="text-sm text-slate-500 mb-3 line-clamp-2">
          {scenario.subtitle}
        </p>

        {/* Client mini profile */}
        <div className="flex items-center gap-2.5 mb-3 p-2.5 rounded-xl bg-slate-50">
          <span className="text-2xl">{scenario.clientProfile.avatar}</span>
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-700 truncate">
              {scenario.clientProfile.name}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {scenario.clientProfile.age}岁 /{" "}
              {scenario.clientProfile.occupation}
            </p>
          </div>
        </div>

        {/* Meta info row */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {scenario.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {scenario.category}
          </span>
        </div>
      </div>
    </button>
  );
}
