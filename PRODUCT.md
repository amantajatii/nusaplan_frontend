# NusaPlan — Product & Brand Guidelines

Design source of truth: [Figma file](https://www.figma.com/design/msAi4Mk5ExQzHVFhzk1Aco/NusaPlan)

---

## 1. Brand Identity

**NusaPlan** is an Indonesian travel-planning product. Tone: warm, inspiring, approachable. Visual language: cream background, teal primary action color, amber accent for highlights.

---

## 2. Color System

### Primary — Teal

| Token | Hex | Usage |
|---|---|---|
| Primary | `#1BA1AA` | Buttons, active states, interactive elements, brand highlights |
| Primary Hover | `#168D95` | Button hover, pressed states |
| Primary Dark | `#0E5155` | Text on teal surfaces |

**Opacity variants** (all based on `rgb(27, 161, 170)`):

| Usage | Value |
|---|---|
| Tag/badge background | `rgba(27,161,170,0.10)` |
| Subtle fill | `rgba(27,161,170,0.12)` |
| Badge medium | `rgba(27,161,170,0.20)` |
| Overlay | `rgba(27,161,170,0.35)` |
| Glow / drop-shadow | `rgba(27,161,170,0.55)` |
| Focus ring | `rgba(27,161,170,0.70)` |

### Accent — Amber / Gold

| Token | Hex | Usage |
|---|---|---|
| Accent | `#FDBF3A` | Trending badge, highlight accents |
| Accent Dark | `#F59E0B` | Gradient end for gold elements |
| Accent Text | `#B07A00` | Text on amber surfaces |

**Gradient** (Trending pill): `linear-gradient(165deg, #FDBF3A 0%, #F59E0B 100%)`

**Opacity variants** (based on `rgb(253, 191, 58)`):

| Usage | Value |
|---|---|
| Badge background | `rgba(253,191,58,0.16)` |
| Badge stronger | `rgba(253,191,58,0.40)` |

### Neutral — Slate

| Token | Hex | Usage |
|---|---|---|
| Ink | `#1F2A37` | Primary text, headings, icons |
| Muted Medium | `#5B6470` | Secondary text, labels |
| Muted Light | `#9AA3AD` | Placeholder text, tertiary UI |

### Surface

| Token | Hex | Usage |
|---|---|---|
| Background | `#FAF7F1` | Page background (warm cream, not pure white) |
| Surface White | `#FFFFFF` | Cards, inputs, overlays |

### Semantic Overlays

| Usage | Value |
|---|---|
| Dark scrim (modals) | `rgba(20,30,40,0.50)` |
| Card shadow base | `rgba(20,30,40,0.25)` |
| Subtle shadow | `rgba(20,30,40,0.18)` |
| Success indicator | `#22C55E` |

---

## 3. Typography

### Typefaces

| Role | Font | Tailwind class |
|---|---|---|
| Headings / display | **Outfit** | `font-sans` |
| UI / body / labels | **Urbanist** | `font-display` |

> Note: In `globals.css`, `--font-outfit` maps to `font-sans` and `--font-urbanist` maps to `font-display`. This is intentional — do not swap them.

### Heading Scale

| Level | Desktop | Mobile | Weight | Line Height |
|---|---|---|---|---|
| H1 | 72px | 44px | Medium (500) | 120% |
| H2 | 52px | 40px | Medium (500) | 120% |
| H3 | 44px | 32px | Medium (500) | 120% |
| H4 | 36px | 24px | Medium (500) | 130% |
| H5 | 28px | 20px | Medium (500) | 140% |
| H6 | 22px | 18px | Medium (500) | 140% |

All headings: **Outfit**, tracking `[-0.2px]` to `[-0.3px]` for larger sizes.

### Body / UI Scale (Urbanist)

| Name | Size | Line Height | Common Weights |
|---|---|---|---|
| Text Large | 22px | 150% | ExtraBold, Bold |
| Text Medium | 18px | 150% | SemiBold, Medium |
| Text Regular | 16px | 150% | Medium, Regular |
| Text Small | 14px | 150% | SemiBold, Medium |
| Text Tiny | 12px | 150% | SemiBold, Regular |
| Tagline | 16px | 150% | SemiBold |
| Label / Pill | 10.5–13px | ~150% | SemiBold |
| Caption | 10–11px | ~150% | SemiBold |

---

## 4. Shadows

| Token | CSS value | Usage |
|---|---|---|
| xxsmall | `0px 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| xsmall | `0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)` | Input rings, fine elevation |
| small | `0px 4px 8px -2px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.06)` | Tags, pills |
| medium | `0px 12px 16px -4px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.03)` | Cards |
| large | `0px 20px 24px -4px rgba(0,0,0,0.08), 0px 8px 8px -4px rgba(0,0,0,0.03)` | Modals, elevated panels |
| xlarge | `0px 24px 48px -12px rgba(0,0,0,0.18)` | Drawers, sheets |
| xxlarge | `0px 32px 64px -12px rgba(0,0,0,0.14)` | Full-page overlays |

**Custom production shadows** (match exact Figma component specs):

| Component | Shadow |
|---|---|
| Top bar pill | `0px 14px 30px 0px rgba(20,30,40,0.20)` |
| Search bar input | `0px 10px 26px 0px rgba(20,30,40,0.25)` |
| Filter button | `0px 10px 26px 0px rgba(20,30,40,0.25)` |
| Category pill (inactive) | `0px 4px 12px 0px rgba(20,30,40,0.18)` |
| Category pill (active) | `drop-shadow(0px 10px 11px rgba(27,161,170,0.55))` |
| Destination card | `0px 18px 40px -22px rgba(20,30,40,0.35)` |
| Recently viewed card | `0px 10px 24px -14px rgba(20,30,40,0.25)` |
| TealButton (CTA) | `0px 14px 14px rgba(27,161,170,0.55)` |
| Bottom drawer sheet | `0px -30px 60px -20px rgba(20,30,40,0.40)` |

---

## 5. Border Radius

All radius tokens in Figma are `16px`. In practice:

| Usage | Value |
|---|---|
| Cards (destination, content) | `rounded-[24px]` |
| Destination cards (large) | `rounded-[24px]` |
| Recently viewed cards | `rounded-2xl` (`16px`) |
| Filter pills / category chips | `rounded-full` |
| Filter rect options (budget/durasi) | `rounded-[16px]` |
| Buttons (CTA) | `rounded-full` |
| Bottom drawer sheet | `rounded-t-[28px]` |
| Icon containers | `rounded-full` |
| Input fields | `rounded-full` |
| Profile photo | `rounded-full` |

---

## 6. UI Components

### Buttons

**Primary (TealButton)** — `src/app/components/TealButton.tsx`
- Background: `#1BA1AA` → hover `#168D95`
- Text: white, Urbanist SemiBold 14–14.5px
- Height: `h-12` (48px) standard CTA
- Shape: `rounded-full`
- Shadow: `0px 14px 14px rgba(27,161,170,0.55)`
- Use for: main submit/confirm actions

