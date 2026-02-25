import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            className={`h-10 md:h-28 w-auto object-contain object-left transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["À propos", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item === "À propos" ? "about" : item === "Services" ? "services" : "contact"}`}
              className={`text-xs tracking-widest uppercase transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/70 hover:text-background"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
