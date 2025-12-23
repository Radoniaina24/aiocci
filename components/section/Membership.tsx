import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Building2, ChevronRight, Users } from "lucide-react";

export default function Membership() {
  return (
    <section
      id="membership"
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Become a Member of AIOCCI?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Access to a trusted business network across Africa and the
                Indian Ocean
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Participation in high-level corporate and economic events
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Business matchmaking and partnership facilitation
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-amber-700 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Visibility through AIOCCI communication channels
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Access to trade missions, forums, and delegations
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Strategic positioning within a growing regional and
                international platform
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-blue-600 hover:shadow-2xl transition-all hover:-translate-y-2">
            <CardHeader>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Founding Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Reserved for leading companies and institutions supporting the
                launch, governance, and strategic orientation of AIOCCI.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-green-600 hover:shadow-2xl transition-all hover:-translate-y-2">
            <CardHeader>
              <Building2 className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Corporate Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Open to companies, SMEs, startups, investors, and professional
                organizations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-red-600 hover:shadow-2xl transition-all hover:-translate-y-2">
            <CardHeader>
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle className="text-2xl">
                Institutional & Partner Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Open to chambers of commerce, institutions, embassies, and
                international organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