**Secondary** — white/80 pill, ink text, `ring-1 ring-black/[0.05]`

**Tertiary / icon button** — `bg-black/[0.05]`, `rounded-full`, ink text, hover `bg-black/10`

**Reset button** (filter drawer)
- `bg-black/[0.05]` pill, `w-[96px] h-12`, Urbanist SemiBold 14px
- Contains RefreshIcon + "Reset" label

### Pills / Tags

**Active category pill**
- `bg-[#1BA1AA] text-white`
- `drop-shadow(0px 10px 11px rgba(27,161,170,0.55))`

**Inactive category pill**
- `bg-white/80 text-[#1F2A37] ring-1 ring-inset ring-black/[0.05]`

**Filter pill (active)**
- `bg-[#1BA1AA]/10 text-[#1BA1AA] ring-1 ring-inset ring-[#1BA1AA]/40`

**Filter pill (PULAU active)**
- `bg-[#1F2A37] text-white drop-shadow(0px 10px 11px rgba(31,42,55,0.5))`

**Info pill (on card overlay)**
- `bg-black/[0.35] text-white/90` — height `h-[20.5px]`, `rounded-full`

**Trending badge**
- `linear-gradient(165deg, #FDBF3A 0%, #F59E0B 100%)`, `rounded-full`, white text, `FlameIcon`

**Category badge (card top)**
- `bg-white/85 text-[#1F2A37]`, `rounded-full`, Urbanist SemiBold 10.5px

### Inputs

**Search input**
- Container: `rounded-full bg-white/90 ring-1 ring-inset ring-black/[0.05]` with `0px 10px 26px` shadow
- Height: `h-11` (44px)
- Icon: `SearchIcon` in `text-[#9AA3AD]`
- Placeholder: Urbanist Medium 14px `text-[#9AA3AD]`
- Text: Urbanist Medium 14px `text-[#1F2A37]`

