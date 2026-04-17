"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import { scenarios } from "@/data/scenarios";
import type { DifficultyLevel, Scenario } from "@/data/types";
import ScenarioCard from "@/components/ScenarioCard";

type FilterTab = "all" | DifficultyLevel;

const filterTabs: { key: FilterTab; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "beginner", label: "初级" },
  { key: "intermediate", label: "中级" },
  { key: "advanced", label: "高级" },
];

export default function ScenariosPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filteredScenarios =
    activeFilter === "all"
      ? scenarios
      : scenarios.filter((s) => s.difficulty === activeFilter);

  function handleScenarioClick(scenario: Scenario) {
    router.push(`/practice/${scenario.id}`);
  }

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            选择练习场景
          </h1>
          <p className="mt-2 text-slate-500 max-w-2xl">
            每个场景模拟一次完整的个案面谈，涵盖不同难度和主题。
            选择适合你的场景，开始沉浸式练习。
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeFilter === tab.key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scenario grid */}
        {filteredScenarios.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
                onClick={handleScenarioClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              该难度下暂无场景，请选择其他难度
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
