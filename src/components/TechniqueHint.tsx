"use client";

import { Lightbulb, ChevronDown, BookOpen } from "lucide-react";
import type { Technique } from "@/data/types";

interface TechniqueHintProps {
  hints: string[];
  techniques: Technique[];
  isOpen: boolean;
  onToggle: () => void;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  supportive: { bg: "bg-emerald-50", text: "text-emerald-700" },
  exploratory: { bg: "bg-blue-50", text: "text-blue-700" },
  cognitive: { bg: "bg-purple-50", text: "text-purple-700" },
  behavioral: { bg: "bg-amber-50", text: "text-amber-700" },
  structural: { bg: "bg-slate-100", text: "text-slate-700" },
};

export default function TechniqueHint({
  hints,
  techniques,
  isOpen,
  onToggle,
}: TechniqueHintProps) {
  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/60 text-sm font-medium text-amber-700 transition-all duration-200 hover:shadow-sm"
      >
        <Lightbulb className="w-4 h-4" />
        查看提示
      </button>
    );
  }

  return (
    <div className="rounded-2xl border border-amber-200/60 bg-gradient-to-b from-amber-50/80 to-white overflow-hidden transition-all duration-300 shadow-sm animate-fade-in">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 hover:bg-amber-50/50 transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700">
            提示与技巧
          </span>
        </div>
        <ChevronDown className="w-4 h-4 text-amber-400 rotate-180 transition-transform duration-200" />
      </button>

      <div className="px-4 pb-4 space-y-4">
        {/* Hints */}
        {hints.length > 0 && (
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
              思路提示
            </p>
            <ul className="space-y-2">
              {hints.map((hint, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
                >
                  <span className="text-amber-500 mt-0.5 shrink-0">
                    {idx + 1}.
                  </span>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Techniques */}
        {techniques.length > 0 && (
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
              建议技巧
            </p>
            <div className="space-y-2">
              {techniques.map((tech) => {
                const colors =
                  categoryColors[tech.category] || categoryColors.structural;
                return (
                  <div
                    key={tech.id}
                    className={`p-3 rounded-xl ${colors.bg} border border-slate-200/40`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className={`w-3.5 h-3.5 ${colors.text}`} />
                      <span
                        className={`text-sm font-semibold ${colors.text}`}
                      >
                        {tech.nameZh}
                      </span>
                      <span className="text-xs text-slate-400">
                        {tech.nameEn}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
