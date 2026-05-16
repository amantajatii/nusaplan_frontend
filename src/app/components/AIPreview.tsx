function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
      <path d="M19 2L19.7 4.3L22 5L19.7 5.7L19 8L18.3 5.7L16 5L18.3 4.3L19 2Z" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" />
    </svg>
  );
}

export default function AIPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* LEFT col */}
          <div className="flex w-full flex-col items-center text-center lg:flex-[0_0_45%] lg:items-start lg:text-left">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-500 mb-4 uppercase">
              Live AI Preview
            </p>
            <h2 className="mb-5 font-display text-[34px] font-bold leading-[39px] text-gray-900 sm:mb-6 sm:text-5xl sm:leading-tight">
              Lihat apa yang terjadi setelah kamu{" "}
              <span className="text-teal-500">mengetik</span>.
            </h2>
            <p className="mb-7 max-w-md text-[15px] leading-relaxed text-gray-500 sm:mb-8 sm:text-base">
              AI Nusaplan membaca ceritamu, memahami suasananya, lalu menyusun
              jadwal jam-per-jam — lengkap dengan budget dan kuliner.
            </p>
            <button className="bg-teal-500 text-white rounded-full px-7 py-3 font-semibold flex items-center gap-2 w-fit hover:bg-teal-400 transition-colors duration-150">
              Coba sendiri
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT col */}
          <div className="w-full lg:flex-[0_0_55%]">
            <div className="relative flex items-center justify-center">
              {/* Glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-16 bg-teal-400/20 blur-3xl rounded-4xl" />

              {/* Card */}
              <div className="relative z-10 h-[142.75px] w-full max-w-[511.25px] rounded-[32px] bg-[#FAF7F1] shadow-[0px_40px_80px_-30px_rgba(20,30,40,0.35)] ring-1 ring-inset ring-black/[0.05]">
                {/* Input row */}
                <div className="absolute left-4 right-4 top-[29px] inline-flex h-[54px] items-center justify-start gap-2 rounded-full bg-white px-4 py-3 shadow-[0px_12px_24px_-16px_rgba(20,30,40,0.25)] ring-1 ring-inset ring-black/[0.05] sm:left-[29px] sm:right-auto sm:w-[calc(100%-58px)] sm:max-w-[453.25px]">
                  <div className="relative h-7 w-7 shrink-0 rounded-full bg-[linear-gradient(135deg,#1BA1AA_0%,#2CC9C8_100%)]">
                    <SparkleIcon className="absolute left-[7px] top-[7px] h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="relative h-[21px] min-w-0 flex-1 overflow-hidden">
                    <div className="absolute left-0 top-0 break-words font-display text-sm font-medium leading-[21px] text-[#1F2A37]">
                      Healing 3 hari di Jogja budget 1 juta
                    </div>
                  </div>
                </div>

                {/* Typing row */}
                <div className="absolute left-4 right-4 top-[95px] inline-flex h-[18.75px] items-center justify-start gap-2 px-2 sm:left-[29px] sm:right-auto sm:w-[calc(100%-58px)] sm:max-w-[453.25px]">
                  <div className="relative h-1.5 w-[26px] shrink-0">
                    <span className="absolute left-0 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#1BA1AA] opacity-[0.79]" />
                    <span className="absolute left-2.5 top-[-2.57px] h-1.5 w-1.5 rounded-full bg-[#1BA1AA]" />
                    <span className="absolute left-5 top-[-1.65px] h-1.5 w-1.5 rounded-full bg-[#1BA1AA] opacity-75" />
                  </div>
                  <div className="relative h-[18.75px] min-w-0 flex-1">
                    <div className="absolute left-0 top-[-1px] break-words font-display text-[12.5px] font-medium leading-[18.75px] text-[#5B6470]">
                      Mencari wisata healing terbaik di Jogja...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
