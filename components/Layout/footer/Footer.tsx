import { Globe } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Globe className="h-10 w-10 text-blue-400" />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">AIOCCI</span>
              <span className="text-xs text-gray-400">
                African Indian Ocean Chamber
              </span>
            </div>
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
