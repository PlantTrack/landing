# Home Plants — landing page

Marketing site for **Home Plants**, the iOS app that learns when each houseplant
needs water from a quick soil check now and then.

The design is the editorial direction from Figma (Home Plants file, page
"4 · Landing — web", variant B): forest-green and paper sections in turn, the
headlines in Instrument Serif, in a light and a dark theme.

## Stack

- **Next.js 16** (App Router), static export
- **React 19**, **TypeScript**
- **Tailwind CSS 3.4**
- Inter and Instrument Serif via `next/font`
- Icons: `lucide-react`

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in out/
npm run preview   # serves out/ locally
```

## Structure

```
app/
  layout.tsx          Fonts, metadata, the theme set before first paint
  page.tsx            The sections in order
  globals.css         Colours for both themes (CSS variables), reveal animation
  sections/
    Hero.tsx          Nav, the rule, the To do screen between two photos
    HowItWorks.tsx    "Late isn't failing", then the three steps
    Features.tsx      Photo ID on a leaf, and what's inside
    Pricing.tsx       Free and Premium
    Questions.tsx     Good to know
    GetTheApp.tsx     "Every plant in the house" and the footer
components/
  AppStoreBadge.tsx   Placeholder — see below
  Logo.tsx            The app icon (public/app-icon.png) and the name
  PhoneMockup.tsx     A real app screen, light or dark to match the page
  ThemeToggle.tsx     Light/dark, remembered; follows the system until picked
  Reveal.tsx          Fades sections up once as they arrive
  links.ts            Every outgoing link, in one place
public/
  screens/            The app's screens (simulator, sample data), both themes
  photos/             CC0 photographs — ATTRIBUTIONS.md
```

## Before it goes live

- **App Store badge and links** — `components/links.ts` and
  `components/AppStoreBadge.tsx` are placeholders. Use Apple's official badge
  from the App Store Marketing Guidelines once the listing exists.
- **Privacy and Terms** — `/privacy/` and `/terms/`, Home Tasker's text made true for Home Plants
  (`app/privacy/content.tsx`, `app/terms/content.tsx`); the date is in `components/legal.ts`.
  Contact is `support@homeplants.io`.
- **Prices** — $24 a year / $2.99 a month and the 7-day trial mirror the app's
  placeholders (`PlusPlan`); StoreKit will set the real ones.
