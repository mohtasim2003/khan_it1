"use client";

import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import Clients from "../app/components/Clients";
import CTASection from "../app/components/CTASection";
import Footer from "../app/components/Footer";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Clients />
      <CTASection />
      <Footer />
    </main>
  );
}