import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ResumeSection from "@/components/ResumeSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectSection />
      <ResumeSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
