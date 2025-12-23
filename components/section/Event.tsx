import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Events() {
  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flagship Projects & Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Major Projects – 2026</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Africa Business Expo
              </CardTitle>
              <CardDescription className="text-blue-100">
                Mauritius
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-blue-50 leading-relaxed">
                A large-scale international business and investment exhibition
                bringing together African, Indian Ocean, and global companies,
                investors, and institutions. The Expo aims to position Mauritius
                as a strategic hub for African and Indian Ocean trade and
                investment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Africa Business Expo
              </CardTitle>
              <CardDescription className="text-red-100">
                Dubai – November
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-red-50 leading-relaxed">
                An international edition of the Africa Business Expo, connecting
                African businesses with investors, partners, and markets in the
                Middle East and beyond, with a strong focus on trade,
                investment, and global expansion.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                AI Meets Africa Summit
              </CardTitle>
              <CardDescription className="text-green-100">
                Mauritius
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-50 leading-relaxed">
                Positioned as the largest Artificial Intelligence summit in
                Africa, AI Meets Africa Summit brings together policymakers,
                tech leaders, investors, startups, researchers, and institutions
                to shape the future of AI, digital transformation, and
                innovation across the continent.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            Previous & Ongoing Initiatives
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Carrefour Emploi & Études
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Madagascar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  A major employment and education fair organized in Madagascar,
                  connecting students, professionals, universities, training
                  institutions, and recruiters at national and international
                  levels.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  International Education Expo
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Madagascar – 7-8 February
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Bringing together international universities, education
                  providers, and students, with a strong focus on international
                  mobility, skills development, and academic partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors md:col-span-2">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  CEO Business Forum
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Madagascar – Launched in 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  A high-level business forum dedicated to CEOs, executives, and
                  decision-makers, fostering dialogue on leadership, investment,
                  economic strategy, and private-sector-driven development in
                  Africa and the Indian Ocean region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
