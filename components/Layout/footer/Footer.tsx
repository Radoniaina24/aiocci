import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src={"./images/footerLogo.jpg"}
                alt="logo"
                width={300}
                height={300}
                className="rounded"
              />
            </Link>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            African Indian Ocean Chamber of Commerce & Industry
          </h3>

          <p className="text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Connecting Africa and the Indian Ocean through trade, investment,
            economic cooperation, and high-level corporate events.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Headquartered in Madagascar, with offices in Delescar and Boris, and
            expanding across Africa.
          </p>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AIOCCI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
