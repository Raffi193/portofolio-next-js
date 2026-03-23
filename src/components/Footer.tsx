import Link from "next/link";
import { portfolioData } from "@/data/portofolio"; // Sesuaikan jika ejaan file Anda "portfolio" atau "portofolio"

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Mengambil tahun saat ini secara otomatis

  return (
    // border-white/5 memberikan garis abu-abu sangat tipis di bagian atas
    <footer className="border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#070913] py-4 ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-12 md:px-14 lg:px-24">
        
        {/* Bagian Kiri: Logo & Copyright */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white transition-opacity hover:opacity-80">
            Software Developer<span className="text-blue-600 dark:text-blue-500"></span>
          </Link>
          <p className="text-sm font-medium text-zinc-500">
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

        {/* Bagian Kanan: Tautan Sosial & Teknologi */}
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              GitHub
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              Email
            </a>
          </div>
         
        </div>

      </div>
    </footer>
  );
}