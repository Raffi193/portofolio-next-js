"use client";

import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portofolio"; // Pastikan ejaannya 'portfolio' atau 'portofolio' sesuai nama file Anda
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  const fadeLeftVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  // Teks yang akan dianimasikan
  const deskripsi =
    "Saya siap membangun solusi digital yang efisien dan scalable, saya memiliki keterampilan pada pengembangan web modern dan analisis data. Dengan pengalaman dalam berbagai proyek, bahasa pemrograman dan juga framework, saya berkomitmen untuk terus berkontribusi pada proyek-proyek inovatif.";

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-10 pt-32 sm:px-12 md:px-14">
      {/* GRID CONTAINER: Ini kunci agar teks dan foto bersebelahan.
        grid-cols-1 = tumpuk di layar kecil
        lg:grid-cols-2 = bagi 2 kolom di layar besar (laptop/PC)
      */}
      <div className="container relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* KOLOM KIRI: TEKS & TOMBOL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase">
              Tersedia untuk proyek baru
            </span>
          </motion.div>

          {/* Headline Utama */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-xl font-bold bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b2] bg-clip-text text-transparent tracking-normal sm:text-4xl lg:text-8xl"
          >
            Welcome
            <br />
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            className="mb-3 text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-3xl"
          >
          </motion.h1>

          {/* Deskripsi */}
          {/* Deskripsi (Word-by-Word Reveal) */}
          <motion.div
            variants={itemVariants} // Tetap memakai variant utama agar posisinya turun mengikuti judul
            className="mb-30 max-w-2xl text-lg font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
          >
            {deskripsi.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.08, // 0.6s untuk menunggu headline muncul, 0.04s adalah jeda antar kata
                  duration: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94] as any,
                }}
                className="inline-block mr-1.5 mt-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Tombol Aksi (CTA) & Sosial Media */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-8 py-4 text-sm font-semibold text-white dark:text-zinc-950 transition-all hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Lihat Proyek Saya
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-4">
              <SocialLink
                href={portfolioData.personal.github}
                icon={<Github className="h-5 w-5" />}
              />
              <SocialLink
                href={portfolioData.personal.linkedin}
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialLink
                href={`mailto:${portfolioData.personal.email}`}
                icon={<Mail className="h-5 w-5" />}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: FOTO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeLeftVariants}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Efek Glow (Cahaya Pendar) di belakang foto */}
          <div className="absolute inset-0 -z-10 rounded-full bg-blue-600/20 blur-[100px]" />

          {/* Container Foto */}
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-2xl sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
            <Image
              src="/profile.jpg"
              alt="Foto Profil"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Dekorasi Background Ambient */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-400/20 dark:bg-blue-900/10 blur-[120px]" />
    </section>
  );
}

// Komponen Ikon Sosial Media
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white hover:shadow-md hover:ring-zinc-300 dark:hover:ring-zinc-700 active:scale-95"
    >
      {icon}
    </a>
  );
}
