import Image from "next/image";
import type { UserProfile } from "@/lib/types";

const DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export default function Greeting({ profile }: { profile: UserProfile }) {
  const day = DAY_NAMES[new Date().getDay()];
  const name = profile.username ?? profile.email.split("@")[0];

  return (
    <div className="flex items-center gap-3">
      <div
        className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
        style={{ boxShadow: "0px 12px 26px -12px rgba(20,30,40,0.35)" }}>
        {profile.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#1BA1AA] text-white font-semibold text-xl">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-[12.5px] font-medium text-[#5B6470]">{day} yang cerah ·</p>
        <h1 className="font-sans text-[26px] font-medium leading-tight tracking-[-0.4px] text-[#1F2A37]">
          Hai, {name} <span style={{ color: "#FDBF3A" }}>👋</span>
        </h1>
        <p className="font-display text-[13.5px] font-normal text-[#5B6470]">
          Siap melanjutkan perjalanan berikutnya?
        </p>
      </div>
    </div>
  );
}
