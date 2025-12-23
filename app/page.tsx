"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/About/About";
import Service from "@/components/Service/Service";
import Events from "@/components/section/Event";
import Membership from "@/components/section/Membership";
import Partnerships from "@/components/section/Partnerships";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Service />
        <Events />
        <Membership />
        <Partnerships />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
