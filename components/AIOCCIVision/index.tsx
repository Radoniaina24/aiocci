// app/page.tsx ou pages/index.tsx

import { useTranslations } from "next-intl";
import EditorialPrestige from "./EditorialPrestige";

export default function EditorialPrestigePage() {
  const t = useTranslations("carrefour");
  const forumData = {
    title: t("title"),
    edition: t("edition"),
    year: t("year"),
    location: t("location"),
    description: t("description"),
    highlights: [
      {
        icon: "flag" as const,
        value: "25",
        label: "Countries",
      },
      {
        icon: "users" as const,
        value: "500+",
        label: "Delegates",
      },
      {
        icon: "building" as const,
        value: "150+",
        label: "Companies",
      },
      {
        icon: "handshake" as const,
        value: "80+",
        label: "Partnerships",
      },
      {
        icon: "chart" as const,
        value: "$2B+",
        label: "Opportunities",
      },
      {
        icon: "globe" as const,
        value: "3",
        label: "Days",
      },
    ],
    images: [
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_1_tosptd.jpg",
        alt: "Opening Ceremony",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_2_idmmph.jpg",
        alt: "Panel Discussion",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_3_lzgzcr.jpg",
        alt: "Business Meetings",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_4_rlwiqe.jpg",
        alt: "Keynote Speech",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_5_ywymcf.jpg",
        alt: "Group Photo",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_6_p5nh7p.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767261/3_7_koh97a.jpg",
        alt: "Exhibition",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767767262/3_8_l5vvn2.jpg",
        alt: "Exhibition Hall",
      },
    ],
    scrollSpeed: 40, // Optional: pixels per second
  };

  return (
    <main>
      <EditorialPrestige {...forumData} />
    </main>
  );
}
