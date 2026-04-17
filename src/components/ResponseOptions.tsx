"use client";

import { Star, ThumbsUp, Lightbulb, AlertTriangle, Check } from "lucide-react";
import type { ResponseOption, ResponseQuality } from "@/data/types";

interface ResponseOptionsProps {
  options: ResponseOption[];
  onSelect: (option: ResponseOption) => void;
  disabled?: boolean;
  showFeedback?: boolean;
  selectedId?: string | null;
}

const qualityConfig: Record<
  ResponseQuality,
  {
    border: string;
    bg: string;
    text: string;
    icon: React.ElementType;
    label: string;
  }
> = {
  excellent: {
    border: "border-emerald-400",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    icon: Star,
    label: "优秀",
  },
  good: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    text: "text-blue-700",
    icon: ThumbsUp,
    label: "良好",
  },
  fair: {
    border: "border-amber-400",
    bg: "bg-amber-50",
    text: "text-amber-700",
    icon: Lightbulb,
    label: "一般",
  },
  poor: {
    border: "border-red-400",
    bg: "bg-red-50",
    text: "text-red-700",
    icon: AlertTriangle,
    label: "不佳",
  },
};

export default function ResponseOptions({
  options,
  onSelect,
  disabled = false,
  showFeedback = false,
  selectedId = null,
}: ResponseOptionsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-slate-500 mb-2">
        请选择你的回应：
      </p>
      {options.map((option) => {
        const isSelected = selectedId === option.id;
        const isOther = selectedId !== null && !isSelected;
        const quality = qualityConfig[option.quality];
        const QualityIcon = quality.icon;

        return (
          <button
            key={option.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(option)}
            className={`
              w-full text-left rounded-xl border-2 p-4 transition-all duration-300
              ${
                isSelected && showFeedback
                  ? `${quality.border} ${quality.bg}`
                  : isSelected
                    ? "border-blue-400 bg-blue-50"
                    : isOther
                      ? "border-slate-100 bg-slate-50 opacity-50"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
              }
              ${disabled ? "cursor-default" : "cursor-pointer"}
            `}
          >
            {/* Option text */}
            <div className="flex items-start gap-3">
              <div
                className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200
                  ${isSelected ? "border-blue-500 bg-blue-500" : "border-slate-300"}
                `}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {option.text}
              </p>
            </div>

            {/* Feedback section (shown after selection) */}
            {isSelected && showFeedback && (
              <div className="mt-3 pt-3 border-t border-slate-200/60 animate-fade-in">
                {/* Quality indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <QualityIcon className={`w-4 h-4 ${quality.text}`} />
                  <span className={`text-sm font-semibold ${quality.text}`}>
                    {quality.label}
                  </span>
                </div>

                {/* Feedback text */}
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {option.feedback}
                </p>

                {/* Technique tags */}
                {option.techniques.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {option.techniques.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-white/80 text-xs font-medium text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
