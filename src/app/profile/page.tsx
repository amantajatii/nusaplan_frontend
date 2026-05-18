import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { serverFetch } from "@/lib/api-server";
import type { UserProfile } from "@/lib/types";
import { ApiError } from "@/lib/types";
import ProfileForm from "./_components/ProfileForm";

export const metadata: Metadata = { title: "Profil — NusaPlan" };

export default async function ProfilePage() {
  let profile: UserProfile;
  try {
    profile = await serverFetch<UserProfile>("/api/user/profile", { auth: true });
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) redirect("/login");
    throw err;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F1] px-5 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="font-sans text-[28px] font-medium tracking-[-0.3px] text-[#1F2A37] mb-6">
          Profil
        </h1>
        <ProfileForm profile={profile} />
      </div>
    </div>
  );
}
