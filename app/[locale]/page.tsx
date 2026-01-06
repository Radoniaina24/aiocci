"use client";

import Footer from "@/components/Layout/footer/Footer";
import Hero from "@/components/section/Hero";

import Events from "@/components/section/Event";
import Membership from "@/components/section/Membership";
import Partnerships from "@/components/section/Partnerships";
import Contact from "@/components/section/Contact";
import Header from "@/components/Layout/header/Header";
import About from "@/components/About";
import Services from "@/components/Services";

import PresidentMessages from "@/components/PresidentMessage";

import CardCarousel from "@/components/CardCarousel/CardCarousel";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Banner />
        <Hero />
        <PresidentMessages />
        <About />
        <Services />
        {/* <CardCarousel /> */}
        <Events />
        <Membership />
        <Partnerships />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
