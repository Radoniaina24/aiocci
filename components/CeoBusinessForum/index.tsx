// app/page.tsx ou pages/index.tsx

import { useTranslations } from "next-intl";
import CeoBusinessForum from "./CeoBusinessForum";

export default function CeoBusinessForumPage() {
  const t = useTranslations("ceoBusinessForum");
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
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637763/WhatsApp_Image_2026-01-03_at_12.40.00_qzp91i.jpg",
        alt: "Opening Ceremony",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637763/WhatsApp_Image_2026-01-03_at_12.40.03_ftfm2t.jpg",
        alt: "Panel Discussion",
      },

      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637763/WhatsApp_Image_2026-01-03_at_12.39.59_vmqgsj.jpg",
        alt: "Business Meetings",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637762/WhatsApp_Image_2026-01-03_at_12.39.53_ln6gkt.jpg",
        alt: "Keynote Speech",
      },
      // {
      //   src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637762/WhatsApp_Image_2026-01-03_at_12.39.54_gy5bmy.jpgg",
      //   alt: "Awards Ceremony",
      // },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637762/WhatsApp_Image_2026-01-03_at_12.39.55_ttitro.jpg",
        alt: "Group Photo",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637762/WhatsApp_Image_2026-01-03_at_12.39.50_y7vgls.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637762/WhatsApp_Image_2026-01-03_at_12.39.52_pqgubp.jpg",
        alt: "Exhibition",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637762/WhatsApp_Image_2026-01-03_at_12.39.48_ykob24.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637761/WhatsApp_Image_2026-01-03_at_12.39.44_pcgzps.jpg",
        alt: "Exhibition Hll",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637761/WhatsApp_Image_2026-01-03_at_12.39.46_qyuygf.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637761/WhatsApp_Image_2026-01-03_at_12.39.45_pii4vh.jpg",
        alt: " Hall",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637761/WhatsApp_Image_2026-01-03_at_12.39.43_huxinf.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637761/WhatsApp_Image_2026-01-03_at_12.39.39_dfk1yq.jpg",
        alt: "Exhibition Hall",
      },
      {
        src: "https://res.cloudinary.com/devhkzelq/image/upload/v1767637761/WhatsApp_Image_2026-01-03_at_12.39.41_cdu1po.jpg",
        alt: "Exhibition Hall",
      },
    ],
    scrollSpeed: 40, // Optional: pixels per second
  };

  return (
    <main>
      <CeoBusinessForum {...forumData} />
    </main>
  );
}
