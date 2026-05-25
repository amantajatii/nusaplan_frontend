import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { serverFetch } from "@/lib/api-server";
import type { Trip } from "@/lib/types";
import { ApiError } from "@/lib/types";
import DashboardTopBar from "../_components/DashboardTopBar";
import TripCard from "../_components/TripCard";
import { ChevronLeftIcon } from "../../components/icons";

export const metadata: Metadata = { title: "Semua Perjalanan — NusaPlan" };

export default async function AllTripsPage() {
  let trips: Trip[];

  try {
    trips = await serverFetch<Trip[]>("/api/planner/trips", { auth: true });
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) redirect("/login");
    throw err;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF7F1]">
      <DashboardTopBar />

      <main className="mx-auto max-w-[1362px] px-5 pb-20 pt-[90px]">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70">
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="font-sans text-[24px] font-medium leading-tight tracking-[-0.3px] text-[#1F2A37]">
              Semua Perjalananmu
            </h1>
            <p className="font-display text-[13px] text-[#5B6470]">
              {trips.length} trip tersimpan
            </p>
          </div>
        </div>

        {/* Grid */}
        {trips.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center gap-3 rounded-2xl py-16 text-center"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px dashed rgba(27,161,170,0.3)" }}>
            <p className="font-display text-[14px] text-[#5B6470]">Belum ada trip tersimpan</p>
            <Link
              href="/chat"
              className="rounded-full bg-[#1BA1AA] px-5 py-2.5 font-display text-[13px] font-semibold text-white"
              style={{ boxShadow: "0px 2px 6px rgba(27,161,170,0.25)" }}>
              Buat Trip Pertama
            </Link>
          </div>
        ) : (
          <div className="-m-4 flex flex-wrap p-4 gap-6">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
