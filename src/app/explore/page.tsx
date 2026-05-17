import TopBar from "./_components/TopBar";
import SearchFilterBar from "./_components/SearchFilterBar";
import SectionHeader from "./_components/SectionHeader";
import RecentlyViewed from "./_components/RecentlyViewed";
import DestinationGrid from "./_components/DestinationGrid";

export const metadata = {
  title: "Explore — NusaPlan",
};

export default function ExplorePage() {
  return (
    <div className="relative min-h-screen bg-[#FAF7F1]">
      {/* Decorative orbs */}
      <div
        className="pointer-events-none absolute left-[-96px] top-[-128px] h-[420px] w-[420px] rounded-full opacity-40 blur-[64px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(27,161,170,0.35) 0%, rgba(14,81,85,0.175) 35%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[-80px] top-[480px] h-[360px] w-[360px] rounded-full opacity-30 blur-[64px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(253,191,58,0.4) 0%, rgba(190,143,44,0.3) 17.5%, rgba(127,96,29,0.2) 35%, transparent 70%)",
        }}
      />

      {/* Fixed top bar */}
      <TopBar />

      {/* Fixed search + filter bar */}
      <SearchFilterBar />

      {/* Scrollable content — offset past both fixed bars (54px topbar + 12px topbar padding + 108px searchbar ≈ 188px) */}
      <main className="mx-auto max-w-[1354px] px-6 pb-16 pt-[188px]">
        <div className="flex flex-col gap-6">
          <SectionHeader />
          <RecentlyViewed />
          <DestinationGrid />
        </div>
      </main>
    </div>
  );
}
