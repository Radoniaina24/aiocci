"use client";

import React from "react";
import { useTranslations } from "next-intl";
import PresidentMessage from "./PresidentMessage";

const PresidentMessages = () => {
  const t = useTranslations("president");

  return (
    <div>
      <PresidentMessage
        presidentName={t("presidentName")}
        title={t("title")}
        organization={t("organization")}
        organizationAcronym={t("organizationAcronym")}
        imageSrc="https://res.cloudinary.com/devhkzelq/image/upload/v1767632740/pr%C3%A9sident_vwrrms.jpg"
        imageAlt={t("imageAlt")}
        greeting={t.raw("greeting")}
        paragraphs={t.raw("paragraphs")}
        closing={t("closing")}
        slogan={t("slogan")}
      />
    </div>
  );
};

export default PresidentMessages;
