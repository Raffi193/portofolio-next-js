"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portofolio";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12 md:px-14">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 text-sm font-semibold tracking-widest text-blue-500 uppercase"
            >
              Portofolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl"
            >
              Projects I've Done
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/Raffi193" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white">
              Visit my GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-xl transition-all hover:-translate-y-2 hover:border-zinc-300 dark:hover:border-white/20 hover:shadow-2xl"
            >
              {/* Gambar Proyek dengan Placeholder Efek */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                
                {/* Dummy visual background jika image.src kosong atau placeholder */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-4xl text-zinc-700">
                  Placeholder Image
                </div>
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-0"
                  onError={(e) => {
                    // Fallback visual jika gambar tidak ada
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Konten Proyek */}
              <div className="flex flex-1 flex-col p-3">
                {/* Tech Stack Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((techName, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400"
                    >
                      {techName}
                    </span>
                  ))}
                </div>

                <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="mb-6 flex-1 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tautan */}
                <div className="flex items-center gap-4 border-t border-zinc-200 dark:border-white/5 pt-6 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                  >
                    <Github className="h-5 w-5" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
