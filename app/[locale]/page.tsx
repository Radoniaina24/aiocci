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
import UpcomingEvents from "@/components/Event/UpcomingEvents";
import AboutAIOCCI from "@/components/About/AboutAIOCCI";
import LegalFramework from "@/components/About/LegalFramework";
import AIOCCIValues from "@/components/About/AIOCCIValues";
import Partners from "@/components/section/Partners";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        <Banner />
        <Hero />
        <PresidentMessages />
        <About />
        {/* <AIOCCIValues /> */}
        <Services />
        <AboutAIOCCI />
        {/* <CardCarousel /> */}
        {/* <LegalFramework /> */}
        <UpcomingEvents />

        <Events />
        <Membership />
        {/* <Partnerships /> */}
        <Partners />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
