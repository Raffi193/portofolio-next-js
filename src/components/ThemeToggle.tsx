"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 shadow-sm transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
      aria-label="Toggle Theme"
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={false}
          animate={{ scale: isDark ? 0 : 1, rotate: isDark ? -90 : 0, opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ scale: isDark ? 1 : 0, rotate: isDark ? 0 : 90, opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      </div>
    </button>
  );
}
