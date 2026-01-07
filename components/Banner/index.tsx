// app/page.tsx

import BannerWithTicker from "@/components/Banner/BannerWithTicker";

import { Slide, TickerItem } from "@/components/Banner/types";
import { useTranslations } from "next-intl";

// Données du Ticker
const tickerItems: TickerItem[] = [
  {
    id: 1,
    text: "🔥 Nouvelle collection disponible !",
    highlight: true,
    link: "/nouveautes",
  },
  {
    id: 2,
    text: "Livraison gratuite dès 50€",
    icon: "🚚",
  },
  {
    id: 3,
    text: "-20% sur votre première commande",
    icon: "💰",
    highlight: true,
  },
  {
    id: 4,
    text: "Retours gratuits sous 30 jours",
    icon: "↩️",
  },
  {
    id: 5,
    text: "Service client 24/7",
    icon: "💬",
  },
  {
    id: 6,
    text: "Paiement sécurisé",
    icon: "🔒",
  },
];

export default function Banner() {
  const t = useTranslations("cardCarousel");
  const s = useTranslations("marquee");
  const bannerSlides: Slide[] = t.raw("cards");
  const tickerItems: TickerItem[] = s.raw("slides");
  return (
    <main id="home">
      {/* Option 1: Ticker simple + Banner */}
      <BannerWithTicker
        slides={bannerSlides}
        tickerItems={tickerItems}
        tickerVariant="gradient"
        tickerSpeed="normal"
        carouselAutoPlayInterval={3000}
        carouselHeight="h-[60vh] sm:h-[70vh] lg:h-[85vh]"
      />
    </main>
  );
}
