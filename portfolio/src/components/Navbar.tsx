"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Terminal, FolderGit2, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <motion.header initial={{ y: -72 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-wider text-cyan-400">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span>KIMERA.DEV</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a key={link.name} href={link.href} whileHover={{ y: -2 }} className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button whileTap={{ scale: 0.9 }} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300 hover:text-cyan-400">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }} className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} whileHover={{ x: 4 }} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 py-2">
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
}
