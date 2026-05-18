import Link from "next/link";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
      <path d="M19 2L19.7 4.3L22 5L19.7 5.7L19 8L18.3 5.7L16 5L18.3 4.3L19 2Z" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" />
    </svg>
  )
}

const linkCols = [
  {
    heading: 'Produk',
    links: [
      { label: 'AI Planner', href: '/chat' },
      { label: 'Explore', href: '/explore' },
      { label: 'Mood Trips', href: '/chat' },
      { label: 'Saved Trips', href: '/dashboard' },
    ],
  },
  {
    heading: 'Tentang',
    links: [
      { label: 'Cerita Kami', href: '/#about' },
      { label: 'Karir', href: '/#about' },
      { label: 'Press Kit', href: '/#about' },
      { label: 'Kontak', href: '/#about' },
    ],
  },
  {
    heading: 'Bantuan',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Kebijakan Privasi', href: '/#about' },
      { label: 'Syarat Layanan', href: '/#about' },
      { label: 'Bantuan', href: '/chat' },
    ],
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/nusaplan' },
  { label: 'TikTok', href: 'https://tiktok.com/@nusaplan' },
  { label: 'X', href: 'https://x.com/nusaplan' },
  { label: 'YouTube', href: 'https://youtube.com/@nusaplan' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F1117] pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <SparkleIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">Nusaplan</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Jelajahi Indonesia dengan satu kalimat. AI travel companion yang memahami suasana hatimu.
            </p>
          </div>

          {/* Link cols */}
          {linkCols.map((col) => (
            <div key={col.heading}>
              <p className="text-white font-semibold text-sm mb-5">{col.heading}</p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-gray-600 text-sm">
              © 2026 Nusaplan · Dibuat dengan cinta untuk traveler Indonesia
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-1.5 text-gray-500 hover:text-gray-300 text-xs transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-xs text-center">
            Cerita perjalananmu, dimulai dari satu kalimat.
          </p>
        </div>
      </div>
    </footer>
  )
}
