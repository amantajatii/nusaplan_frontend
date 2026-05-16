function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path
        d="M11.333 5.333C12.438 5.333 13.333 4.438 13.333 3.333C13.333 2.229 12.438 1.333 11.333 1.333C10.229 1.333 9.333 2.229 9.333 3.333C9.333 4.438 10.229 5.333 11.333 5.333Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.667 10C5.771 10 6.667 9.105 6.667 8C6.667 6.895 5.771 6 4.667 6C3.562 6 2.667 6.895 2.667 8C2.667 9.105 3.562 10 4.667 10Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.333 14.667C12.438 14.667 13.333 13.771 13.333 12.667C13.333 11.562 12.438 10.667 11.333 10.667C10.229 10.667 9.333 11.562 9.333 12.667C9.333 13.771 10.229 14.667 11.333 14.667Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.393 7.007L9.613 4.327"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.393 8.993L9.613 11.673"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path
        d="M4.667 2.667H11.333V13.333L8 11.333L4.667 13.333V2.667Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path
        d="M13.333 7.333C13.17 6.159 12.628 5.07 11.791 4.232C10.954 3.394 9.866 2.851 8.692 2.686C7.518 2.522 6.322 2.744 5.286 3.318C4.25 3.892 3.43 4.787 2.947 5.869"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.667 3.333V5.869H5.203"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.667 8.667C2.83 9.841 3.372 10.93 4.209 11.768C5.046 12.606 6.134 13.149 7.308 13.314C8.482 13.478 9.678 13.256 10.714 12.682C11.75 12.108 12.57 11.213 13.053 10.131"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 12.667V10.131H10.797"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const destinations = [
  { name: "Bali", country: "Indonesia", tag: "Healing", seed: "bali-terraces" },
  {
    name: "Raja Ampat",
    country: "Indonesia",
    tag: "Nature Escape",
    seed: "raja-ampat-islands",
  },
  {
    name: "Yogyakarta",
    country: "Indonesia",
    tag: "Culture",
    seed: "yogyakarta-temple",
  },
  {
    name: "Lombok",
    country: "Indonesia",
    tag: "Adventure",
    seed: "lombok-mountain",
  },
  {
    name: "Bromo",
    country: "Indonesia",
    tag: "Sunrise",
    seed: "bromo-volcano",
  },
  {
    name: "Flores",
    country: "Indonesia",
    tag: "Backpacker",
    seed: "flores-island",
  },
];

export default function PopularDestinations() {
  return (
    <section className="overflow-hidden bg-[#FAF7F1] py-20 sm:py-24 lg:py-28">
      {/* Header */}
      <div className="relative mx-auto mb-10 flex max-w-[1024px] flex-col gap-4 px-4 lg:mb-12 lg:h-[82.59px] lg:px-0">
        <div className="lg:absolute lg:left-0 lg:top-1">
          <p className="break-words font-display text-[13px] font-semibold uppercase leading-[19.5px] tracking-[1.2px] text-[#1BA1AA]">
            POPULAR · TRENDING
          </p>
          <h2 className="mt-2 max-w-160 break-words font-sans text-[34px] font-medium leading-[39px] text-[#1F2A37] sm:text-[36px] sm:leading-[41.4px] lg:mt-[8.5px] lg:text-[44px] lg:leading-[50.6px]">
            Inspirasi yang sedang dijelajahi
          </h2>
        </div>
        <p className="max-w-[384px] break-words font-display text-[15px] font-normal leading-[22.5px] text-[#5B6470] lg:absolute lg:left-[640px] lg:top-[36.59px]">
          Geser untuk melihat destinasi favorit yang dipilih traveler minggu
          ini.
        </p>
      </div>

      {/* Scrollable cards */}
      <div className="scrollbar-hide relative z-0 mt-12 flex gap-4 overflow-x-auto pb-12 pl-4 sm:gap-6 md:pl-16 lg:mt-20">
        {destinations.map((dest) => (
          <a
            key={dest.name}
            href="#"
            className="group relative h-[360px] w-[82vw] max-w-[320px] flex-none overflow-hidden rounded-[24px] bg-white/0 shadow-[0px_20px_50px_-20px_rgba(20,30,40,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF7F1] sm:h-[426.66px] sm:w-[320px] sm:rounded-[28px]">
            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://picsum.photos/seed/${dest.seed}/640/854`}
              alt={dest.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.10)_50%,rgba(0,0,0,0)_100%)]" />
            {/* Category badge */}
            <span className="absolute left-4 top-4 inline-flex h-[21px] items-start rounded-full bg-white/85 px-2.5 py-1 font-display text-[11px] font-semibold leading-[16.5px] tracking-[0.4px] text-[#1F2A37]">
              {dest.tag}
            </span>
            {/* Name + country */}
            <div className="absolute bottom-5 left-5 flex w-[calc(100%-40px)] max-w-[280px] flex-col items-start gap-1">
              <p className="break-words font-sans text-[26px] font-medium leading-[28.6px] text-white">
                {dest.name}
              </p>
              <p className="break-words font-display text-[13px] font-normal leading-[19.5px] text-white/80">
                {dest.country}
              </p>
            </div>
          </a>
        ))}
        {/* Right padding spacer */}
        <div className="flex-none w-16" />
      </div>
      <div className="relative z-20 -mt-16 flex w-full justify-center px-4 pb-4 sm:-mt-13">
        <div className="inline-flex min-h-[54px] w-full max-w-2xl flex-wrap items-center justify-start gap-2 rounded-[28px] bg-white/90 p-1.5 shadow-2xl ring-1 ring-inset ring-black/[0.05] sm:h-[54px] sm:flex-nowrap sm:rounded-full">
          <button
            type="button"
            className="inline-flex h-10 w-full flex-none items-center justify-center gap-1.5 rounded-full bg-[#1BA1AA] font-display text-[13.5px] font-semibold leading-[20.25px] text-white shadow-[0px_12px_24px_-10px_rgba(27,161,170,0.55)] transition-colors duration-150 hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:flex-1">
            <BookmarkIcon className="h-4 w-4" />
            <span>Simpan Trip</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-[calc(50%-4px)] items-center justify-center gap-1.5 rounded-full bg-black/[0.05] font-display text-[13.5px] font-semibold leading-[20.25px] text-[#1F2A37] transition-colors duration-150 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-[102.33px]">
            <ShareIcon className="h-4 w-4" />
            <span>Bagikan</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-[calc(50%-4px)] items-center justify-center gap-1.5 rounded-full bg-black/[0.05] px-3 font-display text-[13px] font-semibold leading-[19.5px] text-[#1F2A37] transition-colors duration-150 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-42 sm:px-4 sm:text-[13.5px] sm:leading-[20.25px]">
            <RefreshIcon className="h-4 w-4 text-[#1BA1AA]" />
            <span>Minta AI Ubah</span>
          </button>
        </div>
      </div>
    </section>
  );
}
