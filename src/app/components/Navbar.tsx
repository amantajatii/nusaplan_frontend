"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import TealButton from "./TealButton";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
      <path d="M19 2L19.7 4.3L22 5L19.7 5.7L19 8L18.3 5.7L16 5L18.3 4.3L19 2Z" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" />
    </svg>
  );
}

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Explore", href: "/explore" },
  { label: "Mood Trips", href: "/chat" },
  { label: "AI Planner", href: "/chat" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3 sm:top-5 sm:px-4">
      <nav className="flex w-full max-w-[calc(100vw-24px)] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/15 px-3 py-2.5 shadow-xl backdrop-blur-md sm:w-auto sm:max-w-none sm:justify-start sm:gap-8 sm:px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500">
            <SparkleIcon className="w-4 h-4 text-white" />
          </div>
          <span className="break-words font-sans text-base font-semibold leading-[24px] text-white sm:text-lg sm:leading-[27px]">
            Nusaplan
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="break-words rounded-full px-1 py-2 font-display text-sm font-medium leading-[21px] text-white/90 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {label}
            </Link>
          ))}
        </div>

        <TealButton
          onClick={() => router.push("/chat")}
          className="shrink-0 justify-start gap-1.5 px-3 py-2 font-display text-[12.5px] font-semibold leading-[18.75px] whitespace-nowrap break-words sm:px-4 sm:text-[13px] sm:leading-[19.5px]">
          Start Planning
        </TealButton>
      </nav>
    </div>
  );
}