### Cards

**Destination card (DestinationCard)**
- Full bleed image with `bg-gradient-to-t from-black/75 via-black/10 to-transparent`
- Top: category pill (left) + HeartIcon favorite button (right)
- Optional: Trending gold pill at `top-12 left-3`
- Bottom: name (Outfit Medium 18px white) + location (MapPinIcon + Urbanist 11px white/80) + price/duration pills
- Heights: sm=332px, md=591px, lg=665px

**Recently viewed card**
- 180×178px white `rounded-2xl`
- 107px image top, content block below
- Name: Outfit Medium 14px ink
- Location: MapPinIcon + Urbanist 12px muted

### Bottom Sheet / Drawer

- Portal via `createPortal(jsx, document.body)` — required to escape `backdrop-filter` stacking context
- Backdrop: `bg-black/50 transition-opacity duration-300`
- Sheet: `rounded-t-[28px] max-h-[694px] transition-transform duration-300 ease-out`
- Animation: mount → double `requestAnimationFrame` → set `visible=true` → CSS translate; reverse with 320ms unmount delay
- Drag handle: `h-1.5 w-10 rounded-full bg-black/15`
- Header: Outfit Medium 22px ink
- Footer: always visible, `border-t border-black/[0.05] bg-white/80`

### Navigation / App Bar

**TopBar**
- `fixed top-4 left-4 right-4` pill, `rounded-full bg-white/85 backdrop-blur-sm`
- Back: ChevronLeftIcon button
- Brand: 28px teal circle with `/NusaPlan.svg` + "Nusaplan" SemiBold
- Right: BellIcon with gold dot indicator + profile photo with white ring

---

## 7. Icons

All icons are inline SVG components in `src/app/components/icons.tsx`. No icon library dependency.

Pattern:
```tsx
type IconProps = { className?: string };
export function FooIcon({ className }: IconProps) {
  return <svg className={className} viewBox="..." fill="none" stroke="currentColor" ...>...</svg>;
}
```

Available icons: `SearchIcon`, `SlidersIcon`, `HeartIcon`, `FlameIcon`, `BellIcon`, `XIcon`, `RefreshIcon`, `ChevronDownIcon`, `ChevronLeftIcon`, `MapPinIcon`, `ClockIcon`, `SendIcon`, `SparklesIcon`, `PlusIcon`.

To add new icons: append to `icons.tsx` using the same `IconProps` pattern. Never import from `lucide-react`, `heroicons`, or similar libraries.

---

## 8. Layout Conventions

- **Page background**: always `bg-[#FAF7F1]`
- **Max content width**: `max-w-[1354px] mx-auto`
- **Horizontal padding**: `px-6`
- **Fixed header offset**: `pt-[188px]` (54px topbar + 134px search+filter bar)
- **Masonry grid**: `columns-1 sm:columns-2 lg:columns-3 gap-3` with `break-inside-avoid mb-3` per card
- **Horizontal scroll rows**: `scrollbar-hide flex overflow-x-auto gap-2` (`.scrollbar-hide` utility in `globals.css`)
- **Sticky/fixed bars**: use `backdrop-blur-sm` + `bg-[rgba(250,247,241,0.85)]` for translucent freeze

---

## 9. Animation Patterns

**Bottom sheet open/close**:
1. Set `mounted=true` immediately on open
2. Double `requestAnimationFrame` then set `visible=true`
3. CSS `transition-transform duration-300 ease-out`: `translate-y-full` → `translate-y-0`
4. On close: set `visible=false`, wait 320ms then set `mounted=false`

**Hover transitions**: `transition-colors` (150ms default Tailwind)

**Drop shadows on active pills**: use CSS `filter: drop-shadow(...)` not `box-shadow` — required for correct rendering on non-rectangular pill shapes.

---

## 10. Tailwind v4 Notes

- No `tailwind.config.*` — all tokens in `src/app/globals.css` under `@theme inline`
- Arbitrary values are standard: `text-[14px]`, `h-[332px]`, `rounded-[24px]`
- `z-100` is valid in v4 (maps to `z-index: 100`)
- Prefer inline style for: dynamic box-shadows, complex gradients, `drop-shadow` filters
- Use `ring-inset` for inner border effect on pills/inputs
