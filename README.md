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
  privacy/page.tsx    Privacy Policy
  terms/page.tsx      Terms of Service
  globals.css         Colours for both themes (CSS variables), reveal animation
  sections/
    Hero.tsx          Nav, the rule, the To do screen between two photos
    HowItWorks.tsx    "Late isn't failing", then the three steps
    Features.tsx      Photo ID on a leaf, and what's inside
    Pricing.tsx       Free and Plus
    Questions.tsx     Good to know
    GetTheApp.tsx     "Every plant in the house"
components/
  AppStoreBadge.tsx   Placeholder — see below
  TopBar.tsx          The bar over every page
  SiteFooter.tsx      The last row of every page
  LegalPage.tsx       The layout of Privacy and Terms, and their blanks
  legal.ts            What only the company can fill in on those pages
  Logo.tsx            The leaf mark and the name (swap when the logo is chosen)
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
- **Privacy Policy and Terms** — drafts at `/privacy/` and `/terms/`, written
  from what the app on `main` sends today. Fill in `components/legal.ts`
  (company, email, governing law, photo services, how long photos stay, how
  soon a deleted account goes, the date) and have a lawyer read both. Until
  every blank is filled, the pages say Draft.
- **Contact** — no address yet.
- **Logo** — the leaf mark is a stand-in until one of the marks on the Figma
  page "5 · App icon" is chosen.
- **Prices** — $24 a year / $2.99 a month and the 7-day trial mirror the app's
  placeholders (`PlusPlan`); StoreKit will set the real ones.
