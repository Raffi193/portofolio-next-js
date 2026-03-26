"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portofolio";
import { Mail, MapPin, Phone, Send, CheckCircle, X, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/m.raffi1808@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || "Pesan Baru dari Portfolio",
            message: formData.message,
            _template: "table",
            _captcha: "false"
        })
      });

      if (response.ok) {
        setShowNotification(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setShowNotification(false), 5000);
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Nama Lengkap</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="Masukkan Nama Anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Alamat Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="Masukkan Email Anda"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Subjek</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                      placeholder="Penawaran Proyek"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Pesan</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none disabled:opacity-50"
                      placeholder="Halo, saya ingin mendiskusikan tentang..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-500 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        Mengirim... <Loader2 className="h-5 w-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Kirim Pesan <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
             </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 flex max-w-sm sm:max-w-md items-start gap-4 rounded-2xl bg-white dark:bg-[#121420] border border-blue-100 dark:border-blue-900/30 p-4 sm:p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-500 mt-0.5">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Berhasil Terkirim!</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Pesan anda berhasil terkirim, anda akan segera dihubungi kembali.
              </p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="inline-flex shrink-0 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
