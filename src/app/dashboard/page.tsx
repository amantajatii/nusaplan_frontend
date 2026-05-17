import type { Metadata } from "next";
import DashboardTopBar from "./_components/DashboardTopBar";
import DecorBlobs from "./_components/DecorBlobs";
import Greeting from "./_components/Greeting";
import StatTiles from "./_components/StatTiles";
import NextTripBanner from "./_components/NextTripBanner";
import CreateTripCTA from "./_components/CreateTripCTA";
import SectionHeader from "./_components/SectionHeader";
import TripCardsRow from "./_components/TripCardsRow";
import SavedDestinationsRow from "./_components/SavedDestinationsRow";
import WishlistCTAStrip from "./_components/WishlistCTAStrip";
import FloresAIRecCard from "./_components/FloresAIRecCard";
import MoodSection from "./_components/MoodSection";
import FooterEntry from "./_components/FooterEntry";

export const metadata: Metadata = { title: "Dashboard — NusaPlan" };

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF7F1]">
      <DecorBlobs />
      <DashboardTopBar />
      <main className="relative pb-32 pt-[82px]">
        <div className="mx-auto flex max-w-[1362px] flex-col gap-6 px-5">
          <Greeting />
          <StatTiles />
          <NextTripBanner />
          <CreateTripCTA />
          <SectionHeader
            title="Perjalananmu"
            sub="Kenangan dan rencana yang sedang berjalan"
            action="Lihat semua"
          />
          <TripCardsRow />
          <SectionHeader
            title="Destinasi yang disimpan"
            sub="Tempat-tempat yang menarik hatimu"
            action="Kelola"
          />
          <SavedDestinationsRow />
          <WishlistCTAStrip />
          <FloresAIRecCard />
          <MoodSection />
          <FooterEntry />
        </div>
      </main>
    </div>
  );
}
