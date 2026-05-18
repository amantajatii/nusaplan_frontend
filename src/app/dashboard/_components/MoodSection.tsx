"use client";

import { useState, useTransition } from "react";
import { CheckIcon } from "../../components/icons";
import { updateProfile } from "@/app/_actions/profile";

const ALL_MOODS = ["Healing", "Adventure", "Romantic", "Family Trip", "Backpacker", "Culinary", "Nature Escape"];
const DEFAULT_SELECTED = ["Healing", "Adventure"];

export default function MoodSection() {
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState<string[]>(DEFAULT_SELECTED);
  const [isPending, startTransition] = useTransition();

  function toggle(mood: string) {
    if (!editing) return;
    setSelected((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    );
  }

  function handleSave() {
    startTransition(async () => {
      await updateProfile({ mood_preferences: selected });
      setEditing(false);
    });
  }

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
        {editing ? (
          <button
            type="button"
            disabled={isPending}
            onClick={handleSave}
            className="font-display text-[12px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none disabled:opacity-50">
            {isPending ? "Menyimpan…" : "Simpan"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="font-display text-[12px] font-medium text-[#5B6470] hover:text-[#1F2A37] focus-visible:outline-none">
            Tap untuk edit
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_MOODS.map((mood) => {
          const isSelected = selected.includes(mood);
          return (
            <button
              key={mood}
              type="button"
              onClick={() => toggle(mood)}
              disabled={!editing}
              className={`inline-flex h-[37.5px] items-center gap-1.5 rounded-full px-3.75 font-display text-[13px] font-semibold transition-all duration-150 focus-visible:outline-none disabled:cursor-default ${editing ? "cursor-pointer" : ""}`}
              style={
                isSelected
                  ? { background: "#1BA1AA", color: "white", boxShadow: "0px 10px 11px rgba(27,161,170,0.55)" }
                  : {
                      background: editing ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.60)",
                      color: "#1F2A37",
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0px 6px 16px 0px rgba(20,30,40,0.18)",
                    }
              }>
              {isSelected && <CheckIcon className="h-3 w-3 text-white" />}
              {mood}
            </button>
          );
        })}
      </div>
    </div>
  );
}
