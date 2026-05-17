import { SparkleIcon } from "../../components/icons";

type MessageBubbleProps = {
  variant: "ai" | "user";
  children: React.ReactNode;
};

export default function MessageBubble({ variant, children }: MessageBubbleProps) {
  if (variant === "user") {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[70%] rounded-bl-[22px] rounded-br-[6px] rounded-tl-[22px] rounded-tr-[22px] bg-[#1BA1AA] px-4 py-[11px] font-display text-[15px] font-medium leading-[22.5px] text-white"
          style={{ boxShadow: "0px 14px 15px rgba(27,161,170,0.55)" }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2">
      {/* AI avatar dot */}
      <div
        className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg, #1BA1AA 0%, #2CC9C8 100%)" }}>
        <SparkleIcon className="h-3.5 w-3.5 text-white" />
      </div>
      {/* Bubble */}
      <div
        className="max-w-[80%] rounded-bl-[6px] rounded-br-[22px] rounded-tl-[22px] rounded-tr-[22px] border border-black/[0.05] bg-white/85 px-4 py-[11px] font-display text-[15px] font-normal leading-[22.5px] text-[#1F2A37]"
        style={{ boxShadow: "0px 10px 30px 0px rgba(20,30,40,0.25)" }}>
        {children}
      </div>
    </div>
  );
}
