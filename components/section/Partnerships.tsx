import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, ChevronRight, Handshake } from "lucide-react";

export default function Partnerships() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partnerships & Governance
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-amber-700 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Handshake className="h-12 w-12 text-amber-700 mb-4" />
              <CardTitle className="text-3xl">
                Strategic Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">AIOCCI works closely with:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chambers of commerce and business councils</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Public and private institutions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Investment promotion agencies</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>International organizations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Corporations and business networks</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Partnerships are built around concrete actions such as joint
                events, trade missions, forums, and collaborative initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-3xl">Governance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                AIOCCI operates under a transparent and inclusive governance
                model, ensuring:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Independence</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Professionalism</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ethical conduct</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Business-driven leadership</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                The Chamber promotes collaboration between the private sector,
                institutions, and economic stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
