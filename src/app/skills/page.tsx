"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen } from "lucide-react";
import { techniques } from "@/data/techniques";
import type { TechniqueCategory, CaseStage } from "@/data/types";

const categoryConfig: Record<
  TechniqueCategory,
  { label: string; color: string; bg: string }
> = {
  supportive: {
    label: "支持性技巧",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  exploratory: {
    label: "探索性技巧",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  cognitive: {
    label: "认知改变技巧",
    color: "text-violet-700",
    bg: "bg-violet-50",
  },
  behavioral: {
    label: "行为改变技巧",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  structural: {
    label: "结构化技巧",
    color: "text-rose-700",
    bg: "bg-rose-50",
  },
};

const stageLabels: Record<CaseStage, string> = {
  intake: "接案",
  assessment: "评估",
  planning: "计划",
  intervention: "干预",
  evaluation: "评价",
  termination: "结案",
};

type FilterCategory = "all" | TechniqueCategory;

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTechniques = useMemo(() => {
    let list = techniques;

    // Filter by category
    if (activeCategory !== "all") {
      list = list.filter((t) => t.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (t) =>
          t.nameZh.toLowerCase().includes(q) ||
          t.nameEn.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  const categories: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "全部" },
    { key: "supportive", label: "支持性" },
    { key: "exploratory", label: "探索性" },
    { key: "cognitive", label: "认知改变" },
    { key: "behavioral", label: "行为改变" },
    { key: "structural", label: "结构化" },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-blue-600" />
            干预技巧手册
          </h1>
          <p className="mt-2 text-slate-500 max-w-2xl">
            系统学习个案工作中常用的干预技巧，每个技巧包含定义、示范话术和适用阶段。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left sidebar: Category navigation */}
          <aside className="lg:w-[220px] shrink-0">
            {/* Search box */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="搜索技巧..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-200"
              />
            </div>

            {/* Category tabs - horizontal on mobile, vertical on desktop */}
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap text-left transition-colors duration-200 ${
                    activeCategory === cat.key
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                  {cat.key !== "all" && (
                    <span className="ml-1.5 text-xs opacity-60">
                      (
                      {
                        techniques.filter(
                          (t) => t.category === cat.key
                        ).length
                      }
                      )
                    </span>
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Right: Technique cards */}
          <div className="flex-1 min-w-0">
            {filteredTechniques.length > 0 ? (
              <div className="space-y-4">
                {filteredTechniques.map((technique) => {
                  const catConfig = categoryConfig[technique.category];
                  return (
                    <div
                      key={technique.id}
                      className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="p-5 sm:p-6">
                        {/* Title row */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-slate-800">
                              {technique.nameZh}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {technique.nameEn}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold ${catConfig.bg} ${catConfig.color}`}
                          >
                            {catConfig.label}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {technique.description}
                        </p>

                        {/* Example */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                          <p className="text-xs font-semibold text-slate-500 mb-1.5">
                            示范话术
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed italic">
                            &ldquo;{technique.example}&rdquo;
                          </p>
                        </div>

                        {/* Applicable stages */}
                        <div>
                          <p className="text-xs font-semibold text-slate-500 mb-1.5">
                            适用阶段
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {technique.stage.map((s) => (
                              <span
                                key={s}
                                className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium"
                              >
                                {stageLabels[s]}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-slate-400 mb-2">未找到匹配的技巧</p>
                <p className="text-sm text-slate-400">
                  请尝试调整筛选条件或搜索关键词
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
