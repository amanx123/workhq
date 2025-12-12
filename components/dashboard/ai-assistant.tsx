"use client";

import { useState, useCallback } from "react";
import { BentoCard } from "@/components/ui/bento-card";
import { TerminalButton } from "@/components/ui/terminal-button";
import { getAIResponse } from "@/lib/ai-responses";
import { DEFAULT_PERMISSIONS, INITIAL_AI_MESSAGE } from "@/lib/constants";
import type { Permission, ChatMessage } from "@/types";

export function AIAssistant() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: "ai", content: INITIAL_AI_MESSAGE },
  ]);
  const [permissions, setPermissions] = useState<Permission[]>(DEFAULT_PERMISSIONS);
  const [showPermissions, setShowPermissions] = useState(false);

  const handleSend = useCallback(() => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { role: "user", content: message }]);

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", content: getAIResponse(message) },
      ]);
    }, 600);

    setMessage("");
  }, [message]);

  const togglePermission = useCallback((index: number) => {
    setPermissions((prev) =>
      prev.map((p, i) => (i === index ? { ...p, enabled: !p.enabled } : p))
    );
  }, []);

  return (
    <BentoCard
      title="AI_AGENT"
      icon="◈"
      glow
      className="col-span-12 row-span-2 flex flex-col lg:col-span-5"
      headerAction={
        <TerminalButton
          onClick={() => setShowPermissions(!showPermissions)}
          variant="default"
        >
          {showPermissions ? "[CHAT]" : "[PERMS]"}
        </TerminalButton>
      }
    >
      {showPermissions ? (
        <PermissionsPanel
          permissions={permissions}
          onToggle={togglePermission}
        />
      ) : (
        <ChatPanel
          chatHistory={chatHistory}
          message={message}
          onMessageChange={setMessage}
          onSend={handleSend}
        />
      )}
    </BentoCard>
  );
}

function PermissionsPanel({
  permissions,
  onToggle,
}: {
  permissions: Permission[];
  onToggle: (index: number) => void;
}) {
  return (
    <div className="flex-1 space-y-2 overflow-y-auto">
      <p className="mb-3 text-[10px] text-[#00ff41]/40">
        &gt; PERMISSION MATRIX // CONTROL AI ACCESS LEVELS
      </p>
      {permissions.map((perm, i) => (
        <div
          key={perm.name}
          className="flex items-center justify-between rounded-lg border border-[#00ff41]/10 bg-black/40 p-3"
        >
          <div>
            <p className="text-[11px] font-medium text-[#00ff41]/80">
              {perm.name.toUpperCase()}
            </p>
            <p className="text-[10px] text-[#00ff41]/40">// {perm.desc}</p>
          </div>
          <button
            onClick={() => onToggle(i)}
            className={`rounded border px-3 py-1 text-[9px] font-bold transition-all ${perm.enabled
              ? "border-[#00ff41]/50 bg-[#00ff41]/20 text-[#00ff41]"
              : "border-[#00ff41]/20 bg-black/40 text-[#00ff41]/40"
              }`}
          >
            {perm.enabled ? "[ON]" : "[OFF]"}
          </button>
        </div>
      ))}
    </div>
  );
}

function ChatPanel({
  chatHistory,
  message,
  onMessageChange,
  onSend,
}: {
  chatHistory: ChatMessage[];
  message: string;
  onMessageChange: (value: string) => void;
  onSend: () => void;
}) {
  return (
    <>
      <div className="flex-1 space-y-3 overflow-y-auto pr-1 font-mono">
        {chatHistory.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-[10px] leading-relaxed ${msg.role === "user"
                ? "border border-[#00ff41]/30 bg-[#00ff41]/10 text-[#00ff41]"
                : "border border-[#00ff41]/20 bg-black/60 text-[#00ff41]/80"
                }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <div className="flex-1 rounded-lg border border-[#00ff41]/20 bg-black/60 px-4 py-3">
          <span className="text-[10px] text-[#00ff41]/40">&gt; </span>
          <input
            type="text"
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            placeholder="ENTER COMMAND..."
            className="ml-1 bg-transparent text-[10px] font-mono text-[#00ff41] outline-none placeholder:text-[#00ff41]/20"
          />
        </div>
        <TerminalButton onClick={onSend} variant="primary" size="md">
          [EXEC]
        </TerminalButton>
      </div>
    </>
  );
}

