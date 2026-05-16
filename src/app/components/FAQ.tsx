"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Apakah Nusaplan gratis?",
    a: "Ya, Nusaplan bisa digunakan secara gratis untuk generate itinerary dasar. Fitur lanjutan tersedia dengan paket premium.",
  },
  {
    q: "Bagaimana AI memilih wisata?",
    a: "AI kami menganalisis preferensi, budget, dan durasi perjalananmu, lalu mencocokkan dengan database destinasi terkurasi di seluruh Indonesia.",
  },
  {
    q: "Bisa untuk grup atau keluarga?",
    a: "Tentu! Kamu bisa menyebutkan jumlah orang dan komposisi grup (misalnya keluarga dengan anak kecil) di prompt dan AI akan menyesuaikan itinerary.",
  },
  {
    q: "Apakah itinerary bisa diubah?",
    a: "Ya, setelah itinerary dibuat kamu bisa mengedit, menambah, atau menghapus aktivitas sesuai kebutuhan.",
  },
  {
    q: "Bisa langsung buka Google Maps?",
    a: "Ya! Setiap lokasi dalam itinerary memiliki tombol 'Buka di Maps' yang langsung membuka Google Maps tanpa copy-paste.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal-500 text-center mb-4 uppercase">
          FAQ
        </p>
        <h2 className="mb-10 text-center font-display text-[34px] font-bold leading-[39px] text-gray-900 sm:mb-12 sm:text-5xl sm:leading-tight">
          Pertanyaan yang sering ditanyakan.
        </h2>

        <div className="bg-[#FAF7F1] rounded-2xl p-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-[#E8DDD0] ${i === faqs.length - 1 ? "border-0" : ""}`}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-4 py-5 text-left sm:px-6">
                <span className="text-[15px] font-semibold leading-snug text-gray-900 sm:text-base">
                  {faq.q}
                </span>
                <span
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-teal-500 flex-shrink-0 ml-4 transition-transform duration-200"
                  style={{
                    transform:
                      openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
