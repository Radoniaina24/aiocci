"use client";

import Footer from "@/components/Layout/footer/Footer";
import Hero from "@/components/section/Hero";

import Service from "@/components/section/Service";
import Events from "@/components/section/Event";
import Membership from "@/components/section/Membership";
import Partnerships from "@/components/section/Partnerships";
import Contact from "@/components/section/Contact";
import Header from "@/components/Layout/header/Header";
import About from "@/components/About";

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
