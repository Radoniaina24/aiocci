"use client";

import React from "react";
import { useTranslations } from "next-intl";
import FoundingStory from "./FoundingStory";
import VisionMission from "./VisionMission";
import LegalFramework from "./LegalFramework";

export default function About() {
  const t = useTranslations("about");

  const foundingStory = {
    year: t("foundingStory.year"),
    title: t("foundingStory.title"),
    description: t("foundingStory.description"),
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1db3cd0a5-1766377925772.png",
    alt: t("foundingStory.imageAlt"),
  };

  return (
    <>
      <LegalFramework />
      <FoundingStory story={foundingStory} />
    </>
  );
}
