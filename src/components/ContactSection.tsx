"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portofolio";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-12 md:px-14 bg-zinc-50 dark:bg-[#070913]/80">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-8"
        >
          {/* Kolom Informasi */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="mb-2 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-500 uppercase">
                Contact
              </h2>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl mb-6">
                Let's Work Together
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-md">
                Apakah Anda memiliki proyek yang ingin didiskusikan? Atau hanya sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500">Email</h4>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-lg font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500">Telepon / WhatsApp</h4>
                  <a href={`tel:${portfolioData.personal.phone?.replace(/ /g, '')}`} className="text-lg font-medium text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500">Lokasi</h4>
                  <p className="text-lg font-medium text-zinc-900 dark:text-white">
                    {portfolioData.personal.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Kolom Form */}
          <motion.div variants={itemVariants} className="relative">
             <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-2xl blur-xl" />
             <div className="rounded-2xl bg-white dark:bg-zinc-900/80 p-6 sm:p-10 border border-zinc-200 dark:border-white/10 shadow-2xl backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Kirim Pesan</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Nama Lengkap</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Masukkan Nama Anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Alamat Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Masukkan Email Anda"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Subjek</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Penawaran Proyek"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Pesan</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      placeholder="Halo, saya ingin mendiskusikan tentang..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-500 active:scale-95"
                  >
                    Kirim Pesan <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
