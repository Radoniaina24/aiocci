import { Mail, Globe, MapPin, Building2, TrendingUp } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Get in Touch</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <p className="text-lg text-gray-200 mb-8 text-center">
                Whether you are a company, investor, institution, or partner,
                AIOCCI welcomes collaboration and dialogue.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a
                      href="mailto:contact@aiocci.org"
                      className="text-blue-300 hover:text-blue-200"
                    >
                      contact@aiocci.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Website</p>
                    <a
                      href="http://www.aiocci.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:text-green-200"
                    >
                      www.aiocci.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Head Office</p>
                    <p className="text-gray-300">Madagascar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Offices</p>
                    <p className="text-gray-300">Delescar & Boris</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Regional Presence
                    </p>
                    <p className="text-gray-300">Africa & Indian Ocean</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Expansion</p>
                    <p className="text-gray-300">
                      New offices opening soon in other African countries
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
