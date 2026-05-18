"use client";

import { useEffect, useRef, useState } from "react";
import type { ClarificationResult, Itinerary } from "@/lib/types";
import { generateItinerary } from "@/app/_actions/planner";
import ChatHeader from "./_components/ChatHeader";
import MessageBubble from "./_components/MessageBubble";
import ItineraryCard from "./_components/ItineraryCard";
import ActionBar from "./_components/ActionBar";
import RefineChips from "./_components/RefineChips";
import ChatComposer from "./_components/ChatComposer";

type Msg =
  | { role: "user"; kind: "text"; text: string }
  | { role: "ai"; kind: "text"; text: string }
  | { role: "ai"; kind: "itinerary"; itinerary: Itinerary }
  | { role: "ai"; kind: "clarification"; result: ClarificationResult };

function isClarification(r: unknown): r is ClarificationResult {
  return typeof r === "object" && r !== null && "needsClarification" in r;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", kind: "text", text: "Halo! Mau wisata ke mana? Ceritakan saja dalam satu kalimat 🌿" },
  ]);
  const [pending, setPending] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text: string) {
    setMessages((prev) => [...prev, { role: "user", kind: "text", text }]);
    setPending(true);
    setRateLimited(false);
    try {
      const result = await generateItinerary(text);
      if (isClarification(result)) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", kind: "clarification", result },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "ai", kind: "text", text: "Aku rangkai itinerary santai berbasis ceritamu. Tap setiap hari untuk lihat detail 👇" },
          { role: "ai", kind: "itinerary", itinerary: result as Itinerary },
        ]);
      }
    } catch (err: unknown) {
      const status = (err as { status?: number })?.status;
      if (status === 429) {
        setRateLimited(true);
        setMessages((prev) => [
          ...prev,
          { role: "ai", kind: "text", text: "Tunggu sebentar — generate dibatasi 10x/menit. Coba lagi ya 🙏" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "ai", kind: "text", text: "Terjadi kesalahan. Coba ulangi pertanyaanmu." },
        ]);
      }
    } finally {
      setPending(false);
    }
  }

  function handleClarificationAnswer(questions: string[], answers: string[], partial: ClarificationResult["partial"]) {
    const parts: string[] = [];
    if (partial.mood) parts.push(`Mood: ${partial.mood}`);
    if (partial.city) parts.push(`Kota: ${partial.city}`);
    if (partial.duration_days) parts.push(`Durasi: ${partial.duration_days} hari`);
    if (partial.budget) parts.push(`Budget: Rp ${partial.budget.toLocaleString("id-ID")}`);
    if (partial.jumlah_orang) parts.push(`Orang: ${partial.jumlah_orang}`);
    answers.forEach((a, i) => {
      if (a) parts.push(`${questions[i]}: ${a}`);
    });
    handleSend(parts.join(". "));
  }

  const lastItinerary = [...messages].reverse().find((m) => m.role === "ai" && m.kind === "itinerary");

  return (
    <div className="relative min-h-screen bg-[#FAF7F1]">
      <div
        className="pointer-events-none absolute -left-24 -top-32 h-105 w-105 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(27,161,170,0.35) 0%, rgba(14,81,85,0.175) 35%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-70 h-90 w-90 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(253,191,58,0.4) 0%, rgba(190,143,44,0.3) 17.5%, rgba(127,96,29,0.2) 35%, transparent 70%)" }}
      />

      <ChatHeader />

      <main className="mx-auto max-w-338.5 px-6 pb-45 pt-24">
        <div className="flex flex-col gap-4">
          {messages.map((msg, i) => {
            if (msg.role === "user" && msg.kind === "text") {
              return <MessageBubble key={i} variant="user">{msg.text}</MessageBubble>;
            }
            if (msg.role === "ai" && msg.kind === "text") {
              return <MessageBubble key={i} variant="ai">{msg.text}</MessageBubble>;
            }
            if (msg.role === "ai" && msg.kind === "itinerary") {
              return (
                <div key={i} className="flex flex-col gap-3 ml-9">
                  <ItineraryCard itinerary={msg.itinerary} />
                  <RefineChips onSelect={handleSend} />
                  <ActionBar itinerary={msg.itinerary} onRefine={handleSend} />
                </div>
              );
            }
            if (msg.role === "ai" && msg.kind === "clarification") {
              return (
                <ClarificationBubble
                  key={i}
                  result={msg.result}
                  onAnswer={handleClarificationAnswer}
                />
              );
            }
            return null;
          })}

          {pending && (
            <MessageBubble variant="ai">
              <span className="animate-pulse">Sedang menyusun itinerary...</span>
            </MessageBubble>
          )}

          {rateLimited && (
            <div className="mx-auto rounded-full bg-amber-50 px-4 py-2 text-center font-display text-[13px] text-amber-700">
              Rate limit tercapai — tunggu 1 menit
            </div>
          )}
        </div>
        <div ref={bottomRef} />
      </main>

      <ChatComposer onSend={handleSend} disabled={pending} />
    </div>
  );
}

function ClarificationBubble({
  result,
  onAnswer,
}: {
  result: ClarificationResult;
  onAnswer: (questions: string[], answers: string[], partial: ClarificationResult["partial"]) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(result.questions.map(() => ""));

  return (
    <div className="ml-9 flex flex-col gap-3">
      <MessageBubble variant="ai">
        Sebelum aku susun, bantu klarifikasi dulu ya 🙏
      </MessageBubble>
      <div
        className="rounded-3xl bg-white p-4 flex flex-col gap-3 ring-1 ring-inset ring-black/5"
        style={{ boxShadow: "0px 10px 30px 0px rgba(20,30,40,0.15)" }}>
        {result.questions.map((q, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <p className="font-display text-[13px] font-semibold text-[#1F2A37]">{q}</p>
            <input
              type="text"
              value={answers[i]}
              onChange={(e) => {
                const next = [...answers];
                next[i] = e.target.value;
                setAnswers(next);
              }}
              placeholder="Jawab di sini..."
              className="rounded-xl border border-[#E2E8F0] px-3 py-2 font-display text-[14px] text-[#1F2A37] placeholder:text-[#9AA3AD] focus:outline-none focus:ring-2 focus:ring-[#1BA1AA]/50"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => onAnswer(result.questions, answers, result.partial)}
          className="mt-1 w-full rounded-full bg-[#1BA1AA] py-3 font-display text-[13.5px] font-semibold text-white hover:bg-[#168D95] transition-colors"
          style={{ boxShadow: "0px 14px 30px -10px rgba(27,161,170,0.55)" }}>
          Lanjutkan Generate
        </button>
      </div>
    </div>
  );
}
