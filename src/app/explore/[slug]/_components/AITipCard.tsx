import { SparkleIcon } from "../../../components/icons";

type Props = { tip: string };

export default function AITipCard({ tip }: Props) {
  return (
    <div
      className="flex items-start gap-3 rounded-[24px] p-5"
      style={{
        background: "rgba(27,161,170,0.06)",
        border: "1px solid rgba(27,161,170,0.18)",
      }}>
      {/* Gradient circle */}
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg, #1BA1AA 0%, #2CC9C8 100%)" }}>
        <SparkleIcon className="h-4 w-4 text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-display text-[11px] font-bold leading-[16.5px] tracking-[0.8px] text-[#1BA1AA]">
          AI LOCAL TIP
        </p>
        <p className="font-display text-[15px] font-medium leading-[23.25px] text-[#1F2A37]">{tip}</p>
      </div>
    </div>
  );
}
