import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CORNER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="relative py-20 bg-muted border-t border-border overflow-hidden">
      <div
        className="absolute top-0 right-0 w-20 h-24 md:w-24 md:h-32 opacity-75"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-20 h-24 md:w-24 md:h-32 opacity-75"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
      </div>
      <div className="container relative mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="h-px w-12 bg-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            {t.footer.title}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t.footer.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <motion.a
            href="mailto:contact@memoukke-conseil.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-sm">contact@memoukke-conseil.com</span>
          </motion.a>
          <motion.div
            className="flex items-center gap-3 text-muted-foreground"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <MapPin className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-sm">{t.footer.location}</span>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col items-center gap-4 text-center">
          <motion.a
            href="#"
            className="inline-block max-w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1771944109/logo_memoukke_noir-removebg-preview_mpnw91.png"
              alt="MEMOUKKE AS CONSEIL"
              className="h-17 md:h-20 w-auto object-contain"
            />
          </motion.a>
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} MEMOUKKE AS CONSEIL. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
