"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BellIcon } from "../../components/icons";
import NotifDrawer from "../../components/NotifDrawer";

export default function DashboardTopBar() {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 px-3 pt-3">
        <div
          className="flex h-14.5 items-center rounded-full px-4"
          style={{
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0px 8px 24px 0px rgba(20,30,40,0.18)",
          }}>
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 rounded-full">
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1BA1AA 0%, #2CC9C8 100%)" }}>
              <Image src="/nusaplan_logo.png" alt="NusaPlan" width={28} height={28} className="h-full w-full object-cover" />
            </div>
            <span className="font-sans text-[17px] font-semibold leading-6 tracking-[-0.4px] text-[#1F2A37]">
              Nusaplan
            </span>
          </Link>

          <div className="flex-1" />

          {/* Bell */}
          <button
            type="button"
            aria-label="Notifikasi"
            onClick={() => setNotifOpen(true)}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
            style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <BellIcon className="h-4 w-4 text-[#1F2A37]" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FDBF3A]" />
          </button>

          {/* Avatar → profile */}
          <Link
            href="/profile"
            className="ml-2 h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
            style={{ boxShadow: "0px 6px 14px -6px rgba(20,30,40,0.35)" }}>
            <Image
              src="/explore/profile.jpg"
              alt="Profil"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>

      <NotifDrawer open={notifOpen} onClose={() => setNotifOpen(false)} />
    </>
  );
}
