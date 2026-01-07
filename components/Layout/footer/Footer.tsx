import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src={
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1767782065/logo_ps4jlv.jpg"
                }
                alt={t("logoAlt")}
                width={300}
                height={300}
                className="rounded"
              />
            </Link>
          </div>

          {/* Organization name */}
          <h3 className="text-xl font-semibold text-white mb-3">
            {t("organization")}
          </h3>

          {/* Description */}
          <p className="text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            {t("description")}
          </p>

          {/* Headquarters info */}
          <p className="text-sm text-gray-500 mb-6">{t("headquarters")}</p>

          {/* Footer copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              {t.rich("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
