import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Building2, ChevronRight, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About AIOCCI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Who We Are</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                AIOCCI is a business-oriented Chamber of Commerce and Industry
                bringing together private sector leaders, institutions,
                entrepreneurs, and investors committed to developing strong and
                sustainable economic links between Africa and the Indian Ocean
                region.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Founded as an independent and inclusive platform, AIOCCI acts as
                a bridge between markets, cultures, and economic opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-green-600 hover:shadow-xl transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To become a leading economic platform connecting Africa and the
                Indian Ocean, facilitating trade, investment, innovation, and
                sustainable development at regional and international levels.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-red-600 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Promote trade and investment between Africa and the Indian
                    Ocean region
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Facilitate business connections and cross-border
                    partnerships
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Support companies in their international expansion
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Organize high-level corporate and economic events</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Encourage public–private dialogue and economic diplomacy
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Strengthen regional integration and private sector
                    cooperation
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
