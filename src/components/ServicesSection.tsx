"use client";

import { motion } from "framer-motion";
import { Monitor, Server, PenTool } from "lucide-react";
import { portfolioData } from "@/data/portofolio";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  // Helper fungsi untuk memetakan nama icon string ke komponen Lucide
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return <Monitor className="h-8 w-8" />;
      case "Server":
        return <Server className="h-8 w-8" />;
      case "PenTool":
        return <PenTool className="h-8 w-8" />;
      default:
        return <Monitor className="h-8 w-8" />;
    }
  };

  return (
    <section id="services" className="relative py-24 px-6 sm:px-12 md:px-14">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 text-sm font-semibold tracking-widest text-blue-500 uppercase"
          >
            Layanan
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          >
            What Can I Do?
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioData.services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/40 p-4 border border-zinc-200 dark:border-white/5 shadow-lg transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              {/* Efek Glow pada hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

              <div>
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-500 transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white">
                  {renderIcon(service.iconName)}
                </div>
                <h4 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {service.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed group-hover:text-zinc-800 dark:group-hover:text-zinc-300">
                  {service.description}
                </p>
              </div>

              {/* Garis aksen kecil di bawah */}
              <div className="mt-8 h-1 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 transition-all duration-300 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
