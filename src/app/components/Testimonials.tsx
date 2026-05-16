const testimonials = [
  {
    quote:
      '"Biasanya planning liburan ribet banget. Sekarang tinggal ketik langsung jadi."',
    name: "Rizki",
    city: "Jakarta",
    initial: "R",
  },
  {
    quote:
      '"AI-nya tahu spot lokal yang biasanya cuma diketahui warga. Itinerary kuliner-nya juara."',
    name: "Salma",
    city: "Bandung",
    initial: "S",
  },
  {
    quote:
      '"Budget healing 1 juta beneran muat 3 hari di Jogja. Engga nyangka serapi ini."',
    name: "Bayu",
    city: "Surabaya",
    initial: "B",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F1] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col items-start gap-10 sm:gap-16">
          {/* LEFT */}
          <div className="flex-[0_0_45%]">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-500 mb-4 uppercase">
              Traveler Stories
            </p>
            <h2 className="font-display text-[34px] font-bold leading-[39px] text-gray-900 sm:text-5xl sm:leading-tight">
              Dipercaya traveler dari{" "}
              <span className="text-teal-500">seluruh Indonesia</span>.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Quote icon */}
                <svg
                  className="w-6 h-6 text-amber-500 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M10 7H6c0 2.5 1 4 4 4v2c-4 0-6-2-6-6V3h6v4zM20 7h-4c0 2.5 1 4 4 4v2c-4 0-6-2-6-6V3h6v4z" />
                </svg>

                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
