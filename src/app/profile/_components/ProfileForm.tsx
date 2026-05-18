"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { UserProfile } from "@/lib/types";
import { updateProfile } from "@/app/_actions/profile";

export default function ProfileForm({ profile }: { profile: UserProfile }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState(profile.username ?? "");
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar_url ?? "");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaved(false);
    startTransition(async () => {
      try {
        await updateProfile({ username: username || undefined, avatar_url: avatarUrl || undefined });
        setSaved(true);
        router.refresh();
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Gagal memperbarui profil");
      }
    });
  }

  async function handleLogout() {
    await fetch("/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <div
      className="rounded-2xl bg-white p-6 flex flex-col gap-5"
      style={{ boxShadow: "0px 10px 30px 0px rgba(20,30,40,0.12)" }}>
      {/* Avatar preview */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#1BA1AA] flex items-center justify-center text-white text-2xl font-semibold ring-2 ring-white"
          style={{ boxShadow: "0px 8px 20px -8px rgba(20,30,40,0.3)" }}>
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt="avatar" className="h-full w-full object-cover" />
          ) : (
            (username || profile.email).charAt(0).toUpperCase()
          )}
        </div>
        <div>
          <p className="font-sans text-[16px] font-medium text-[#1F2A37]">{username || profile.email}</p>
          <p className="font-display text-[13px] text-[#5B6470]">{profile.email}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-display text-[12px] font-semibold uppercase tracking-[0.6px] text-[#5B6470]">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username kamu"
            className="rounded-xl border border-[#E2E8F0] px-4 py-3 font-display text-[14px] text-[#1F2A37] placeholder:text-[#9AA3AD] focus:outline-none focus:ring-2 focus:ring-[#1BA1AA]/50"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-display text-[12px] font-semibold uppercase tracking-[0.6px] text-[#5B6470]">
            Avatar URL
          </label>
          <input
            type="url"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://..."
            className="rounded-xl border border-[#E2E8F0] px-4 py-3 font-display text-[14px] text-[#1F2A37] placeholder:text-[#9AA3AD] focus:outline-none focus:ring-2 focus:ring-[#1BA1AA]/50"
          />
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}
        {saved && <p className="text-xs text-[#1BA1AA] font-semibold">Profil diperbarui ✓</p>}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-full bg-[#1BA1AA] py-3 font-display text-[14px] font-semibold text-white hover:bg-[#168D95] transition-colors disabled:opacity-50"
          style={{ boxShadow: "0px 14px 30px -10px rgba(27,161,170,0.55)" }}>
          {isPending ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </form>

      <div className="border-t border-black/5 pt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-full border border-red-200 py-3 font-display text-[14px] font-semibold text-red-500 hover:bg-red-50 transition-colors">
          Keluar
        </button>
      </div>
    </div>
  );
}
