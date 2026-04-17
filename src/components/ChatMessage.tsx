"use client";

import type { EmotionState } from "@/data/types";

interface ChatMessageProps {
  message: string;
  isClient: boolean;
  clientName?: string;
  clientAvatar?: string;
  emotion?: EmotionState;
  action?: string;
  isTyping?: boolean;
}

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

export default function ChatMessage({
  message,
  isClient,
  clientName,
  clientAvatar,
  emotion,
  action,
  isTyping = false,
}: ChatMessageProps) {
  // Typing indicator bubble
  if (isTyping) {
    return (
      <div className="flex items-end gap-2.5 animate-fade-in">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg shrink-0">
          {clientAvatar || "👤"}
        </div>
        <div className="flex flex-col gap-1">
          {clientName && (
            <span className="text-xs text-slate-400 ml-1">{clientName}</span>
          )}
          <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-slate-100 inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    );
  }

  // Client message (left aligned)
  if (isClient) {
    return (
      <div className="flex items-end gap-2.5 max-w-[85%] sm:max-w-[75%] animate-fade-in">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg shrink-0">
          {clientAvatar || "👤"}
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            {clientName && (
              <span className="text-xs font-medium text-slate-500">
                {clientName}
              </span>
            )}
            {emotion && (
              <span className="text-xs">{emotionEmoji[emotion]}</span>
            )}
          </div>

          {/* Action description */}
          {action && (
            <p className="text-xs italic text-slate-400 ml-1">{action}</p>
          )}

          {/* Message bubble */}
          <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-slate-100 text-slate-800 text-sm leading-relaxed">
            {message}
          </div>
        </div>
      </div>
    );
  }

  // Social worker message (right aligned)
  return (
    <div className="flex justify-end animate-fade-in">
      <div className="max-w-[85%] sm:max-w-[75%]">
        <div className="flex justify-end mb-1">
          <span className="text-xs text-slate-400">社工（你）</span>
        </div>
        <div className="px-4 py-2.5 rounded-2xl rounded-br-md bg-blue-500 text-white text-sm leading-relaxed">
          {message}
        </div>
      </div>
    </div>
  );
}
