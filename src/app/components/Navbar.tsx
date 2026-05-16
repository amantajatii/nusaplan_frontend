"use client";

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
  );
}

export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3 sm:top-5 sm:px-4">
      <nav className="flex w-full max-w-[calc(100vw-24px)] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/15 px-3 py-2.5 shadow-xl backdrop-blur-md sm:w-auto sm:max-w-none sm:justify-start sm:gap-8 sm:px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500">
            <SparkleIcon className="w-4 h-4 text-white" />
          </div>
          <span className="break-words font-sans text-base font-semibold leading-[24px] text-white sm:text-lg sm:leading-[27px]">
            Nusaplan
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {["Explore", "Mood Trips", "AI Planner", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="break-words rounded-full px-1 py-2 font-display text-sm font-medium leading-[21px] text-white/90 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-start gap-1.5 rounded-full bg-[#1BA1AA] px-3 py-2 font-display text-[12.5px] font-semibold leading-[18.75px] text-white shadow-[0px_8px_24px_-8px_rgba(27,161,170,0.55)] transition-colors duration-150 hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 sm:px-4 sm:text-[13px] sm:leading-[19.5px] whitespace-nowrap break-words">
          Start Planning
        </button>
      </nav>
    </div>
  );
}
