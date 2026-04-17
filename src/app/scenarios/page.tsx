"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Filter, Layers } from "lucide-react";
import { scenarios } from "@/data/scenarios";
import type { DifficultyLevel, CaseStage, Scenario } from "@/data/types";
import ScenarioCard from "@/components/ScenarioCard";

type DifficultyFilter = "all" | DifficultyLevel;
type StageFilter = "all" | CaseStage;

const difficultyTabs: { key: DifficultyFilter; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "beginner", label: "初级" },
  { key: "intermediate", label: "中级" },
  { key: "advanced", label: "高级" },
];

const stageTabs: { key: StageFilter; label: string }[] = [
  { key: "all", label: "全部阶段" },
  { key: "intake", label: "接案" },
  { key: "assessment", label: "预估" },
  { key: "planning", label: "计划" },
  { key: "intervention", label: "介入" },
  { key: "evaluation", label: "评估" },
  { key: "termination", label: "结案" },
];

export default function ScenariosPage() {
  const router = useRouter();
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");
  const [stageFilter, setStageFilter] = useState<StageFilter>("all");

  const filteredScenarios = useMemo(() => {
    let list = scenarios;
    if (difficultyFilter !== "all") {
      list = list.filter((s) => s.difficulty === difficultyFilter);
    }
    if (stageFilter !== "all") {
      list = list.filter((s) => s.primaryStage === stageFilter);
    }
    return list;
  }, [difficultyFilter, stageFilter]);

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
            每个场景模拟一次完整的个案面谈，涵盖不同难度和个案工作阶段。
            选择适合你的场景，开始沉浸式练习。
          </p>
        </div>

        {/* Filter: Difficulty */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {difficultyTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setDifficultyFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                difficultyFilter === tab.key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filter: Stage */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Layers className="w-4 h-4 text-slate-400 shrink-0" />
          {stageTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStageFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                stageFilter === tab.key
                  ? "bg-emerald-600 text-white shadow-sm"
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
              该筛选条件下暂无场景，请调整难度或阶段筛选
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
