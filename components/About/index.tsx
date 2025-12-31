"use client";

import React from "react";
import { useTranslations } from "next-intl";
import FoundingStory from "./FoundingStory";
import VisionMission from "./VisionMission";

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

  const visionMission = [
    {
      type: "vision" as const,
      title: t("visionMission.vision.title"),
      description: t("visionMission.vision.description"),
      icon: "EyeIcon",
    },
    {
      type: "mission" as const,
      title: t("visionMission.mission.title"),
      description: t("visionMission.mission.description"),
      icon: "RocketLaunchIcon",
    },
  ];

  return (
    <>
      <FoundingStory story={foundingStory} />
      <VisionMission items={visionMission} />
    </>
  );
}
