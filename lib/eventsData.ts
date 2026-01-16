// Types and Interfaces
export type AccentColor = "blue" | "emerald" | "purple" | "amber";

export interface EventData {
  partnerUrl: string | undefined;
  id: number;
  translationKey: string;
  accentColor: AccentColor;
  logo: string;
  image: string;
  hasParticipants: boolean;
  hasDetails: boolean;
  participantsCount?: number;
  objectivesCount: number;
  externalUrl?: string;
}

// Event static data (non-translatable content)
export const eventsData: EventData[] = [
  {
    id: 1,
    translationKey: "event1",
    accentColor: "blue",
    logo: "/images/logos/education-expo-logo.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768292914/686fab41-3b53-499b-afe1-9f202220201b_otxncs.jpg",
    hasParticipants: false,
    hasDetails: true,
    objectivesCount: 3,
    partnerUrl: "/membership",
  },
  {
    id: 2,
    translationKey: "event2",
    accentColor: "emerald",
    logo: "/images/logos/africa-business-expo-mauritius.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768223810/post-paysage_bvk0rb.jpg",
    hasParticipants: true,
    hasDetails: false,
    participantsCount: 4,
    objectivesCount: 4,
    externalUrl: "https://africabusinessexpo.aiocci.org",
    partnerUrl: "/membership",
  },
  {
    id: 3,
    translationKey: "event3",
    accentColor: "purple",
    logo: "/images/logos/ai-meets-africa.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1768292978/89213308-f888-4ec2-87ee-a76f0711db2b_mogbce.jpg",
    hasParticipants: true,
    hasDetails: false,
    participantsCount: 4,
    objectivesCount: 4,
    externalUrl: "https://www.aimeetsafricasummit.aiocci.org",
    partnerUrl: "/membership",
  },
  {
    id: 4,
    translationKey: "event4",
    accentColor: "amber",
    logo: "/images/logos/africa-business-expo-dubai.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767776044/4_4_f3hi12.jpg",
    hasParticipants: true,
    hasDetails: false,
    participantsCount: 4,
    objectivesCount: 4,
    partnerUrl: "/membership",
  },
];

// Stats configuration
export const statsConfig = [
  { number: "4", labelKey: "events" },
  { number: "4", labelKey: "countries" },
  { number: "2026", labelKey: "year" },
  { number: "1000+", labelKey: "attendees" },
];
