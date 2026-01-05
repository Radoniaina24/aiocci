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
import PresidentMessage from "@/components/PresidentMessage";
import PresidentMessages from "@/components/PresidentMessage";
import CeoBusinessForumPage from "@/components/CeoBusinessForum";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <PresidentMessages />
        <About />
        <Services />

        <Events />
        <Membership />
        <Partnerships />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
