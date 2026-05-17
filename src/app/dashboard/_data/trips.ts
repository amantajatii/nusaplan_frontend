export type TripItem = { label: string; done: boolean };
export type Trip = {
  badge: string;
  title: string;
  date: string;
  image: string;
  percent: number;
  progressLabel: string;
  items: TripItem[];
  ctaLabel: string;
  variant: "active" | "done";
  href: string;
};

export const TRIPS: Trip[] = [
  {
    badge: "HEALING",
    title: "Healing 3 Hari di Jogja",
    date: "12 – 14 Mei 2026",
    image: "/explore/prambanan.jpg",
    percent: 80,
    progressLabel: "3 dari 5 langkah siap",
    items: [
      { label: "Budget selesai", done: true },
      { label: "Rute siap", done: true },
      { label: "Tiket masuk", done: true },
    ],
    ctaLabel: "Lanjutkan trip",
    variant: "active",
    href: "/explore/prambanan",
  },
  {
    badge: "ADVENTURE",
    title: "Backpacking Flores",
    date: "23 Jun – 1 Jul 2026",
    image: "/explore/flores.jpg",
    percent: 35,
    progressLabel: "2 dari 5 langkah siap",
    items: [
      { label: "Tanggal fix", done: true },
      { label: "Rute kasar", done: true },
      { label: "Budget belum", done: false },
    ],
    ctaLabel: "Lanjutkan trip",
    variant: "active",
    href: "/explore/flores",
  },
  {
    badge: "ROMANTIC",
    title: "Romantic Lombok",
    date: "Selesai · Feb 2026",
    image: "/explore/lombok-selatan.jpg",
    percent: 100,
    progressLabel: "Kenangan tersimpan",
    items: [
      { label: "Itinerary tersimpan", done: true },
      { label: "Galeri foto", done: true },
      { label: "Catatan perjalanan", done: true },
    ],
    ctaLabel: "Lihat kenangan",
    variant: "done",
    href: "/explore/lombok-selatan",
  },
];

export const MOODS = [
  { label: "Healing", selected: true },
  { label: "Adventure", selected: true },
  { label: "Romantic", selected: false },
  { label: "Family Trip", selected: false },
  { label: "Backpacker", selected: false },
  { label: "Culinary", selected: false },
  { label: "Nature Escape", selected: false },
];
