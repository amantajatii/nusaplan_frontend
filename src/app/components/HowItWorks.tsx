function PencilIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2.5l3 3L7 16H4v-3L14.5 2.5Z" />
      <path d="M12.5 4.5l3 3" />
    </svg>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
      <path d="M19 2L19.7 4.3L22 5L19.7 5.7L19 8L18.3 5.7L16 5L18.3 4.3L19 2Z" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" />
    </svg>
  )
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 2.5L9 11M17.5 2.5L12 17.5L9 11M17.5 2.5L2.5 7.5L9 11" />
    </svg>
  )
}

import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Label */}
        <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal-500 text-center mb-4 uppercase">
          How It Works
        </p>

        {/* Heading */}
        <h2 className="mb-12 text-center font-display text-[34px] font-bold leading-[39px] sm:text-5xl sm:leading-tight md:mb-20">
          <span className="text-gray-900">Tiga langkah, </span>
          <span className="text-teal-500">nol drama</span>
          <span className="text-gray-900">.</span>
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gray-100 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {/* STEP 01 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 mb-5">
                <PencilIcon />
              </div>
              <p className="text-xs font-bold tracking-[0.15em] text-amber-500 mb-2">STEP 01</p>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-3">
                Ketik perjalananmu
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto mb-5">
                Bahasa santai, satu kalimat. AI memahami konteksnya.
              </p>
              {/* Mini card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 flex items-center gap-3 text-sm text-gray-600">
                <SparkleIcon className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span>Healing 3 hari di Jogja...</span>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 mb-5">
                <SparkleIcon className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold tracking-[0.15em] text-amber-500 mb-2">STEP 02</p>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-3">
                AI menyusun itinerary
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto mb-5">
                Jadwal, budget, kuliner — terangkai dalam hitungan detik.
              </p>
              {/* Mini card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 flex items-center gap-3 text-sm text-gray-600">
                <div className="flex gap-1 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                </div>
                <span>Mengoptimalkan budget...</span>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 mb-5">
                <PlaneIcon />
              </div>
              <p className="text-xs font-bold tracking-[0.15em] text-amber-500 mb-2">STEP 03</p>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-3">
                Siap berangkat
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto mb-5">
                Buka di Maps, simpan, atau bagikan ke partner.
              </p>
              {/* Mini card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 flex items-center gap-3 text-sm text-gray-600">
                <PlaneIcon className="text-teal-500 flex-shrink-0" />
                <span>Itinerary siap · 3 hari</span>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
