// app/page.tsx

import BannerWithTicker from "@/components/Banner/BannerWithTicker";

import { Slide, TickerItem } from "@/components/Banner/types";
import { useTranslations } from "next-intl";

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
