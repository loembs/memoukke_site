import { motion } from "framer-motion";
import heroOffice from "@/assets/hero-office.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroOffice})` }}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8">
            <div className="h-px w-20 bg-background/40 mx-auto mb-8" />
            <p className="text-xs tracking-[0.4em] uppercase text-background/70 font-medium">
              {t.hero.tagline}
            </p>
            <div className="h-px w-20 bg-background/40 mx-auto mt-8" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight text-background tracking-wide"
        >
          ME<span className="bg-[linear-gradient(to_right,white_50%,black_50%)] bg-clip-text text-transparent">M</span>OUKKE
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.15em]">
            AS CONSEIL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-background/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-background text-foreground font-medium tracking-widest text-xs uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {t.hero.ctaServices}
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-3.5 border border-background/40 text-background font-medium tracking-widest text-xs uppercase transition-colors hover:bg-background/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {t.hero.ctaContact}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
