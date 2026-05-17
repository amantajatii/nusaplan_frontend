import Link from "next/link";
import { CompassIcon, ArrowRightIcon } from "../../components/icons";

export default function FooterEntry() {
  return (
    <Link
      href="/explore"
      className="flex h-[75px] items-center justify-between rounded-2xl bg-white px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
      style={{
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0px 14px 15px rgba(20,30,40,0.25)",
      }}>
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(27,161,170,0.1)" }}>
          <CompassIcon className="h-4 w-4 text-[#1BA1AA]" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-sans text-[15px] font-medium leading-tight tracking-[-0.1px] text-[#1F2A37]">
            Jelajahi destinasi baru
          </p>
          <p className="font-display text-[12.5px] font-normal text-[#5B6470]">
            Temukan tempat sesuai suasanamu
          </p>
        </div>
      </div>
      <ArrowRightIcon className="h-4 w-4 text-[#5B6470]" />
    </Link>
  );
}
