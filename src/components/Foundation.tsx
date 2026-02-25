import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FOUNDER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1772015692/Ali_Soumar%C3%A9_ocgppv.jpg";

const Founder = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="h-px w-12 bg-foreground mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ali Soumaré
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.founder.intro1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.founder.intro2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.founder.intro3}
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden bg-background border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={FOUNDER_IMAGE}
                alt={t.founder.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 border border-background/40 mix-blend-multiply pointer-events-none" />
            </motion.div>

            <motion.div
              className="border border-border p-6 bg-background"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                {t.founder.visionLabel}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {t.founder.visionText}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-t border-foreground pt-4">
                <p className="text-3xl font-display font-bold text-foreground">
                  15+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.founder.stat1}
                </p>
              </div>
              <div className="border-t border-foreground pt-4">
                <p className="text-3xl font-display font-bold text-foreground">
                  France & Afrique
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.founder.stat2}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;

