export type TransitOption = {
  icon: "bus" | "car" | "bike" | "plane";
  title: string;
  sub: string;
  price: string;
};

export type Destination = {
  slug: string;
  name: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  height: "sm" | "md" | "lg";
  trending?: boolean;
  price: string;
  duration: string;
  distance: string;
  // detail fields
  jamBuka: string;
  tiket: string;
  rating: number;
  travelerCount: string;
  about: string;
  aiTip: string;
  bestMonths: number[];
  bestSeasonLabel: string;
  rainyTip: string;
  transit: TransitOption[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "gunung-bromo",
    name: "Gunung Bromo",
    location: "Jawa Timur",
    category: "Adventure",
    image: "/explore/bromo.jpg",
    alt: "Gunung Bromo",
    height: "lg",
    trending: true,
    price: "Rp 35.000",
    duration: "1–2 hari",
    distance: "8 km",
    jamBuka: "00:00 – 24:00",
    tiket: "Rp 35.000",
    rating: 4.9,
    travelerCount: "3.800",
    about:
      "Gunung berapi aktif yang ikonik di Jawa Timur. Sunrise di atas Bromo adalah salah satu pengalaman paling magis di Indonesia.",
    aiTip:
      '"Tiba sebelum subuh untuk sunrise terbaik. Sewa kuda dari Cemoro Lawang — hemat tenaga untuk pendakian kawah."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Kabut tebal, tapi pemandangan tetap dramatis.",
    transit: [
      { icon: "bus", title: "Dari Surabaya", sub: "Bus + jeep · 4 jam", price: "Rp 150k" },
      { icon: "car", title: "Dari Malang", sub: "Mobil sewa · 2.5 jam", price: "Rp 300k" },
      { icon: "bike", title: "Dari Probolinggo", sub: "Ojek online · 1 jam", price: "Rp 50k" },
      { icon: "plane", title: "Dari Jakarta", sub: "Penerbangan + transfer · 5 jam", price: "Rp 1.5jt" },
    ],
  },
  {
    slug: "ubud-sawah",
    name: "Ubud Sawah",
    location: "Bali",
    category: "Healing",
    image: "/explore/ubud.jpg",
    alt: "Ubud Sawah",
    height: "md",
    price: "Rp 25.000",
    duration: "2–3 hari",
    distance: "13 km",
    jamBuka: "07:00 – 18:00",
    tiket: "Rp 25.000",
    rating: 4.8,
    travelerCount: "5.200",
    about:
      "Hamparan sawah hijau di jantung Ubud. Trekking pagi hari menyusuri terasering Tegallalang adalah pengalaman healing terbaik.",
    aiTip:
      '"Kunjungi pagi sebelum jam 8 sebelum ramai. Bawa uang cash untuk sarapan nasi Bali di warung tepi sawah."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Sawah lebih hijau, tapi jalur licin.",
    transit: [
      { icon: "car", title: "Dari Denpasar", sub: "Taksi · 1 jam", price: "Rp 100k" },
      { icon: "bike", title: "Dari Seminyak", sub: "Ojek online · 1.5 jam", price: "Rp 60k" },
      { icon: "bus", title: "Dari Kuta", sub: "Shuttle bus · 1.5 jam", price: "Rp 50k" },
      { icon: "plane", title: "Dari Jakarta", sub: "Penerbangan + transfer · 3 jam", price: "Rp 800k" },
    ],
  },
  {
    slug: "raja-ampat",
    name: "Raja Ampat",
    location: "Papua Barat",
    category: "Nature Escape",
    image: "/explore/raja-ampat.jpg",
    alt: "Raja Ampat",
    height: "sm",
    trending: true,
    price: "Rp 1.000.000",
    duration: "1 minggu+",
    distance: "18 km",
    jamBuka: "08:00 – 17:00",
    tiket: "Rp 1.000.000",
    rating: 4.9,
    travelerCount: "1.200",
    about:
      "Kepulauan dengan biodiversitas laut terkaya di dunia. Snorkeling dan diving di sini tak tertandingi oleh destinasi mana pun.",
    aiTip:
      '"Bawa kartu selam sendiri, harga sewa di sini mahal. Musim terbaik April–Oktober untuk visibilitas bawah laut optimal."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Gelombang tinggi, beberapa dive spot tutup.",
    transit: [
      { icon: "plane", title: "Dari Jakarta", sub: "Penerbangan ke Sorong · 4 jam", price: "Rp 2.5jt" },
      { icon: "bus", title: "Dari Sorong", sub: "Speedboat · 3–4 jam", price: "Rp 500k" },
      { icon: "car", title: "Sewa kapal", sub: "Island hopping · harian", price: "Rp 800k" },
      { icon: "bike", title: "Dari dermaga", sub: "Ojek lokal · 15 menit", price: "Rp 20k" },
    ],
  },
  {
    slug: "prambanan",
    name: "Prambanan",
    location: "Yogyakarta",
    category: "Culture",
    image: "/explore/prambanan.jpg",
    alt: "Prambanan",
    height: "md",
    price: "Rp 50.000",
    duration: "2–3 jam",
    distance: "0 km",
    jamBuka: "06:30 – 17:00",
    tiket: "Rp 50.000",
    rating: 4.8,
    travelerCount: "2.300",
    about:
      "Kompleks candi Hindu terbesar di Indonesia. Datang menjelang senja untuk siluet candi yang ikonik.",
    aiTip:
      '"Datang sebelum jam 5 sore untuk sunset terbaik. Bawa jaket tipis — angin sore di sini sering kencang."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Lebih sepi tapi cek prakiraan dulu.",
    transit: [
      { icon: "bus", title: "Dari kota terdekat", sub: "Bus umum · 2.5 jam", price: "Rp 30k" },
      { icon: "car", title: "Dari pusat kota", sub: "Mobil sewa · 1.5 jam", price: "Rp 250k" },
      { icon: "bike", title: "Dari penginapan", sub: "Ojek online · ±45 menit", price: "Rp 35k" },
      { icon: "plane", title: "Dari Jakarta", sub: "Penerbangan + transfer · 3 jam", price: "Rp 1.2jt" },
    ],
  },
  {
    slug: "borobudur",
    name: "Borobudur",
    location: "Magelang",
    category: "Culture",
    image: "/explore/borobudur.jpg",
    alt: "Borobudur",
    height: "lg",
    trending: true,
    price: "Rp 75.000",
    duration: "3–4 jam",
    distance: "23 km",
    jamBuka: "06:00 – 17:00",
    tiket: "Rp 75.000",
    rating: 4.9,
    travelerCount: "4.100",
    about:
      "Candi Buddha terbesar di dunia. Relief dindingnya menceritakan kisah kehidupan Buddha dan umat manusia.",
    aiTip:
      '"Datang saat sunrise untuk mendapatkan spot terbaik sebelum pengunjung memadati candi. Beli tiket online sehari sebelumnya."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Bawa jas hujan tipis, tangga bisa licin.",
    transit: [
      { icon: "bus", title: "Dari Yogyakarta", sub: "Bus wisata · 1.5 jam", price: "Rp 50k" },
      { icon: "car", title: "Dari Semarang", sub: "Mobil sewa · 2 jam", price: "Rp 350k" },
      { icon: "bike", title: "Dari Magelang", sub: "Ojek online · 30 menit", price: "Rp 25k" },
      { icon: "plane", title: "Dari Jakarta", sub: "Penerbangan + transfer · 3 jam", price: "Rp 1.2jt" },
    ],
  },
  {
    slug: "air-terjun-sumba",
    name: "Air Terjun Sumba",
    location: "Nusa Tenggara",
    category: "Adventure",
    image: "/explore/air-terjun-sumba.jpg",
    alt: "Air Terjun Sumba",
    height: "md",
    price: "Rp 20.000",
    duration: "1 hari",
    distance: "28 km",
    jamBuka: "07:00 – 17:00",
    tiket: "Rp 20.000",
    rating: 4.7,
    travelerCount: "890",
    about:
      "Air terjun tersembunyi di padang sabana Sumba. Keindahannya masih alami dan jauh dari hiruk pikuk wisata massal.",
    aiTip:
      '"Bawa guide lokal — jalur menuju air terjun belum ada papan petunjuk jelas. Mereka juga bisa ceritakan kearifan lokal Sumba."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Debit air lebih deras tapi akses jalan sulit.",
    transit: [
      { icon: "plane", title: "Dari Bali", sub: "Penerbangan ke Tambolaka · 1.5 jam", price: "Rp 700k" },
      { icon: "car", title: "Dari kota Waikabubak", sub: "Mobil sewa · 2 jam", price: "Rp 300k" },
      { icon: "bike", title: "Dari desa terdekat", sub: "Ojek lokal · 30 menit", price: "Rp 30k" },
      { icon: "bus", title: "Dari Waingapu", sub: "Bus umum · 4 jam", price: "Rp 60k" },
    ],
  },
  {
    slug: "lombok-selatan",
    name: "Lombok Selatan",
    location: "NTB",
    category: "Romantic",
    image: "/explore/lombok-selatan.jpg",
    alt: "Lombok Selatan",
    height: "sm",
    price: "Rp 30.000",
    duration: "2–3 hari",
    distance: "35 km",
    jamBuka: "00:00 – 24:00",
    tiket: "Rp 30.000",
    rating: 4.8,
    travelerCount: "1.700",
    about:
      "Pantai-pantai tersembunyi dengan pasir putih dan air biru jernih. Mandalika dan Kuta Lombok menjadi surga bagi pasangan.",
    aiTip:
      '"Sewa motor dari Mataram — lebih fleksibel untuk menjelajah pantai-pantai tersembunyi. Hindari high season Desember–Januari."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Pantai tetap indah, tapi ombak lebih besar.",
    transit: [
      { icon: "plane", title: "Dari Bali", sub: "Penerbangan ke Lombok · 30 menit", price: "Rp 400k" },
      { icon: "bus", title: "Dari Mataram", sub: "Bus + ojek · 2 jam", price: "Rp 50k" },
      { icon: "car", title: "Dari Bandara", sub: "Taksi · 1.5 jam", price: "Rp 200k" },
      { icon: "bike", title: "Lokal", sub: "Sewa motor · 1 hari", price: "Rp 80k" },
    ],
  },
  {
    slug: "flores",
    name: "Flores",
    location: "NTT",
    category: "Backpacker",
    image: "/explore/flores.jpg",
    alt: "Flores",
    height: "md",
    price: "Rp 100.000",
    duration: "1 minggu",
    distance: "42 km",
    jamBuka: "08:00 – 17:00",
    tiket: "Rp 100.000",
    rating: 4.8,
    travelerCount: "1.100",
    about:
      "Pulau paling beragam di NTT. Dari Danau Kelimutu yang berwarna hingga desa adat Wae Rebo — setiap sudut Flores adalah cerita.",
    aiTip:
      '"Sewa mobil dengan driver lokal untuk seluruh perjalanan. Mereka tahu warung terbaik dan jalan pintas ke spot tersembunyi."',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    bestSeasonLabel: "April – Oktober",
    rainyTip: "Musim hujan: Nov – Maret. Jalan menuju Kelimutu bisa terputus.",
    transit: [
      { icon: "plane", title: "Dari Bali", sub: "Penerbangan ke Labuan Bajo · 1.5 jam", price: "Rp 600k" },
      { icon: "car", title: "Trans-Flores", sub: "Mobil + driver · 3 hari", price: "Rp 2.5jt" },
      { icon: "bus", title: "Antar kota", sub: "Bus DAMRI · 6–8 jam", price: "Rp 100k" },
      { icon: "bike", title: "Lokal", sub: "Sewa motor · harian", price: "Rp 90k" },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
