"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon, TrashIcon } from "../../components/icons";
import { listSessions, deleteSession, type ChatSessionMeta } from "@/app/_actions/sessions";

type Props = { open: boolean; onClose: () => void };

export default function SessionsDrawer({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [sessions, setSessions] = useState<ChatSessionMeta[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      setLoading(true);
      listSessions().then((data) => { setSessions(data); setLoading(false); });
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 320);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function handleDelete(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setSessions((prev) => prev.filter((s) => s.id !== id));
    await deleteSession(id);
  }

  function formatDate(iso: string | null) {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
  }

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-200 flex flex-col justify-end">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative flex max-h-[580px] flex-col overflow-hidden rounded-t-[28px] bg-[#FAF7F1] transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "translate-y-full"}`}
        style={{ boxShadow: "0px -30px 60px -20px rgba(20,30,40,0.4)" }}>
        <div className="flex justify-center pb-1 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-black/15" />
        </div>

        <div className="flex items-center justify-between px-6 pb-3 pt-2">
          <h3 className="font-sans text-[22px] font-medium leading-[33px] tracking-[-0.3px] text-[#1F2A37]">
            Riwayat Chat
          </h3>
          <button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none">
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6">
          {loading && (
            <p className="py-8 text-center font-display text-[13px] text-[#9AA3AD]">Memuat…</p>
          )}
          {!loading && sessions.length === 0 && (
            <p className="py-8 text-center font-display text-[13px] text-[#9AA3AD]">
              Belum ada riwayat chat. Mulai percakapan baru!
            </p>
          )}
          {!loading && sessions.map((s) => (
            <div
              key={s.id}
              className="mb-2 flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-inset ring-black/[0.05]"
              style={{ boxShadow: "0px 4px 16px -8px rgba(20,30,40,0.2)" }}>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <p className="truncate font-display text-[14px] font-semibold text-[#1F2A37]">{s.title}</p>
                <p className="font-display text-[11.5px] text-[#9AA3AD]">{formatDate(s.last_message_at)}</p>
              </div>
              <button
                type="button"
                aria-label="Hapus"
                onClick={(e) => handleDelete(s.id, e)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#9AA3AD] transition-colors hover:bg-red-50 hover:text-red-500 focus-visible:outline-none">
                <TrashIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
