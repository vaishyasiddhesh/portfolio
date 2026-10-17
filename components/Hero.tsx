"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden pt-[130px] grid-background"
>
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px]" />

<div className="container-custom relative z-10 flex min-h-[calc(100vh-130px)] items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Siddhesh
              <br />
              <span className="gradient-text">
                Full-Stack Developer & Devops engineer
                
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              I build modern web applications, SaaS products,
              automation tools and AI-powered solutions that solve
              real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
className="group flex items-center gap-2 rounded-full bg-gray-800 px-7 py-4 font-medium text-black transition hover:bg-zinc-200"              >
                View Projects
                <ArrowDown
                  size={17}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/vaishyasiddhesh"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-white/30 hover:text-white"
              >
                <Github size={19} />
              </a>

              <a
                href="https://in.linkedin.com/in/siddhesh-vaishya-749429298"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-white/30 hover:text-white"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="flex justify-center lg:justify-end lg:pr-8"
          >
            <div className="relative">

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-[40px] bg-white/10 blur-3xl" />

              {/* Image card */}
              <div className="relative h-[420px] w-[340px] overflow-hidden rounded-[40px] border border-white/15 bg-zinc-900/80 shadow-2xl sm:h-[500px] sm:w-[400px]">

                <Image
                  src="/profile/main2a.png"
                  alt="Siddhesh - Full Stack Developer"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                    <p className="text-sm text-zinc-400">
                      Currently building
                    </p>

                    <p className="mt-1 font-semibold">
                      SaaS • AI • Full-Stack
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-10 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-xs text-zinc-500">
                  Building
                </p>
                <p className="text-sm font-semibold">
                  Digital Products 🚀
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}