"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 pt-5">
      <nav className="mx-auto flex h-[86px] max-w-[1628px] items-center justify-between rounded-[24px] border border-white/10 bg-[#111111]/90 px-7 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#home"
          className="text-[22px] font-bold tracking-tight text-white"
        >
          Siddhesh<span className="text-zinc-500">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#about"
            className="text-[17px] text-zinc-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-[17px] text-zinc-400 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-[17px] text-zinc-400 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-[17px] text-zinc-400 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gray-800 px-7 py-3 text-[15px] font-medium text-black transition hover:bg-zinc-200 md:block"
        >
          Let's talk
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-5 mt-3 rounded-2xl border border-white/10 bg-[#111111]/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-medium text-black"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}