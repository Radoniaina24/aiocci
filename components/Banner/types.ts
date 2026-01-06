// components/Banner/types.ts

export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  alignment?: "left" | "center" | "right";
}

export interface BannerCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  height?: string;
}

// NOUVEAU - Types pour le Ticker
export interface TickerItem {
  id: number;
  text: string;
  icon?: string;
  highlight?: boolean;
  link?: string;
}

export interface TickerProps {
  items: TickerItem[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  backgroundColor?: string;
  textColor?: string;
  separator?: string;
  showIcon?: boolean;
}
