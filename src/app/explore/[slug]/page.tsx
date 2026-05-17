import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DESTINATIONS, getDestinationBySlug } from "../_data/destinations";
import DetailHero from "./_components/DetailHero";
import InfoTiles from "./_components/InfoTiles";
import RatingBar from "./_components/RatingBar";
import AboutSection from "./_components/AboutSection";
import AITipCard from "./_components/AITipCard";
import BestTimeChart from "./_components/BestTimeChart";
import HowToGetThere from "./_components/HowToGetThere";
import Gallery from "./_components/Gallery";
import NearbyFood from "./_components/NearbyFood";
import NearbyDestinations from "./_components/NearbyDestinations";
import BottomCTABar from "./_components/BottomCTABar";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestinationBySlug(slug);
  return {
    title: d ? `${d.name} — NusaPlan` : "Detail — NusaPlan",
  };
}

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  return (
    <div className="relative min-h-screen bg-[#FAF7F1]">
      <DetailHero destination={destination} />

      <main className="relative -mt-6 rounded-t-[28px] bg-[#FAF7F1] pb-40 pt-6">
        <div className="mx-auto flex max-w-[1362px] flex-col gap-6 px-5">
          <InfoTiles destination={destination} />
          <RatingBar destination={destination} />
          <AboutSection destination={destination} />
          <AITipCard tip={destination.aiTip} />
          <BestTimeChart destination={destination} />
          <HowToGetThere transit={destination.transit} />
          <Gallery />
          <NearbyFood />
          <NearbyDestinations currentSlug={destination.slug} />
        </div>
      </main>

      <BottomCTABar />
    </div>
  );
}
