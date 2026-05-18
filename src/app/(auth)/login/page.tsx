'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { getFirebaseAuth } from '@/lib/firebase/client'
import { setSession } from '@/app/_actions/session'
import { syncProfile } from '@/app/_actions/profile'
import { EyeIcon, EyeOffIcon, GoogleIcon } from '@/app/components/icons'

type Mode = 'login' | 'register-prompt'

function mapFirebaseError(code: string): string {
  switch (code) {
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Password salah, coba lagi.'
    case 'auth/invalid-email':
      return 'Format email tidak valid.'
    case 'auth/too-many-requests':
      return 'Terlalu banyak percobaan. Tunggu sebentar.'
    case 'auth/user-disabled':
      return 'Akun dinonaktifkan.'
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return ''
    default:
      return 'Koneksi bermasalah. Coba lagi.'
  }
}

export default function LoginPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isPendingGoogle, startGoogleTransition] = useTransition()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [mode, setMode] = useState<Mode>('login')
  const [fieldError, setFieldError] = useState<{ email?: string; password?: string }>({})
  const [bannerError, setBannerError] = useState<string | null>(null)
  const [registerNote, setRegisterNote] = useState(false)

  const isDisabled = isPending || isPendingGoogle

  async function afterLogin() {
    try {
      const user = getFirebaseAuth().currentUser
      if (!user) { console.error('[afterLogin] no currentUser'); return }
      const token = await user.getIdToken()
      await setSession(token)
      await syncProfile()
      window.location.href = '/dashboard'
    } catch (err) {
      console.error('[afterLogin error]', err)
    }
  }

  function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    setFieldError({})
    setBannerError(null)

    if (!email.includes('@')) {
      setFieldError({ email: 'Format email tidak valid.' })
      return
    }
    if (password.length < 6) {
      setFieldError({ password: 'Password minimal 6 karakter.' })
      return
    }

    startTransition(async () => {
      try {
        if (mode === 'register-prompt') {
          await createUserWithEmailAndPassword(getFirebaseAuth(), email, password)
        } else {
          await signInWithEmailAndPassword(getFirebaseAuth(), email, password)
        }
        await afterLogin()
      } catch (err: unknown) {
        const code = (err as { code?: string })?.code ?? ''
        if (code === 'auth/user-not-found') {
          setMode('register-prompt')
          setRegisterNote(true)
          return
        }
        const msg = mapFirebaseError(code)
        if (!msg) return
        if (code === 'auth/invalid-email') {
          setFieldError({ email: msg })
        } else if (code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
          setFieldError({ password: msg })
        } else {
          setBannerError(msg)
        }
      }
    })
  }

  function handleGoogle() {
    setFieldError({})
    setBannerError(null)
    startGoogleTransition(async () => {
      try {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(getFirebaseAuth(), provider)
        await afterLogin()
      } catch (err: unknown) {
        const code = (err as { code?: string })?.code ?? ''
        console.error('[Google login error]', code, err)
        const msg = mapFirebaseError(code)
        if (msg) setBannerError(msg)
      }
    })
  }

  const ctaLabel = isPending
    ? 'Memproses…'
    : mode === 'register-prompt'
    ? 'Daftar akun ini'
    : 'Masuk'

  return (
    <main className="relative min-h-screen bg-[#FAF7F1] flex flex-col items-center justify-center px-5 py-12 overflow-hidden">
      {/* Background blur orbs */}
      <div
        className="pointer-events-none absolute -left-20 -top-28 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(27,161,170,0.40) 0%, rgba(14,81,85,0.20) 35%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-16 top-56 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(253,191,58,0.45) 0%, rgba(190,143,44,0.25) 35%, transparent 70%)' }}
      />

      {/* Brand identity above card */}
      <div className="relative z-10 mb-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2.5">
          <div
            className="h-9 w-9 rounded-full bg-[#1BA1AA] flex items-center justify-center shrink-0 overflow-hidden"
            style={{ boxShadow: '0px 8px 20px -6px rgba(27,161,170,0.55)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="h-full w-full object-cover" aria-hidden="true" />
          </div>
          <span className="font-sans text-[22px] font-medium tracking-[-0.3px] text-[#1F2A37]">
            NusaPlan
          </span>
        </div>
        <p className="font-display text-[15px] font-medium text-[#5B6470]">
          Mulai cerita perjalananmu
        </p>
      </div>

      {/* Login card */}
      <div
        className="relative z-10 w-full max-w-105 rounded-3xl bg-white px-8 py-8"
        style={{ boxShadow: '0px 12px 16px -4px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.03)' }}
      >
        {/* Network/banner error */}
        {bannerError && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-display text-[13px] text-red-600"
          >
            {bannerError}
          </div>
        )}

        {/* Google button */}
        <button
          type="button"
          onClick={handleGoogle}
          disabled={isDisabled}
          aria-label="Lanjutkan dengan Google"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-[#E2E8F0] bg-white py-3 font-display text-[14px] font-medium text-[#1F2A37] transition-colors hover:bg-[#FAF7F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ boxShadow: '0px 1px 3px rgba(0,0,0,0.08), 0px 1px 2px rgba(0,0,0,0.04)' }}
        >
          {isPendingGoogle ? (
            <span className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-[#1BA1AA]/30 border-t-[#1BA1AA]" />
          ) : (
            <GoogleIcon />
          )}
          {isPendingGoogle ? 'Membuka Google…' : 'Lanjutkan dengan Google'}
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E2E8F0]" />
          <span className="font-display text-[12px] text-[#9AA3AD]">atau</span>
          <div className="h-px flex-1 bg-[#E2E8F0]" />
        </div>

        {/* Email/password form */}
        <form onSubmit={handleEmail} className="flex flex-col gap-4" noValidate>
          {/* Register note */}
          {registerNote && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-xl bg-[#1BA1AA]/8 px-4 py-3 font-display text-[13px] text-[#1BA1AA]"
            >
              Email belum terdaftar — tekan lagi untuk buat akun baru.
            </p>
          )}

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-display text-[12px] font-semibold uppercase tracking-[0.6px] text-[#5B6470]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="kamu@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (fieldError.email) setFieldError((p) => ({ ...p, email: undefined }))
              }}
              disabled={isDisabled}
              aria-invalid={!!fieldError.email}
              aria-describedby={fieldError.email ? 'email-error' : undefined}
              className={`rounded-xl border px-4 py-3 font-display text-[14px] text-[#1F2A37] placeholder:text-[#9AA3AD] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/50 focus-visible:ring-offset-1 disabled:opacity-50 ${
                fieldError.email
                  ? 'border-red-400 bg-red-50/40'
                  : 'border-[#E2E8F0] bg-white'
              }`}
            />
            {fieldError.email && (
              <p id="email-error" role="alert" className="font-display text-[12px] text-red-500">
                {fieldError.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="font-display text-[12px] font-semibold uppercase tracking-[0.6px] text-[#5B6470]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete={mode === 'register-prompt' ? 'new-password' : 'current-password'}
                required
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (fieldError.password) setFieldError((p) => ({ ...p, password: undefined }))
                }}
                disabled={isDisabled}
                aria-invalid={!!fieldError.password}
                aria-describedby={fieldError.password ? 'password-error' : undefined}
                className={`w-full rounded-xl border px-4 py-3 pr-11 font-display text-[14px] text-[#1F2A37] placeholder:text-[#9AA3AD] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/50 focus-visible:ring-offset-1 disabled:opacity-50 ${
                  fieldError.password
                    ? 'border-red-400 bg-red-50/40'
                    : 'border-[#E2E8F0] bg-white'
                }`}
              />
              <button
                type="button"
                aria-pressed={showPassword}
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#9AA3AD] transition-colors hover:text-[#5B6470] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/50"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>
            {fieldError.password && (
              <p id="password-error" role="alert" className="font-display text-[12px] text-red-500">
                {fieldError.password}
              </p>
            )}
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isDisabled}
            className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1BA1AA] font-display text-[14.5px] font-semibold text-white transition-colors hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{ boxShadow: '0px 14px 30px -10px rgba(27,161,170,0.55)' }}
          >
            {isPending && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            )}
            {ctaLabel}
          </button>
        </form>
      </div>

      {/* Footer ToS */}
      <p className="relative z-10 mt-6 max-w-[320px] text-center font-display text-[12px] leading-relaxed text-[#9AA3AD]">
        Dengan masuk kamu setuju dengan{' '}
        <a href="#" className="text-[#5B6470] underline-offset-2 hover:underline">
          Syarat
        </a>{' '}
        &amp;{' '}
        <a href="#" className="text-[#5B6470] underline-offset-2 hover:underline">
          Kebijakan Privasi
        </a>
      </p>
    </main>
  )
}
