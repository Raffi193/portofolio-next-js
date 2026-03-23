"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portofolio";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  };

  return (
    <section id="blog" className="relative py-24 px-6 sm:px-12 md:px-14">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 text-sm font-semibold tracking-widest text-blue-500 uppercase"
            >
              Tulisan
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl"
            >
              Artikel & Tulisan Terbaru
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mt-4 text-zinc-900 dark:text-zinc-100 sm:text-xl"
            >
              Kumpulan artikel dan tulisan yang saya buat seputar teknologi informasi, <br /> pengembangan sistem, serta pengalaman saya.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             {/* Jika ada page blog semua tulisan, href bisa diarahkan ke sana */}
            <Link href="#blog" className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300">
              Lihat Semua Artikel <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioData.blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/60 shadow-lg border border-zinc-200 dark:border-white/5 transition-all hover:-translate-y-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-white/10"
            >
              <div className="p-8">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-zinc-500">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                  <span>{blog.date}</span>
                </div>
                <h4 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  <Link href={`#blog/${blog.slug}`} className="before:absolute before:inset-0">
                    {blog.title}
                  </Link>
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
              </div>
              <div className="px-8 pb-8 mt-auto">
                 <span className="flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    Baca Selengkapnya <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                 </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
