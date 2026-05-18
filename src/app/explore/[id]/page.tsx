import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serverFetch } from "@/lib/api-server";
import type { Destination } from "@/lib/types";
import { ApiError } from "@/lib/types";
import DetailHero from "./_components/DetailHero";
import InfoTiles from "./_components/InfoTiles";
import AboutSection from "./_components/AboutSection";
import AITipCard from "./_components/AITipCard";
import Gallery from "./_components/Gallery";
import NearbyDestinations from "./_components/NearbyDestinations";
import BottomCTABar from "./_components/BottomCTABar";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const d = await serverFetch<Destination>(`/api/destinations/${id}`);
    return { title: `${d.name} — NusaPlan` };
  } catch {
    return { title: "Detail — NusaPlan" };
  }
}

export default async function DetailPage({ params }: Props) {
  const { id } = await params;

  let destination: Destination;
  try {
    destination = await serverFetch<Destination>(`/api/destinations/${id}`);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }

  return (
    <div className="relative min-h-screen bg-[#FAF7F1]">
      <DetailHero destination={destination} />

      <main className="relative -mt-6 rounded-t-[28px] bg-[#FAF7F1] pb-40 pt-6">
        <div className="mx-auto flex max-w-[1362px] flex-col gap-6 px-5">
          <InfoTiles destination={destination} />
          <AboutSection destination={destination} />
          {destination.tips && <AITipCard tip={destination.tips} />}
          <Gallery />
          <NearbyDestinations currentId={destination.id} city={destination.city} />
        </div>
      </main>

      <BottomCTABar destination={destination} />
    </div>
  );
}
