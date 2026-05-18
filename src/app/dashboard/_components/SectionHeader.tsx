import Link from "next/link";
import { ArrowRightIcon } from "../../components/icons";

type Props = { title: string; sub: string; action: string; href?: string };

export default function SectionHeader({ title, sub, action, href }: Props) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-0.5">
        <h2 className="font-sans text-[22px] font-medium leading-tight tracking-[-0.3px] text-[#1F2A37]">{title}</h2>
        <p className="font-display text-[12.5px] font-normal text-[#5B6470]">{sub}</p>
      </div>
      {href ? (
        <Link
          href={href}
          className="flex items-center gap-1 font-display text-[13px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
          {action}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      ) : (
        <button
          type="button"
          className="flex items-center gap-1 font-display text-[13px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
          {action}
          {action === "Lihat semua" && <ArrowRightIcon className="h-3.5 w-3.5" />}
        </button>
      )}
    </div>
  );
}
