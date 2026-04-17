"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronRight,
  User,
  Lightbulb,
  RotateCcw,
  Home,
  X,
  Menu,
  CheckCircle2,
  Star,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { getScenarioById } from "@/data/scenarios";
import { getTechniqueById } from "@/data/techniques";
import { calculateAssessment, getGrade, getGradeColor, getGradeBgColor } from "@/lib/assessment";
import ChatMessage from "@/components/ChatMessage";
import type {
  EmotionState,
  ResponseOption,
  CaseStage,
  ResponseQuality,
  AssessmentScore,
} from "@/data/types";

// ---- Stage helpers ----
const stageConfig: Record<CaseStage, { label: string; color: string }> = {
  intake: { label: "接案", color: "bg-blue-500" },
  assessment: { label: "评估", color: "bg-indigo-500" },
  planning: { label: "计划", color: "bg-violet-500" },
  intervention: { label: "干预", color: "bg-amber-500" },
  evaluation: { label: "评价", color: "bg-emerald-500" },
  termination: { label: "结案", color: "bg-rose-500" },
};

const stageOrder: CaseStage[] = [
  "intake",
  "assessment",
  "planning",
  "intervention",
  "evaluation",
  "termination",
];

const emotionLabels: Record<EmotionState, string> = {
  calm: "平静",
  anxious: "焦虑",
  sad: "悲伤",
  angry: "愤怒",
  resistant: "抗拒",
  hopeful: "希望",
  confused: "困惑",
  distressed: "痛苦",
};

const emotionEmoji: Record<EmotionState, string> = {
  calm: "😌",
  anxious: "😰",
  sad: "😢",
  angry: "😠",
  resistant: "😤",
  hopeful: "😊",
  confused: "😕",
  distressed: "😣",
};

interface ChatEntry {
  text: string;
  isClient: boolean;
  emotion?: EmotionState;
  action?: string;
}

interface ResponseRecord {
  nodeId: string;
  quality: ResponseQuality;
  techniques: string[];
  stage: CaseStage;
}

