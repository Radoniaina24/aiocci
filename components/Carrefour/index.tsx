// app/page.tsx ou pages/index.tsx

import { useTranslations } from "next-intl";
import Carrefour from "./Carrefour";

export default function CarrefourPage() {
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
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763852/1_1_qwpehh.jpg",
        alt: "Opening Ceremony",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763852/1_2_c0iqcc.jpg",
        alt: "Panel Discussion",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763851/1_3_leinol.jpg",
        alt: "Business Meetings",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763852/1_4_geygyq.jpg",
        alt: "Keynote Speech",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763852/1_5_zdy23a.jpg",
        alt: "Group Photo",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767678236/1_6_qctnmh.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767679993/1_7_ijhulr.jpg",
        alt: "Exhibition",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_8_xhcjns.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_9_ehcbwz.jpg",
        alt: "Exhibition Hll",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_10_hc2ig8.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_11_ecqlmf.jpg",
        alt: " Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_12_qgaibe.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_13_mu7jnz.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767763853/1_14_ufqn6j.jpg",
        alt: "Exhibition Hall",
      },
    ],
    scrollSpeed: 40, // Optional: pixels per second
  };

  return (
    <main>
      <Carrefour {...forumData} />
    </main>
  );
}
