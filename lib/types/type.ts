// src/lib/types.ts

export interface MembershipFormValues {
  // Step 1: Membership Type
  membershipType: string;

  // Step 2: Organization Details
  organizationName: string;
  legalStatus: string;
  legalStatusOther: string;
  country: string;
  city: string;
  businessSector: string;
  website: string;

  // Step 3: Contact Person
  contactFullName: string;
  contactPosition: string;
  contactEmail: string;
  contactPhone: string;

  // Step 4: Motivation & Interests
  motivation: string;
  areasOfInterest: string[];
  areasOfInterestOther: string;

  // Step 5: Participation & Engagement
  participateInEvents: string;
  receiveNewsletter: boolean;

  // Step 6: Declaration
  declarationName: string;
  declarationDate: string;
  declarationAgreed: boolean;
}

export const membershipTypes = [
  {
    id: "platinum",
    label: "Platinum Strategic Member",
    price: "USD 5,000 / year",
    description: "Premium access with strategic partnership benefits",
  },
  {
    id: "corporate",
    label: "Corporate & Enterprise Member",
    price: "USD 2,500 / year",
    description: "Full corporate membership with all benefits",
  },
  {
    id: "startup",
    label: "Startups & SMEs Member",
    price: "USD 300 / year",
    description: "Affordable membership for growing businesses",
  },
  {
    id: "institutional",
    label: "Institutional & Public Partner",
    price: "Free",
    description: "For public institutions and governmental bodies",
  },
  {
    id: "honorary",
    label: "Honorary & Advisory Member",
    price: "Free",
    description: "By invitation for distinguished professionals",
  },
  {
    id: "media",
    label: "Media, Journalists & Influencers",
    price: "Free",
    description: "For media professionals and content creators",
  },
];

export const legalStatusOptions = [
  { id: "company", label: "Company" },
  { id: "institution", label: "Institution / Public Body" },
  { id: "ngo", label: "NGO / Association" },
  { id: "individual", label: "Individual" },
  { id: "media", label: "Media Organization" },
  { id: "other", label: "Other" },
];

export const areasOfInterestOptions = [
  { id: "trade", label: "Trade & Investment" },
  { id: "international", label: "International Business" },
  { id: "technology", label: "Technology & AI" },
  { id: "blue-green", label: "Blue & Green Economy" },
  { id: "energy", label: "Energy & Infrastructure" },
  { id: "agriculture", label: "Agriculture & Agro-business" },
  { id: "education", label: "Human Capital & Education" },
  { id: "events", label: "Events & Networking" },
  { id: "other", label: "Other" },
];

export const participationOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
  { id: "occasionally", label: "Occasionally" },
];

export const initialValues: MembershipFormValues = {
  membershipType: "",
  organizationName: "",
  legalStatus: "",
  legalStatusOther: "",
  country: "",
  city: "",
  businessSector: "",
  website: "",
  contactFullName: "",
  contactPosition: "",
  contactEmail: "",
  contactPhone: "",
  motivation: "",
  areasOfInterest: [],
  areasOfInterestOther: "",
  participateInEvents: "",
  receiveNewsletter: false,
  declarationName: "",
  declarationDate: new Date().toISOString().split("T")[0],
  declarationAgreed: false,
};
