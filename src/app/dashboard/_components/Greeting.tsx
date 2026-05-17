import Image from "next/image";

export default function Greeting() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
        style={{ boxShadow: "0px 12px 26px -12px rgba(20,30,40,0.35)" }}>
        <Image
          src="/explore/profile.jpg"
          alt="Rizki"
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-[12.5px] font-medium text-[#5B6470]">Selasa yang cerah ·</p>
        <h1 className="font-sans text-[26px] font-medium leading-tight tracking-[-0.4px] text-[#1F2A37]">
          Hai, Rizki <span style={{ color: "#FDBF3A" }}>👋</span>
        </h1>
        <p className="font-display text-[13.5px] font-normal text-[#5B6470]">
          Siap melanjutkan perjalanan berikutnya?
        </p>
      </div>
    </div>
  );
}
