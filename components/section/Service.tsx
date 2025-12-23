import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Handshake, TrendingUp, Users } from "lucide-react";

export default function Service() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-600">
            <CardHeader>
              <Handshake className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Business & Trade Facilitation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We assist companies in identifying business opportunities,
                partners, and markets across Africa and the Indian Ocean region.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-green-600">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Investment Promotion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                AIOCCI promotes investment opportunities and connects investors
                with high-potential projects, enterprises, and strategic
                initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-red-600">
            <CardHeader>
              <Calendar className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>Corporate & Economic Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                AIOCCI designs and delivers high-level events, including:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Economic forums and summits</li>
                <li>• Corporate conferences and roundtables</li>
                <li>• B2B and B2G meetings</li>
                <li>• Trade missions and business delegations</li>
                <li>• Investment and sector-focused events</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-amber-700">
            <CardHeader>
              <Users className="h-12 w-12 text-amber-700 mb-4" />
              <CardTitle>Networking & Representation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                AIOCCI provides a structured platform for networking,
                representation, and advocacy for its members at national,
                regional, and international levels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
