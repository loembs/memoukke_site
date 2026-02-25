import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { key: "about" as const, href: "about" },
  { key: "services" as const, href: "services" },
  { key: "contact" as const, href: "contact" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = scrolled
    ? "text-muted-foreground hover:text-foreground"
    : "text-background/70 hover:text-background";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0 min-w-0 max-w-[55%] md:max-w-none">
          <img
            src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1771944109/logo_memoukke_noir-removebg-preview_mpnw91.png"
            alt="MEMOUKKE AS CONSEIL"
            className={`h-16 md:h-28 w-auto object-contain object-left transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center border border-current/30 rounded-sm px-2 py-1 md:border-0 md:px-0 md:py-0 md:bg-transparent">
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={`text-xs tracking-widest uppercase transition-colors ${linkClass} ${locale === "fr" ? "font-semibold opacity-100" : "opacity-60"}`}
              aria-pressed={locale === "fr"}
              aria-label="Français"
            >
              FR
            </button>
            <span className="mx-1.5 md:mx-2 opacity-50">/</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`text-xs tracking-widest uppercase transition-colors ${linkClass} ${locale === "en" ? "font-semibold opacity-100" : "opacity-60"}`}
              aria-pressed={locale === "en"}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ key, href }) => (
              <a
                key={key}
                href={`#${href}`}
                className={`text-xs tracking-widest uppercase transition-colors ${linkClass}`}
              >
                {t.nav[key]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
