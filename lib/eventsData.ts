// Types and Interfaces
export type AccentColor = "blue" | "emerald" | "purple" | "amber";

export interface EventData {
  id: number;
  translationKey: string;
  accentColor: AccentColor;
  logo: string;
  image: string;
  hasParticipants: boolean;
  hasDetails: boolean;
  participantsCount?: number;
  objectivesCount: number;
}

// Event static data (non-translatable content)
export const eventsData: EventData[] = [
  {
    id: 1,
    translationKey: "event1",
    accentColor: "blue",
    logo: "/images/logos/education-expo-logo.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767776043/4_2_gcnfhl.jpg",
    hasParticipants: false,
    hasDetails: true,
    objectivesCount: 3,
  },
  {
    id: 2,
    translationKey: "event2",
    accentColor: "emerald",
    logo: "/images/logos/africa-business-expo-mauritius.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767776043/4_3_oqdera.jpg",
    hasParticipants: true,
    hasDetails: false,
    participantsCount: 4,
    objectivesCount: 4,
  },
  {
    id: 3,
    translationKey: "event3",
    accentColor: "purple",
    logo: "/images/logos/ai-meets-africa.png",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767776043/4_1_r1zw8m.jpg",
    hasParticipants: true,
    hasDetails: false,
    participantsCount: 4,
    objectivesCount: 4,
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
  },
];

// Stats configuration
export const statsConfig = [
  { number: "4", labelKey: "events" },
  { number: "4", labelKey: "countries" },
  { number: "2026", labelKey: "year" },
  { number: "1000+", labelKey: "attendees" },
];
