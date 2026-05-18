import { Suspense } from "react";
import { serverFetch } from "@/lib/api-server";
import type { DestinationsPage } from "@/lib/types";
import TopBar from "./_components/TopBar";
import SearchFilterBar from "./_components/SearchFilterBar";
import SectionHeader from "./_components/SectionHeader";
import RecentlyViewed from "./_components/RecentlyViewed";
import DestinationGrid from "./_components/DestinationGrid";

export const metadata = { title: "Explore — NusaPlan" };

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ExplorePage({ searchParams }: Props) {
  const params = await searchParams;
  const city = typeof params.city === "string" ? params.city : undefined;
  const mood = typeof params.mood === "string" ? params.mood : undefined;
  const category = typeof params.category === "string" ? params.category : undefined;
  const search = typeof params.search === "string" ? params.search : undefined;
  const cursor = typeof params.cursor === "string" ? params.cursor : undefined;

  let result: DestinationsPage = { items: [], nextCursor: null, total: 0 };
  try {
    result = await serverFetch<DestinationsPage>("/api/destinations", {
      query: { city, mood, category, search, cursor, limit: 20 },
    });
  } catch {
    // return empty on error, grid shows empty state
  }

  return (
    <div className="relative min-h-screen bg-[#FAF7F1]">
      {/* Decorative orbs */}
      <div
        className="pointer-events-none absolute -left-24 -top-32 h-105 w-105 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(27,161,170,0.35) 0%, rgba(14,81,85,0.175) 35%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-120 h-90 w-90 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(253,191,58,0.4) 0%, rgba(190,143,44,0.3) 17.5%, rgba(127,96,29,0.2) 35%, transparent 70%)",
        }}
      />

      {/* Fixed top bar */}
      <TopBar />

      {/* Fixed search + filter bar — wrapped in Suspense because useSearchParams inside */}
      <Suspense>
        <SearchFilterBar />
      </Suspense>

      {/* Scrollable content */}
      <main className="mx-auto max-w-338.5 px-6 pb-16 pt-47">
        <div className="flex flex-col gap-6">
          <SectionHeader />
          <RecentlyViewed />
          <DestinationGrid destinations={result.items} />
        </div>
      </main>
    </div>
  );
}
