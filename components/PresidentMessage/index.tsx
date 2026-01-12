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
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1768193504/pdg_pggdxb.jpg"
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
