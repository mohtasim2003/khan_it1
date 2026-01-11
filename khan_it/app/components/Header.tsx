"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container flex justify-between items-center">
        <Link href="/" className="logo">
          Khan IT
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          Menu
        </button>

        <nav className={`${menuOpen ? "block" : "hidden"} md:flex gap-6`}>
          <Link href="#services">Services</Link>
          <Link href="#clients">Clients</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}