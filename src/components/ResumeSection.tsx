"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portofolio";
import { GraduationCap, Briefcase } from "lucide-react";

export default function ResumeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="resume" className="relative py-24 px-6 sm:px-12 md:px-14 bg-zinc-100/30 dark:bg-[#070913]/30 border-y border-zinc-200 dark:border-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 text-sm font-semibold tracking-widest text-blue-500 uppercase"
          >
            Resume
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          >
            Perjalanan Karir & Pendidikan
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-transparent"
        >
          {portfolioData.resume.map((item, index) => {
            // Tentukan sisi untuk desktop: genap di kiri, ganjil di kanan (atau sebaliknya)
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon Marker */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#070913] border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-500 group-hover:text-white">
                  {item.role.toLowerCase().includes("developer") || item.role.toLowerCase().includes("engineer") ? (
                    <Briefcase className="h-4 w-4 text-zinc-600 dark:text-zinc-300 group-hover:text-white" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-zinc-600 dark:text-zinc-300 group-hover:text-white" />
                  )}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] rounded-2xl bg-white dark:bg-zinc-900/50 p-6 shadow-xl border border-zinc-200 dark:border-white/5 transition-all hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-zinc-800/80">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="mb-1 text-xl font-bold text-zinc-900 dark:text-white">
                    {item.role}
                  </h4>
                  <h5 className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {item.company}
                  </h5>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
