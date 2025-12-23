'use client';

import { useState } from 'react';
import { Menu, X, Globe, Mail, MapPin, Building2, Users, Handshake, Calendar, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Globe className="h-10 w-10 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">AIOCCI</span>
                <span className="text-xs text-gray-600 hidden sm:block">African Indian Ocean Chamber</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Events</button>
              <button onClick={() => scrollToSection('membership')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Membership</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50 rounded-md">Services</button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50 rounded-md">Events</button>
              <button onClick={() => scrollToSection('membership')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Membership</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              African Indian Ocean<br />Chamber of Commerce & Industry
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-semibold">AIOCCI</p>
            <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
              A Business Bridge between Africa and the Indian Ocean
            </p>

            <div className="max-w-4xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Welcome to AIOCCI</h2>
              <p className="text-lg leading-relaxed mb-4">
                The African Indian Ocean Chamber of Commerce & Industry (AIOCCI) is an independent business platform dedicated to strengthening trade, investment, and economic cooperation between Africa and the Indian Ocean region.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                AIOCCI connects companies, investors, institutions, and economic stakeholders through business facilitation, strategic networking, and the organization of high-level corporate and economic events.
              </p>
              <p className="text-lg leading-relaxed">
                Our objective is to foster sustainable growth, cross-border partnerships, and regional economic integration across Africa, the Indian Ocean, and international markets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('membership')} size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Become a Member
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About AIOCCI</h2>
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
                    AIOCCI is a business-oriented Chamber of Commerce and Industry bringing together private sector leaders, institutions, entrepreneurs, and investors committed to developing strong and sustainable economic links between Africa and the Indian Ocean region.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Founded as an independent and inclusive platform, AIOCCI acts as a bridge between markets, cultures, and economic opportunities.
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
                    To become a leading economic platform connecting Africa and the Indian Ocean, facilitating trade, investment, innovation, and sustainable development at regional and international levels.
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
                      <span>Promote trade and investment between Africa and the Indian Ocean region</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Facilitate business connections and cross-border partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Support companies in their international expansion</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Organize high-level corporate and economic events</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Encourage public–private dialogue and economic diplomacy</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Strengthen regional integration and private sector cooperation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
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
                    We assist companies in identifying business opportunities, partners, and markets across Africa and the Indian Ocean region.
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
                    AIOCCI promotes investment opportunities and connects investors with high-potential projects, enterprises, and strategic initiatives.
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
                    AIOCCI provides a structured platform for networking, representation, and advocacy for its members at national, regional, and international levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="events" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Flagship Projects & Events</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300">Major Projects – 2026</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Africa Business Expo</CardTitle>
                  <CardDescription className="text-blue-100">Mauritius</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-50 leading-relaxed">
                    A large-scale international business and investment exhibition bringing together African, Indian Ocean, and global companies, investors, and institutions. The Expo aims to position Mauritius as a strategic hub for African and Indian Ocean trade and investment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Africa Business Expo</CardTitle>
                  <CardDescription className="text-red-100">Dubai – November</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-red-50 leading-relaxed">
                    An international edition of the Africa Business Expo, connecting African businesses with investors, partners, and markets in the Middle East and beyond, with a strong focus on trade, investment, and global expansion.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 text-white hover:shadow-2xl transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">AI Meets Africa Summit</CardTitle>
                  <CardDescription className="text-green-100">Mauritius</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-50 leading-relaxed">
                    Positioned as the largest Artificial Intelligence summit in Africa, AI Meets Africa Summit brings together policymakers, tech leaders, investors, startups, researchers, and institutions to shape the future of AI, digital transformation, and innovation across the continent.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-center mb-10">Previous & Ongoing Initiatives</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Carrefour Emploi & Études</CardTitle>
                    <CardDescription className="text-gray-300">Madagascar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      A major employment and education fair organized in Madagascar, connecting students, professionals, universities, training institutions, and recruiters at national and international levels.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">International Education Expo</CardTitle>
                    <CardDescription className="text-gray-300">Madagascar – 7-8 February</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      Bringing together international universities, education providers, and students, with a strong focus on international mobility, skills development, and academic partnerships.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">CEO Business Forum</CardTitle>
                    <CardDescription className="text-gray-300">Madagascar – Launched in 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      A high-level business forum dedicated to CEOs, executives, and decision-makers, fostering dialogue on leadership, investment, economic strategy, and private-sector-driven development in Africa and the Indian Ocean region.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Membership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Become a Member of AIOCCI?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Access to a trusted business network across Africa and the Indian Ocean</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Participation in high-level corporate and economic events</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Business matchmaking and partnership facilitation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-amber-700 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Visibility through AIOCCI communication channels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Access to trade missions, forums, and delegations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Strategic positioning within a growing regional and international platform</p>
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
                    Reserved for leading companies and institutions supporting the launch, governance, and strategic orientation of AIOCCI.
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
                    Open to companies, SMEs, startups, investors, and professional organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-red-600 hover:shadow-2xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <Users className="h-12 w-12 text-red-600 mb-4" />
                  <CardTitle className="text-2xl">Institutional & Partner Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Open to chambers of commerce, institutions, embassies, and international organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partnerships & Governance</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-amber-700 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Handshake className="h-12 w-12 text-amber-700 mb-4" />
                  <CardTitle className="text-3xl">Strategic Collaboration</CardTitle>
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
                    Partnerships are built around concrete actions such as joint events, trade missions, forums, and collaborative initiatives.
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
                    AIOCCI operates under a transparent and inclusive governance model, ensuring:
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
                    The Chamber promotes collaboration between the private sector, institutions, and economic stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
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
                    Whether you are a company, investor, institution, or partner, AIOCCI welcomes collaboration and dialogue.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white mb-1">Email</p>
                        <a href="mailto:contact@aiocci.org" className="text-blue-300 hover:text-blue-200">
                          contact@aiocci.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Globe className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white mb-1">Website</p>
                        <a href="http://www.aiocci.org" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200">
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
                        <p className="font-semibold text-white mb-1">Regional Presence</p>
                        <p className="text-gray-300">Africa & Indian Ocean</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <TrendingUp className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white mb-1">Expansion</p>
                        <p className="text-gray-300">New offices opening soon in other African countries</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Globe className="h-10 w-10 text-blue-400" />
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-white">AIOCCI</span>
                  <span className="text-xs text-gray-400">African Indian Ocean Chamber</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                African Indian Ocean Chamber of Commerce & Industry
              </h3>

              <p className="text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
                Connecting Africa and the Indian Ocean through trade, investment, economic cooperation, and high-level corporate events.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                Headquartered in Madagascar, with offices in Delescar and Boris, and expanding across Africa.
              </p>

              <div className="border-t border-gray-800 pt-6">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} AIOCCI. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
