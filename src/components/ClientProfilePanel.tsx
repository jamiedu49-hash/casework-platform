"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { ClientProfile, EmotionState, CaseStage } from "@/data/types";

interface ClientProfilePanelProps {
  profile: ClientProfile;
  currentEmotion: EmotionState;
  currentStage: CaseStage;
}

const emotionConfig: Record<
  EmotionState,
  { emoji: string; label: string; color: string; bg: string }
> = {
  calm: { emoji: "😌", label: "平静", color: "text-emerald-600", bg: "bg-emerald-50" },
  anxious: { emoji: "😰", label: "焦虑", color: "text-orange-600", bg: "bg-orange-50" },
  sad: { emoji: "😢", label: "悲伤", color: "text-blue-600", bg: "bg-blue-50" },
  angry: { emoji: "😠", label: "愤怒", color: "text-red-600", bg: "bg-red-50" },
  resistant: { emoji: "😤", label: "抗拒", color: "text-purple-600", bg: "bg-purple-50" },
  hopeful: { emoji: "😊", label: "希望", color: "text-emerald-600", bg: "bg-emerald-50" },
  confused: { emoji: "😕", label: "困惑", color: "text-slate-500", bg: "bg-slate-100" },
  distressed: { emoji: "😣", label: "痛苦", color: "text-rose-700", bg: "bg-rose-50" },
};

const stageOrder: CaseStage[] = [
  "intake",
  "assessment",
  "planning",
  "intervention",
  "evaluation",
  "termination",
];

const stageLabels: Record<CaseStage, string> = {
  intake: "接案",
  assessment: "预估",
  planning: "计划",
  intervention: "介入",
  evaluation: "评估",
  termination: "结案",
};

export default function ClientProfilePanel({
  profile,
  currentEmotion,
  currentStage,
}: ClientProfilePanelProps) {
  const [bgOpen, setBgOpen] = useState(false);
  const emotion = emotionConfig[currentEmotion];
  const currentStageIdx = stageOrder.indexOf(currentStage);

  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
      {/* Header with avatar */}
      <div className="p-5 pb-4 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-5xl mb-3">
          {profile.avatar}
        </div>
        <h3 className="text-lg font-bold text-slate-800">{profile.name}</h3>
        <p className="text-sm text-slate-400 mt-0.5">
          {profile.age}岁 / {profile.gender} / {profile.occupation}
        </p>
      </div>

      <div className="px-5 pb-5 space-y-4">
        {/* Current emotion indicator */}
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
            当前情绪
          </p>
          <div
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl ${emotion.bg} transition-colors duration-500`}
          >
            <span className="text-2xl">{emotion.emoji}</span>
            <span className={`text-sm font-semibold ${emotion.color}`}>
              {emotion.label}
            </span>
          </div>
        </div>

        {/* Stage progress */}
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
            案例阶段
          </p>
          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-[11px] left-3 right-3 h-0.5 bg-slate-200" />
            <div
              className="absolute top-[11px] left-3 h-0.5 bg-blue-500 transition-all duration-700"
              style={{
                width:
                  currentStageIdx > 0
                    ? `calc(${(currentStageIdx / (stageOrder.length - 1)) * 100}% - 24px)`
                    : "0px",
              }}
            />

            {stageOrder.map((stage, idx) => {
              const isCompleted = idx < currentStageIdx;
              const isCurrent = idx === currentStageIdx;

              return (
                <div
                  key={stage}
                  className="flex flex-col items-center relative z-10"
                >
                  <div
                    className={`
                      w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${
                        isCompleted
                          ? "bg-blue-500 border-blue-500"
                          : isCurrent
                            ? "bg-white border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.2)] animate-pulse"
                            : "bg-white border-slate-300"
                      }
                    `}
                  >
                    {isCompleted && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    {isCurrent && (
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] mt-1.5 whitespace-nowrap ${
                      isCurrent
                        ? "text-blue-600 font-semibold"
                        : isCompleted
                          ? "text-blue-500"
                          : "text-slate-400"
                    }`}
                  >
                    {stageLabels[stage]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Background (collapsible) */}
        <div>
          <button
            type="button"
            onClick={() => setBgOpen(!bgOpen)}
            className="flex items-center justify-between w-full text-left group"
          >
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              背景信息
            </span>
            {bgOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              bgOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-sm text-slate-600 leading-relaxed p-3 rounded-xl bg-slate-50">
              {profile.background}
            </div>
            <div className="mt-2 text-sm text-slate-600 leading-relaxed p-3 rounded-xl bg-slate-50">
              <p className="text-xs font-medium text-slate-400 mb-1">主诉问题</p>
              {profile.presentingProblem}
            </div>
          </div>
        </div>

        {/* Key traits */}
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
            关键特征
          </p>
          <div className="flex flex-wrap gap-1.5">
            {profile.keyTraits.map((trait) => (
              <span
                key={trait}
                className="px-2.5 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
