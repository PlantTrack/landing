// What the Privacy Policy and the Terms need that only the company can say.
// Until a value is filled in, both pages show it as a highlighted blank and
// mark themselves as a draft, so neither can go live half-written.
export const legal: Record<LegalField, string> = {
  company: '', // the legal name, e.g. "Home Plants, Inc."
  email: '', // where privacy and legal questions go
  law: '', // whose laws govern the Terms, e.g. "the State of Delaware, USA"
  photoServices: '', // who identifies plants and reads photos for a diagnosis
  photosKept: '', // how long those photos stay, e.g. "for 30 days after we answer"
  deletedWithin: '', // how many days until a deleted account is gone, e.g. "30"
  updated: '', // the date both pages take effect, e.g. "November 3, 2026"
};

export type LegalField = 'company' | 'email' | 'law' | 'photoServices' | 'photosKept' | 'deletedWithin' | 'updated';

// What each blank says while it's empty.
export const legalHints: Record<LegalField, string> = {
  company: 'company name',
  email: 'contact email',
  law: 'governing law',
  photoServices: 'photo ID and diagnosis services',
  photosKept: 'how long photos are kept',
  deletedWithin: 'number of days',
  updated: 'date',
};

export const legalDraft = Object.values(legal).some((value) => !value);
