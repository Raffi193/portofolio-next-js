"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portofolio";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="about" className="relative py-24 px-6 sm:px-12 md:px-14 bg-zinc-100/50 dark:bg-[#070913]/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 lg:flex-row lg:items-center"
        >
          {/* Bagian Visual (Bento Box / Gambar sekunder) */}
          <motion.div
            variants={itemVariants}
            className="relative flex-1 lg:pr-12"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 shadow-2xl backdrop-blur-md">
              {/* Dekorasi Cahaya */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-purple-900/40 opacity-80" />
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-600/30 blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-600/30 blur-3xl animate-pulse delay-1000" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <div className="p-6 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-white/5 shadow-2xl ring-1 ring-zinc-100 dark:ring-white/10">
                   <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3">Passion & Dedikasi</h4>
                   <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">Menulis kode yang efisien, scalable, dan menciptakan pengalaman pengguna yang mulus.</p>
                 </div>
              </div>
            </div>
            {/* Dekorasi luar shape */}
            <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-2xl border border-blue-500/30 bg-zinc-100/80 dark:bg-[#070913]/80 backdrop-blur-sm -z-10" />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-purple-500/30 bg-zinc-100/80 dark:bg-[#070913]/80 backdrop-blur-sm -z-10" />
          </motion.div>

          {/* Bagian Teks (Kanan di Desktop) */}
          <div className="flex-1 space-y-8 text-left">
            <motion.div variants={itemVariants}>
              <h2 className="mb-2 text-sm font-semibold tracking-widest text-blue-500 uppercase">
                Tentang Saya
              </h2>
              <h3 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Lebih Dekat Dengan Saya
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400">
              {portfolioData.about.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </motion.div>

            {/* Grid Statistik Pendek */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-3 border-t border-zinc-200 dark:border-white/10"
            >
              <div className="space-y-2">
                <h4 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {portfolioData.about.experience}
                </h4>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Pengalaman</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {portfolioData.about.projectsCompleted}
                </h4>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Proyek Selesai</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {portfolioData.about.clients}
                </h4>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Klien Puas</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
