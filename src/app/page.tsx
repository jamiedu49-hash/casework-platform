"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, MessageSquare, BarChart3, ClipboardList } from "lucide-react";
import { scenarios } from "@/data/scenarios";

const features = [
  {
    icon: ClipboardList,
    emoji: "📋",
    title: "真实场景",
    description: "基于真实个案工作案例设计的多种模拟场景",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageSquare,
    emoji: "💬",
    title: "交互对话",
    description: "与虚拟案主进行真实感对话，练习干预技巧",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "即时评估",
    description: "多维度评分和专业反馈，助你持续进步",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: BookOpen,
    emoji: "📚",
    title: "技巧手册",
    description: "完整的干预技巧参考，随时查阅学习",
    color: "bg-purple-50 text-purple-600",
  },
];

const difficultyLabel: Record<string, string> = {
  beginner: "初级",
  intermediate: "中级",
  advanced: "高级",
};

const difficultyColor: Record<string, string> = {
  beginner: "bg-emerald-50 text-emerald-700",
  intermediate: "bg-blue-50 text-blue-700",
  advanced: "bg-purple-50 text-purple-700",
};

export default function HomePage() {
  const recommendedScenarios = scenarios.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
                个案工作
                <br />
                <span className="text-blue-600">模拟训练平台</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
                在安全的环境中练习专业社会工作技能，从接案到结案的全流程模拟训练。
                通过真实场景对话和即时专业反馈，帮助你成为更好的社会工作者。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/scenarios"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors duration-200"
                >
                  开始练习
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/skills"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors duration-200"
                >
                  浏览技巧手册
                </Link>
              </div>
            </div>

            {/* Right: Decorative illustration */}
            <div className="flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-emerald-100 opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-6xl sm:text-7xl">���</div>
                  <div className="flex justify-center gap-3 text-3xl sm:text-4xl">
                    <span>👩‍💼</span>
                    <span>💬</span>
                    <span>🧑</span>
                  </div>
                  <div className="flex justify-center gap-2 text-2xl sm:text-3xl">
                    <span>📋</span>
                    <span>❤️</span>
                    <span>📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              平台特色
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              专为社会工作专业学生和从业者设计的实务训练工具
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                推荐场景
              </h2>
              <p className="mt-2 text-slate-500">
                选择一个场景开始你的练习之旅
              </p>
            </div>
            <Link
              href="/scenarios"
              className="hidden sm:inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedScenarios.map((scenario) => (
              <Link
                key={scenario.id}
                href={`/practice/${scenario.id}`}
                className="group block rounded-2xl bg-stone-50 border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Banner */}
                <div
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${scenario.coverColor})`,
                  }}
                >
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                    {scenario.icon}
                  </span>
                  <span
                    className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold ${difficultyColor[scenario.difficulty]}`}
                  >
                    {difficultyLabel[scenario.difficulty]}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 mb-1.5">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                    {scenario.subtitle}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{scenario.clientProfile.avatar}</span>
                    <span className="text-sm text-slate-600">
                      {scenario.clientProfile.name}
                    </span>
                    <span className="text-xs text-slate-400">
                      {scenario.clientProfile.age}岁 / {scenario.clientProfile.occupation}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/scenarios"
              className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm"
            >
              查看全部场景
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} 个案工作模拟训练平台 - 社会工作实务技能训练工具
          </p>
        </div>
      </footer>
    </div>
  );
}
