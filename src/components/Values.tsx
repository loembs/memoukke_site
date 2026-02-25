import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CORNER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const Values = () => {
  const { t } = useLanguage();
  const values = t.values.items;

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div
        className="absolute top-0 left-0 w-24 h-32 md:w-32 md:h-40 opacity-80"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 w-24 h-32 md:w-32 md:h-40 opacity-80"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div className="container relative mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="h-px w-12 bg-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t.values.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6 rounded-sm border border-transparent hover:border-border/50 bg-transparent hover:bg-muted/30 transition-colors cursor-default"
            >
              <p className="text-5xl font-display font-bold text-foreground/15 mb-4">
                0{index + 1}
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
