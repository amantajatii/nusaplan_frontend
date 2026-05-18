"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "./icons";
import { listNotifications, markNotifRead, markAllNotifsRead, type Notification } from "@/app/_actions/notifications";
import Link from "next/link";

type Props = { open: boolean; onClose: () => void };

export default function NotifDrawer({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [notifs, setNotifs] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      setLoading(true);
      listNotifications().then((data) => { setNotifs(data); setLoading(false); });
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 320);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function handleRead(id: string) {
    setNotifs((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
    await markNotifRead(id);
  }

  async function handleReadAll() {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
    await markAllNotifsRead();
  }

  const unreadCount = notifs.filter((n) => !n.read).length;

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-200 flex flex-col justify-end">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative flex max-h-[540px] flex-col overflow-hidden rounded-t-[28px] bg-[#FAF7F1] transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "translate-y-full"}`}
        style={{ boxShadow: "0px -30px 60px -20px rgba(20,30,40,0.4)" }}>
        {/* Drag handle */}
        <div className="flex justify-center pb-1 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-black/15" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-3 pt-2">
          <div className="flex items-center gap-2">
            <h3 className="font-sans text-[22px] font-medium leading-[33px] tracking-[-0.3px] text-[#1F2A37]">
              Notifikasi
            </h3>
            {unreadCount > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FDBF3A] px-1.5 font-display text-[11px] font-bold text-[#1F2A37]">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={handleReadAll}
                className="font-display text-[12px] font-medium text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
                Tandai semua dibaca
              </button>
            )}
            <button
              type="button"
              aria-label="Tutup"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none">
              <XIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 pb-6">
          {loading && (
            <p className="py-8 text-center font-display text-[13px] text-[#9AA3AD]">Memuat…</p>
          )}
          {!loading && notifs.length === 0 && (
            <p className="py-8 text-center font-display text-[13px] text-[#9AA3AD]">Belum ada notifikasi.</p>
          )}
          {!loading && notifs.map((n) => (
            <div
              key={n.id}
              onClick={() => !n.read && handleRead(n.id)}
              className={`mb-2 flex cursor-pointer gap-3 rounded-2xl p-4 transition-colors ${n.read ? "bg-white/60" : "bg-white ring-1 ring-inset ring-[#1BA1AA]/15"}`}
              style={{ boxShadow: n.read ? undefined : "0px 6px 20px -10px rgba(27,161,170,0.3)" }}>
              <div className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${n.read ? "bg-transparent" : "bg-[#1BA1AA]"}`} />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <p className="font-display text-[13.5px] font-semibold text-[#1F2A37]">{n.title}</p>
                <p className="font-display text-[12.5px] text-[#5B6470]">{n.body}</p>
                {n.link && (
                  <Link
                    href={n.link}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 font-display text-[12px] font-semibold text-[#1BA1AA] hover:text-[#168D95]">
                    Buka →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
