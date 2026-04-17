"use client";

import type { CaseStage } from "@/data/types";

interface StageIndicatorProps {
  currentStage: CaseStage;
  completedStages: CaseStage[];
}

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

export default function StageIndicator({
  currentStage,
  completedStages,
}: StageIndicatorProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-start min-w-[480px] px-2">
        {stageOrder.map((stage, idx) => {
          const isCompleted = completedStages.includes(stage);
          const isCurrent = currentStage === stage;
          const isLast = idx === stageOrder.length - 1;

          // Line status: the line AFTER this dot
          const nextStage = stageOrder[idx + 1];
          const isLineCompleted = nextStage
            ? completedStages.includes(nextStage) || currentStage === nextStage
            : false;

          return (
            <div key={stage} className="flex items-start flex-1 min-w-0">
              {/* Dot + label column */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div
                  className={`
                    relative w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500
                    ${
                      isCompleted
                        ? "bg-blue-500"
                        : isCurrent
                          ? "border-[3px] border-blue-500 bg-white"
                          : "border-2 border-slate-300 bg-white"
                    }
                  `}
                >
                  {isCompleted && (
                    <svg
                      className="w-4 h-4 text-white"
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
                    <>
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30" />
                    </>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`
                    text-xs mt-2 whitespace-nowrap transition-colors duration-300
                    ${
                      isCurrent
                        ? "text-blue-600 font-bold"
                        : isCompleted
                          ? "text-blue-500 font-medium"
                          : "text-slate-400"
                    }
                  `}
                >
                  {stageLabels[stage]}
                </span>
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div className="flex-1 flex items-center h-8 px-1">
                  <div
                    className={`
                      w-full h-0.5 rounded-full transition-colors duration-700
                      ${isLineCompleted || isCompleted ? "bg-blue-500" : "bg-slate-200"}
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
