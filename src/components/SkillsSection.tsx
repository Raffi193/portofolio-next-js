"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portofolio";

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } as any,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } as any,
    },
  };

  return (
    <section id="skills" className="relative py-24 px-6 sm:px-12 md:px-14 bg-zinc-50 dark:bg-[#070913]/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 text-sm font-semibold tracking-widest text-blue-500 uppercase"
          >
            Keahlian Saya
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          >
            Teknologi yang Saya Kuasai
          </motion.h3>
        </div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-x-10 gap-y-8 sm:grid-cols-2"
          >
            {portfolioData.skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                {/* Progress bar background */}
                <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800/50 relative">
                  {/* Progress bar indikator */}
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2 + index * 0.1,
                      ease: [0.25, 1, 0.5, 1] as any, // ease out cubic
                    }}
                  />
                  {/* Efek light beam kecil lari di atas progress */}
                  <div className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-30 group-hover:animate-pulse bg-gradient-to-r from-transparent via-white to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
