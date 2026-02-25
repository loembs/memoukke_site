import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ABOUT_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1772016380/IMG_2808_vl1y2s.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                src={ABOUT_IMAGE}
                alt={t.about.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="h-px w-12 bg-foreground mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.p2} <strong className="text-foreground">15 {t.about.years}</strong> {t.about.p2b}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <motion.div
                  className="border-t border-foreground pt-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-4xl font-display font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.about.stat1}</p>
                </motion.div>
                <motion.div
                  className="border-t border-foreground pt-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-4xl font-display font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.about.stat2}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
