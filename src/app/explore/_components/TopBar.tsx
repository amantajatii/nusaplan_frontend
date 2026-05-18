"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, BellIcon } from "../../components/icons";
import NotifDrawer from "../../components/NotifDrawer";

export default function TopBar() {
  const router = useRouter();
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 px-3 pt-3">
        <div
          className="flex h-13.5 items-center rounded-full bg-white/80 px-3 ring-1 ring-inset ring-black/[0.05]"
          style={{ boxShadow: "0px 14px 30px 0px rgba(20,30,40,0.2)" }}>
          {/* Back */}
          <button
            type="button"
            aria-label="Kembali"
            onClick={() => router.back()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          {/* Brand */}
          <div className="ml-2.75 flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1BA1AA] overflow-hidden">
              <Image src="/logo.png" alt="NusaPlan" width={28} height={28} className="h-full w-full object-cover" />
            </div>
            <span className="font-sans text-[16px] font-semibold leading-6 tracking-[-0.1px] text-[#1F2A37]">
              Nusaplan
            </span>
          </div>

          <div className="flex-1" />

          {/* Bell */}
          <button
            type="button"
            aria-label="Notifikasi"
            onClick={() => setNotifOpen(true)}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <BellIcon className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#FDBF3A]" />
          </button>

          {/* Profile */}
          <Link
            href="/profile"
            className="ml-3 h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
            style={{ boxShadow: "0px 6px 14px -6px rgba(20,30,40,0.3)" }}>
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
