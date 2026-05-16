const stats = [
  { value: "10.000+", label: "Itinerary dibuat" },
  { value: "4.8/5", label: "Traveler satisfaction" },
  { value: "150+", label: "Destinasi Indonesia" },
  { value: "<10s", label: "Rata-rata generate" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#FAF7F1] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="rounded-2xl bg-white px-4 py-7 shadow-2xl sm:px-8 sm:py-8">
          <div className="grid grid-cols-2 gap-y-6 divide-gray-200 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 text-center sm:px-4">
                <p className="font-display text-[26px] font-bold leading-[31px] text-gray-900 sm:text-3xl sm:leading-normal">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
