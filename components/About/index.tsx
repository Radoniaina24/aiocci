import React from "react";
import FoundingStory from "./FoundingStory";
import VisionMission from "./VisionMission";

export default function About() {
  const foundingStory = {
    year: "2011",
    title: "About AIOCCI",
    description:
      " AIOCCI is a business-oriented Chamber of Commerce and Industry bringing together private sector leaders, institutions, entrepreneurs, and investors committed to developing strong and sustainable economic links between Africa and the Indian Ocean region.\n\nFounded as an independent and inclusive platform, AIOCCI acts as a bridge between markets, cultures, and economic opportunities.",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1db3cd0a5-1766377925772.png",
    alt: "Groupe diversifié de professionnels africains et de l'océan Indien en tenue formelle lors d'une réunion d'affaires dans un bureau moderne avec vue panoramique",
  };
  const visionMission = [
    {
      type: "vision" as const,
      title: "Our Vision",
      description:
        " To become a leading economic platform connecting Africa and the Indian Ocean, facilitating trade, investment, innovation, and sustainable development at regional and international levels.",
      icon: "EyeIcon",
    },
    {
      type: "mission" as const,
      title: "Our Mission",
      description:
        " Promote trade and investment between Africa and the Indian Ocean region, facilitate business connections and cross-border partnerships, support companies in their international expansion, organize high-level corporate and economic events,   Strengthen regional integration and private sector cooperation",
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
