"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "#about" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#070913]/80 py-4 shadow-lg backdrop-blur-md border-b border-zinc-200 dark:border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 sm:px-12 md:px-14 lg:px-14">
          
          <Link 
            href="/" 
            className="text-2xl font-extrabold tracking-tighter text-zinc-900 dark:text-white transition-opacity hover:opacity-80"
          >
            
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <ThemeToggle />
              <Link
                href="#contact"
                className="rounded-full border border-zinc-300 dark:border-white/20 bg-zinc-100 dark:bg-white/5 px-5 py-2 text-sm font-semibold text-zinc-900 dark:text-white transition-all hover:bg-zinc-200 dark:hover:bg-white dark:hover:text-zinc-950"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] flex flex-col bg-white/95 dark:bg-[#070913]/95 px-6 py-8 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                Raffi<span className="text-blue-500">.</span>
              </Link>
              <button
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <div className="mt-20 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}