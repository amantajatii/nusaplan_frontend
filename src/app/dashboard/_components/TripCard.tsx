import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "../../components/icons";
import type { Trip } from "../_data/trips";

export default function TripCard({ badge, title, date, image, percent, progressLabel, items, ctaLabel, variant, href }: Trip) {
  const barColor = variant === "done" ? "#FDBF3A" : "#1BA1AA";
  const btnShadow =
    variant === "done"
      ? "0px 14px 14px rgba(31,42,55,0.5)"
      : "0px 14px 14px rgba(27,161,170,0.55)";

  return (
    <div
      className="flex w-[300px] shrink-0 flex-col overflow-hidden rounded-[26px] bg-white"
      style={{ boxShadow: "0px 24px 50px -22px rgba(20,30,40,0.4)" }}>
      {/* Hero */}
      <div className="relative h-[176px] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" sizes="300px" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 font-display text-[10.5px] font-bold uppercase tracking-[0.4px] text-[#1F2A37]">
          {badge}
        </span>
        <div className="absolute bottom-3 left-3 flex flex-col gap-0.5">
          <p className="font-sans text-[19px] font-medium leading-tight tracking-[-0.2px] text-white">{title}</p>
          <p className="font-display text-[11.5px] font-medium text-white/85">{date}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5">
        {/* Progress label row */}
        <div className="flex items-center justify-between">
          <span className="font-display text-[12.5px] font-semibold text-[#1F2A37]">{progressLabel}</span>
          <span className="font-display text-[11.5px] font-semibold text-[#5B6470]">{percent}%</span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.05]">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${percent}%`, background: barColor }}
          />
        </div>
        {/* Checklist */}
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md"
                style={{
                  background: item.done ? "rgba(27,161,170,0.12)" : "rgba(31,42,55,0.06)",
                }}>
                {item.done && <CheckIcon className="h-3 w-3 text-[#1BA1AA]" />}
              </div>
              <span
                className="font-display text-[12px] font-medium"
                style={{ color: item.done ? "#1F2A37" : "#5B6470" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {/* CTA */}
        <Link
          href={href}
          className="flex h-10 w-full items-center justify-center gap-1.5 rounded-full font-display text-[13px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
          style={{ background: btnColor(variant), boxShadow: btnShadow }}>
          {ctaLabel}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function btnColor(variant: Trip["variant"]) {
  return variant === "done" ? "#1F2A37" : "#1BA1AA";
}
