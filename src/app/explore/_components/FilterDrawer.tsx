"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { XIcon, RefreshIcon } from "../../components/icons";
import TealButton from "../../components/TealButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

const PULAU = ["Semua", "Jawa", "Bali", "Sulawesi", "NTT", "Papua"];
const BUDGET = ["< Rp 100k", "Rp 100k–500k", "Rp 500k–1jt", "> Rp 1jt"];
const DURASI = ["Setengah hari", "1 hari", "2–3 hari", "1 minggu+"];
const MOOD = ["Healing", "Adventure", "Romantic", "Family Trip", "Backpacker", "Culinary", "Nature Escape"];
const JENIS = ["Alam", "Budaya", "Pantai", "Gunung", "Heritage", "Kuliner"];

export default function FilterDrawer({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      const mountTimer = setTimeout(() => setMounted(true), 0);
      const visibleTimer = setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }, 0);

      return () => {
        clearTimeout(mountTimer);
        clearTimeout(visibleTimer);
      };
    }

    const hideTimer = setTimeout(() => setVisible(false), 0);
    const unmountTimer = setTimeout(() => setMounted(false), 320);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [open]);

  const [pulau, setPulau] = useState("Semua");
  const [budgets, setBudgets] = useState<string[]>([]);
  const [durasi, setDurasi] = useState<string[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [jenis, setJenis] = useState<string[]>([]);

  function toggleSet(set: string[], setFn: (v: string[]) => void, val: string) {
    setFn(set.includes(val) ? set.filter((x) => x !== val) : [...set, val]);
  }

  function reset() {
    setPulau("Semua");
    setBudgets([]);
    setDurasi([]);
    setMoods([]);
    setJenis([]);
  }

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-100 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className={`relative flex max-h-[694px] flex-col overflow-hidden rounded-t-[28px] bg-[#FAF7F1] transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "translate-y-full"}`}
        style={{ boxShadow: "0px -30px 60px -20px rgba(20,30,40,0.4)" }}>
        {/* Drag handle */}
        <div className="flex justify-center pb-1 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-black/15" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-3 pt-2">
          <h3 className="font-sans text-[22px] font-medium leading-[33px] tracking-[-0.3px] text-[#1F2A37]">
            Atur pencarianmu
          </h3>
          <button
            type="button"
            aria-label="Tutup filter"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Filter groups — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 pb-3">
          <div className="flex flex-col gap-6">
            {/* PULAU */}
            <FilterGroup label="PULAU">
              <div className="flex flex-wrap gap-2">
                {PULAU.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPulau(p)}
                    className={`inline-flex h-[37.5px] items-center rounded-full px-4 font-display text-[13px] font-semibold leading-[19.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
                      pulau === p
                        ? "bg-[#1F2A37] text-white"
                        : "bg-white text-[#1F2A37] ring-1 ring-inset ring-black/[0.05]"
                    }`}
                    style={
                      pulau === p
                        ? { filter: "drop-shadow(0px 10px 11px rgba(31,42,55,0.5))" }
                        : { filter: "drop-shadow(0px 6px 8px rgba(20,30,40,0.2))" }
                    }>
                    {p}
                  </button>
                ))}
              </div>
            </FilterGroup>

            {/* BUDGET RANGE */}
            <FilterGroup label="BUDGET RANGE">
              <div className="grid grid-cols-2 gap-2">
                {BUDGET.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => toggleSet(budgets, setBudgets, b)}
                    className={`flex h-[41.5px] items-center rounded-[16px] px-3 font-display text-[13px] font-semibold leading-[19.5px] text-[#1F2A37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
                      budgets.includes(b)
                        ? "bg-[#1BA1AA]/10 ring-1 ring-inset ring-[#1BA1AA]/40"
                        : "bg-white ring-1 ring-inset ring-black/[0.05]"
                    }`}
                    style={{ filter: "drop-shadow(0px 6px 8px rgba(20,30,40,0.2))" }}>
                    {b}
                  </button>
                ))}
              </div>
            </FilterGroup>

            {/* DURASI IDEAL */}
            <FilterGroup label="DURASI IDEAL">
              <div className="grid grid-cols-2 gap-2">
                {DURASI.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleSet(durasi, setDurasi, d)}
                    className={`flex h-[41.5px] items-center rounded-[16px] px-3 font-display text-[13px] font-semibold leading-[19.5px] text-[#1F2A37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
                      durasi.includes(d)
                        ? "bg-[#1BA1AA]/10 ring-1 ring-inset ring-[#1BA1AA]/40"
                        : "bg-white ring-1 ring-inset ring-black/[0.05]"
                    }`}
                    style={{ filter: "drop-shadow(0px 6px 8px rgba(20,30,40,0.2))" }}>
                    {d}
                  </button>
                ))}
              </div>
            </FilterGroup>

            {/* MOOD */}
            <FilterGroup label="MOOD">
              <div className="flex flex-wrap gap-2">
                {MOOD.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleSet(moods, setMoods, m)}
                    className={`inline-flex h-[37.5px] items-center rounded-full px-4 font-display text-[13px] font-semibold leading-[19.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
                      moods.includes(m)
                        ? "bg-[#1BA1AA]/10 text-[#1BA1AA] ring-1 ring-inset ring-[#1BA1AA]/40"
                        : "bg-white text-[#1F2A37] ring-1 ring-inset ring-black/[0.05]"
                    }`}
                    style={{ filter: "drop-shadow(0px 6px 8px rgba(20,30,40,0.2))" }}>
                    {m}
                  </button>
                ))}
              </div>
            </FilterGroup>

            {/* JENIS WISATA */}
            <FilterGroup label="JENIS WISATA">
              <div className="flex flex-wrap gap-2">
                {JENIS.map((j) => (
                  <button
                    key={j}
                    type="button"
                    onClick={() => toggleSet(jenis, setJenis, j)}
                    className={`inline-flex h-[37.5px] items-center rounded-full px-4 font-display text-[13px] font-semibold leading-[19.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
                      jenis.includes(j)
                        ? "bg-[#1BA1AA]/10 text-[#1BA1AA] ring-1 ring-inset ring-[#1BA1AA]/40"
                        : "bg-white text-[#1F2A37] ring-1 ring-inset ring-black/[0.05]"
                    }`}
                    style={{ filter: "drop-shadow(0px 6px 8px rgba(20,30,40,0.2))" }}>
                    {j}
                  </button>
                ))}
              </div>
            </FilterGroup>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 border-t border-black/[0.05] bg-white/80 px-4 py-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-12 w-[96px] shrink-0 items-center justify-center gap-2 rounded-full bg-black/[0.05] font-display text-[14px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <RefreshIcon className="h-4 w-4" />
            Reset
          </button>
          <TealButton
            className="h-12 flex-1 font-display text-[14.5px] font-semibold"
            style={{ boxShadow: "0px 14px 14px rgba(27,161,170,0.55)", filter: "none" }}
            onClick={onClose}>
            Tampilkan hasil
          </TealButton>
        </div>
      </div>
    </div>,
    document.body
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-display text-[11px] font-bold leading-[16.5px] tracking-[1px] text-[#5B6470]">
        {label}
      </p>
      {children}
    </div>
  );
}
