// components/Banner/BannerWithTicker.tsx

"use client";

import BannerCarousel from "./BannerCarousel";
import Ticker from "./Ticker";
import TickerAdvanced from "./TickerAdvanced";

import { Slide, TickerItem } from "./types";

interface BannerWithTickerProps {
  slides: Slide[];
  tickerItems: TickerItem[];
  tickerVariant?: "default" | "gradient" | "dark" | "light" | "neon";
  tickerSpeed?: "slow" | "normal" | "fast";
  carouselAutoPlayInterval?: number;
  carouselHeight?: string;
  showAdvancedTicker?: boolean;
}

export default function BannerWithTicker({
  slides,
  tickerItems,
  tickerVariant = "gradient",
  tickerSpeed = "normal",
  carouselAutoPlayInterval = 5000,
  carouselHeight = "h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]",
  showAdvancedTicker = true,
}: BannerWithTickerProps) {
  return (
    <div className="relative">
      {/* Ticker en haut */}
      {showAdvancedTicker ? (
        <TickerAdvanced
          items={tickerItems}
          speed={tickerSpeed}
          // variant={tickerVariant}
          // size="md"
        />
      ) : (
        <Ticker items={tickerItems} speed={tickerSpeed} pauseOnHover={true} />
      )}

      {/* Bannière Carousel */}
      <BannerCarousel
        slides={slides}
        autoPlayInterval={carouselAutoPlayInterval}
        height={carouselHeight}
        showIndicators={true}
        showArrows={true}
      />
    </div>
  );
}
