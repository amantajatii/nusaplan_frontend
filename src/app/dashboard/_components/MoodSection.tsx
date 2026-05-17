import { MOODS } from "../_data/trips";
import { CheckIcon } from "../../components/icons";

export default function MoodSection() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="font-sans text-[22px] font-medium leading-tight tracking-[-0.3px] text-[#1F2A37]">
            Suasana favoritmu
          </h2>
          <p className="font-display text-[12.5px] font-normal text-[#5B6470]">
            AI akan memakai ini untuk rekomendasi
          </p>
        </div>
        <button
          type="button"
          className="font-display text-[12px] font-medium text-[#5B6470] hover:text-[#1F2A37] focus-visible:outline-none">
          Tap untuk edit
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {MOODS.map(({ label, selected }) => (
          <div
            key={label}
            className="inline-flex h-[37.5px] items-center gap-1.5 rounded-full px-[15px] font-display text-[13px] font-semibold"
            style={
              selected
                ? {
                    background: "#1BA1AA",
                    color: "white",
                    boxShadow: "0px 10px 11px rgba(27,161,170,0.55)",
                  }
                : {
                    background: "rgba(255,255,255,0.85)",
                    color: "#1F2A37",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0px 6px 16px 0px rgba(20,30,40,0.18)",
                  }
            }>
            {selected && <CheckIcon className="h-3 w-3 text-white" />}
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
