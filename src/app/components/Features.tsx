function WalletIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor">
      <path
        d="M3 8V6a2 2 0 012-2h12a2 2 0 012 2v2M3 8h16M3 8v8a2 2 0 002 2h12a2 2 0 002-2V8M13 13h1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor">
      <circle cx="10" cy="10" r="7.5" strokeWidth="1.5" />
      <path d="M10 6v4l2.5 2.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ForkKnifeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor">
      <path
        d="M7 3v5a3 3 0 003 3M7 3a3 3 0 013 3v2M13 3v14M10 11v6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor">
      <path
        d="M3 7l4-2 6 2 4-2v12l-4 2-6-2-4 2V7z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7 5v12M13 7v12" strokeWidth="1.5" />
    </svg>
  );
}

const features = [
  {
    icon: <WalletIcon />,
    title: "AI Budget Optimizer",
    desc: "Itinerary disesuaikan dengan budget kamu — tanpa kompromi pengalaman.",
  },
  {
    icon: <ClockIcon />,
    title: "Itinerary per Jam",
    desc: "Jadwal jam-per-jam yang realistis, lengkap dengan estimasi waktu tempuh.",
  },
  {
    icon: <ForkKnifeIcon />,
    title: "Rekomendasi Kuliner",
    desc: "Tempat makan lokal favorit di sekitar destinasi, bukan rantai turis.",
  },
  {
    icon: <MapIcon />,
    title: "1 Tap Google Maps",
    desc: "Setiap lokasi langsung bisa dibuka di Maps — tanpa copy-paste.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col items-start gap-10 sm:gap-16">
          {/* LEFT */}
          <div className="flex-[0_0_50%]">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-500 mb-4 uppercase">
              Why Nusaplan
            </p>
            <h2 className="font-display text-[34px] font-bold leading-[39px] text-gray-900 sm:text-5xl sm:leading-tight">
              Berhenti Googling. <br />
              <span className="text-teal-500">Mulai berangkat.</span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-5">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