// ---- Main Component ----
export default function PracticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const scenario = getScenarioById(id);

  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [messages, setMessages] = useState<ChatEntry[]>([]);
  const [responses, setResponses] = useState<ResponseRecord[]>([]);
  const [currentEmotion, setCurrentEmotion] = useState<EmotionState>(
    scenario?.clientProfile.emotionalState ?? "calm"
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<ResponseOption | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [showClientPanel, setShowClientPanel] = useState(false);
  const [showHintPanel, setShowHintPanel] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll chat to bottom
  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showFeedback, scrollToBottom]);

  // Load first node on mount (strict-mode safe)
  useEffect(() => {
    if (!scenario) return;
    const firstNode = scenario.dialogueNodes[0];
    if (!firstNode) return;

    // Reset state on each mount (handles React strict mode re-mount)
    setMessages([]);
    setIsTyping(true);

    const timer = setTimeout(() => {
      setIsTyping(false);
      setMessages([
        {
          text: firstNode.clientMessage,
          isClient: true,
          emotion: firstNode.clientEmotion,
          action: firstNode.clientAction,
        },
      ]);
      setCurrentEmotion(firstNode.clientEmotion);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [scenario]);

  if (!scenario) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-slate-400 mb-4">未找到该场景</p>
          <Link
            href="/scenarios"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            返回场景列表
          </Link>
        </div>
      </div>
    );
  }

  const currentNode = scenario.dialogueNodes[currentNodeIndex];
  const activeStages = [
    ...new Set(scenario.dialogueNodes.map((n) => n.stage)),
  ];

  // Handle selecting a response option
  function handleSelectOption(option: ResponseOption) {
    if (showFeedback || isComplete) return;
    setSelectedOptionId(option.id);
    setSelectedOption(option);
    setShowFeedback(true);

    // Record the response
    setResponses((prev) => [
      ...prev,
      {
        nodeId: currentNode.id,
        quality: option.quality,
        techniques: option.techniques,
        stage: currentNode.stage,
      },
    ]);
  }

  // Handle continuing after feedback
  function handleContinue() {
    if (!selectedOption) return;

    // Add social worker message
    setMessages((prev) => [
      ...prev,
      { text: selectedOption.text, isClient: false },
    ]);
    setShowFeedback(false);
    setSelectedOptionId(null);

    // Update emotion based on impact
    const impact = selectedOption.emotionImpact;
    if (impact >= 2) {
      setCurrentEmotion("hopeful");
    } else if (impact <= -2) {
      setCurrentEmotion("distressed");
    }

    // Check if this is the last node (end IDs follow pattern: "xx-end" or "node_end")
    if (selectedOption.nextNodeId.endsWith('-end') || selectedOption.nextNodeId === 'node_end') {
      setIsComplete(true);
      setSelectedOption(null);
      return;
    }

    if (!scenario) return;

    // Find the next node
    const nextNodeIndex = scenario.dialogueNodes.findIndex(
      (n) => n.id === selectedOption.nextNodeId
    );
    if (nextNodeIndex === -1) {
      // Fallback: advance to the next sequential node
      const nextIdx = currentNodeIndex + 1;
      if (nextIdx >= scenario.dialogueNodes.length) {
        setIsComplete(true);
        setSelectedOption(null);
        return;
      }
      advanceToNode(nextIdx);
    } else {
      advanceToNode(nextNodeIndex);
    }

    setSelectedOption(null);
  }

  function advanceToNode(nextIdx: number) {
    if (!scenario) return;
    const nextNode = scenario.dialogueNodes[nextIdx];
    setCurrentNodeIndex(nextIdx);

    // Show typing animation, then display client message
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: nextNode.clientMessage,
          isClient: true,
          emotion: nextNode.clientEmotion,
          action: nextNode.clientAction,
        },
      ]);
      setCurrentEmotion(nextNode.clientEmotion);
    }, 1200 + Math.random() * 800);
  }

  // Show assessment report
  function handleShowAssessment() {
    setShowAssessment(true);
  }

  // Reset and restart
  function handleRestart() {
    if (!scenario) return;
    setCurrentNodeIndex(0);
    setMessages([]);
    setResponses([]);
    setCurrentEmotion(scenario.clientProfile.emotionalState);
    setShowFeedback(false);
    setSelectedOptionId(null);
    setSelectedOption(null);
    setIsTyping(false);
    setIsComplete(false);
    setShowAssessment(false);
  }

  const assessmentScore = isComplete ? calculateAssessment(responses) : null;

  // Quality option color
  function getOptionBorderClass(quality: ResponseQuality, isSelected: boolean) {
    if (!isSelected) return "border-slate-200 hover:border-slate-300";
    switch (quality) {
      case "excellent":
        return "border-emerald-400 bg-emerald-50";
      case "good":
        return "border-blue-400 bg-blue-50";
      case "fair":
        return "border-amber-400 bg-amber-50";
      case "poor":
        return "border-red-400 bg-red-50";
    }
  }

  function getQualityBadge(quality: ResponseQuality) {
    switch (quality) {
      case "excellent":
        return (
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
            优秀
          </span>
        );
      case "good":
        return (
          <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
            良好
          </span>
        );
      case "fair":
        return (
          <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
            一般
          </span>
        );
      case "poor":
        return (
          <span className="text-xs font-semibold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
            不当
          </span>
        );
    }
  }

  // ---- Assessment Report ----
  if (showAssessment && assessmentScore) {
    return <AssessmentReport score={assessmentScore} scenario={scenario} onRestart={handleRestart} />;
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
      {/* Stage Indicator */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto">
          {stageOrder
            .filter((s) => activeStages.includes(s))
            .map((stage, idx, arr) => {
              const config = stageConfig[stage];
              const isCurrent = currentNode?.stage === stage;
              const isPast =
                stageOrder.indexOf(stage) <
                stageOrder.indexOf(currentNode?.stage ?? "intake");

              return (
                <div key={stage} className="flex items-center gap-1 sm:gap-2 shrink-0">
                  <div
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isCurrent
                        ? `${config.color} text-white animate-pulse-ring`
                        : isPast
                        ? "bg-slate-200 text-slate-500"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isCurrent
                          ? "bg-white"
                          : isPast
                          ? "bg-slate-400"
                          : "bg-slate-300"
                      }`}
                    />
                    {config.label}
                  </div>
                  {idx < arr.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  )}
                </div>
              );
            })}

          {/* Mobile panel toggles */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setShowClientPanel(!showClientPanel)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="案主信息"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowHintPanel(!showHintPanel)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="技巧提示"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-column layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Panel: Client Profile */}
        <aside
          className={`w-[260px] shrink-0 bg-white border-r border-slate-200 overflow-y-auto p-4 hidden lg:block`}
        >
          <ClientProfilePanel
            profile={scenario.clientProfile}
            currentEmotion={currentEmotion}
          />
        </aside>

        {/* Mobile Client Panel Drawer */}
        {showClientPanel && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setShowClientPanel(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-white shadow-xl overflow-y-auto p-4 animate-fadeInUp">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">案主信息</h3>
                <button
                  onClick={() => setShowClientPanel(false)}
                  className="p-1 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ClientProfilePanel
                profile={scenario.clientProfile}
                currentEmotion={currentEmotion}
              />
            </div>
          </div>
        )}

        {/* Center: Chat Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="animate-fadeInUp">
                <ChatMessage
                  message={msg.text}
                  isClient={msg.isClient}
                  clientName={msg.isClient ? scenario.clientProfile.name : undefined}
                  clientAvatar={
                    msg.isClient ? scenario.clientProfile.avatar : undefined
                  }
                  emotion={msg.emotion}
                  action={msg.action}
                />
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <ChatMessage
                message=""
                isClient={true}
                clientName={scenario.clientProfile.name}
                clientAvatar={scenario.clientProfile.avatar}
                isTyping={true}
              />
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Response options / Completion area */}
          <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-4">
            {isComplete && !showAssessment ? (
              /* Completion state */
              <div className="text-center py-4">
                <p className="text-slate-600 mb-4">
                  对话模拟已完成！你做出了{" "}
                  <span className="font-bold text-blue-600">
                    {responses.length}
                  </span>{" "}
                  个回应选择。
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={handleShowAssessment}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Star className="w-4 h-4" />
                    查看评估报告
                  </button>
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                    重新开始
                  </button>
                </div>
              </div>
            ) : !isTyping && !showFeedback && currentNode ? (
              /* Response options */
              <div className="space-y-2 max-h-[40vh] overflow-y-auto">
                <p className="text-xs text-slate-400 mb-2">选择你的回应：</p>
                {currentNode.responseOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-200 text-sm leading-relaxed ${getOptionBorderClass(
                      option.quality,
                      selectedOptionId === option.id
                    )} hover:shadow-sm`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            ) : showFeedback && selectedOption ? (
              /* Feedback display */
              <div className="animate-fadeInUp">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-3">
                  <div className="shrink-0 mt-0.5">
                    {getQualityBadge(selectedOption.quality)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {selectedOption.feedback}
                    </p>
                    {selectedOption.techniques.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {selectedOption.techniques.map((techId) => {
                          const tech = getTechniqueById(techId);
                          return tech ? (
                            <span
                              key={techId}
                              className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium"
                            >
                              {tech.nameZh}
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  继续
                </button>
              </div>
            ) : (
              /* Waiting / typing state placeholder */
              <div className="text-center py-3">
                <p className="text-sm text-slate-400">
                  等待案主回应中...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Technique Hints */}
        <aside className="w-[280px] shrink-0 bg-white border-l border-slate-200 overflow-y-auto p-4 hidden lg:block">
          <TechniqueHintPanel
            hints={currentNode?.hints ?? []}
            requiredTechniques={currentNode?.requiredTechniques}
            stage={currentNode?.stage ?? "intake"}
          />
        </aside>

        {/* Mobile Hint Panel Drawer */}
        {showHintPanel && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setShowHintPanel(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-xl overflow-y-auto p-4 animate-fadeInUp">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">技巧提示</h3>
                <button
                  onClick={() => setShowHintPanel(false)}
                  className="p-1 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <TechniqueHintPanel
                hints={currentNode?.hints ?? []}
                requiredTechniques={currentNode?.requiredTechniques}
                stage={currentNode?.stage ?? "intake"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ---- Sub-components ----

function ClientProfilePanel({
  profile,
  currentEmotion,
}: {
  profile: {
    name: string;
    age: number;
    gender: string;
    occupation: string;
    avatar: string;
    background: string;
    presentingProblem: string;
    keyTraits: string[];
  };
  currentEmotion: EmotionState;
}) {
  return (
    <div className="space-y-4">
      {/* Avatar and name */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-3xl mb-2">
          {profile.avatar}
        </div>
        <h3 className="font-bold text-slate-800">{profile.name}</h3>
        <p className="text-xs text-slate-400">
          {profile.age}岁 / {profile.gender} / {profile.occupation}
        </p>
      </div>

      {/* Current emotion */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
        <p className="text-xs text-slate-400 mb-1">当前情绪</p>
        <div className="flex items-center gap-2">
          <span className="text-lg">{emotionEmoji[currentEmotion]}</span>
          <span className="text-sm font-medium text-slate-700">
            {emotionLabels[currentEmotion]}
          </span>
        </div>
      </div>

      {/* Background */}
      <div>
        <p className="text-xs font-semibold text-slate-500 mb-1.5">背景信息</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          {profile.background}
        </p>
      </div>

      {/* Presenting problem */}
      <div>
        <p className="text-xs font-semibold text-slate-500 mb-1.5">主诉问题</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          {profile.presentingProblem}
        </p>
      </div>

      {/* Key traits */}
      <div>
        <p className="text-xs font-semibold text-slate-500 mb-1.5">性格特点</p>
        <div className="flex flex-wrap gap-1.5">
          {profile.keyTraits.map((trait) => (
            <span
              key={trait}
              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechniqueHintPanel({
  hints,
  requiredTechniques,
  stage,
}: {
  hints: string[];
  requiredTechniques?: string[];
  stage: CaseStage;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-amber-500" />
        <h3 className="font-bold text-slate-800 text-sm">提示与参考</h3>
      </div>

      {/* Current stage */}
      <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
        <p className="text-xs text-blue-600 font-semibold mb-1">
          当前阶段：{stageConfig[stage].label}
        </p>
        <p className="text-xs text-blue-500 leading-relaxed">
          {stage === "intake" && "建立关系、了解来访原因、营造安全氛围"}
          {stage === "assessment" && "深入评估问题、收集信息、理解案主处境"}
          {stage === "planning" && "与案主协商目标、制定服务计划"}
          {stage === "intervention" && "运用专业技巧帮助案主改变认知和行为"}
          {stage === "evaluation" && "评估进展、总结收获、布置后续任务"}
          {stage === "termination" && "回顾历程、巩固成果、处理分离"}
        </p>
      </div>

      {/* Hints */}
      {hints.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-2">本轮提示</p>
          <div className="space-y-2">
            {hints.map((hint, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-100"
              >
                <span className="text-amber-500 text-xs mt-0.5 shrink-0">
                  {idx + 1}.
                </span>
                <p className="text-xs text-amber-700 leading-relaxed">{hint}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggested techniques */}
      {requiredTechniques && requiredTechniques.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-2">建议技巧</p>
          <div className="space-y-1.5">
            {requiredTechniques.map((techId) => {
              const tech = getTechniqueById(techId);
              if (!tech) return null;
              return (
                <div
                  key={techId}
                  className="p-2 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <p className="text-xs font-medium text-slate-700">
                    {tech.nameZh}
                    <span className="text-slate-400 ml-1">
                      ({tech.nameEn})
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function AssessmentReport({
  score,
  scenario,
  onRestart,
}: {
  score: AssessmentScore;
  scenario: { title: string; id: string };
  onRestart: () => void;
}) {
  const overallGrade = getGrade(score.overall);
  const gradeColor = getGradeColor(overallGrade);
  const gradeBg = getGradeBgColor(overallGrade);

  const dimensions = [
    { key: "empathy", label: "共情能力", score: score.empathy },
    { key: "questioning", label: "提问探索", score: score.questioning },
    { key: "intervention", label: "干预技巧", score: score.intervention },
    { key: "structure", label: "会谈结构", score: score.structure },
    { key: "ethics", label: "伦理边界", score: score.ethics },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
            评估报告
          </h1>
          <p className="text-slate-500">{scenario.title}</p>
        </div>

        {/* Overall score card */}
        <div
          className={`rounded-2xl ${gradeBg} border p-6 sm:p-8 text-center mb-8`}
        >
          <p className="text-sm text-slate-500 mb-2">综合评分</p>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-6xl font-black ${gradeColor}`}>
              {overallGrade}
            </span>
            <div className="text-left">
              <p className="text-3xl font-bold text-slate-800">
                {score.overall}
                <span className="text-lg text-slate-400 font-normal">/100</span>
              </p>
              <p className="text-sm text-slate-500">
                等级: {overallGrade} ({getGrade(score.overall) === "A" ? "优秀" : getGrade(score.overall) === "B" ? "良好" : getGrade(score.overall) === "C" ? "中等" : getGrade(score.overall) === "D" ? "及格" : "需努力"})
              </p>
            </div>
          </div>
        </div>

        {/* Dimension scores */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BarChartIcon />
            各维度得分
          </h2>
          <div className="space-y-4">
            {dimensions.map((dim) => {
              const grade = getGrade(dim.score);
              return (
                <div key={dim.key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-slate-700">
                      {dim.label}
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {dim.score}
                      <span className="text-xs text-slate-400 font-normal ml-1">
                        ({grade})
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        dim.score >= 80
                          ? "bg-emerald-500"
                          : dim.score >= 60
                          ? "bg-blue-500"
                          : dim.score >= 40
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${dim.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Techniques used */}
        {score.techniquesUsed.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              使用的技巧 ({score.techniquesUsed.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {score.techniquesUsed.map((techId) => {
                const tech = getTechniqueById(techId);
                return tech ? (
                  <span
                    key={techId}
                    className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium"
                  >
                    {tech.nameZh}
                  </span>
                ) : (
                  <span
                    key={techId}
                    className="text-sm px-3 py-1 rounded-full bg-slate-50 text-slate-500"
                  >
                    {techId}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Strengths */}
        {score.strengths.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500" />
              优势表现
            </h2>
            <ul className="space-y-2">
              {score.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-emerald-500 mt-0.5 shrink-0">+</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Improvements */}
        {score.improvements.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              改进建议
            </h2>
            <ul className="space-y-2">
              {score.improvements.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Feedback */}
        {score.feedback.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
            <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-slate-500" />
              综合反馈
            </h2>
            <ul className="space-y-2">
              {score.feedback.map((f, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            重新练习
          </button>
          <Link
            href="/scenarios"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
          >
            <Menu className="w-4 h-4" />
            选择其他场景
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

// Simple bar chart icon component
function BarChartIcon() {
  return (
    <svg
      className="w-4 h-4 text-indigo-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}
