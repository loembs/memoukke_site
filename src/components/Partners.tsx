import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CORNER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const PARTNER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const Partners = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(true);

  const categories = t.partners.categories;
  const partnerNamesByIndex = t.partners.partnerNamesByIndex;

  const partnerCategories = categories.map((name, index) => ({
    name,
    partners: partnerNamesByIndex[index].map((partnerName) => ({
      name: partnerName,
      image: PARTNER_IMAGE,
    })),
  }));

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
    const handler = () => setCanHover(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const currentCategory =
    activeIndex !== null ? partnerCategories[activeIndex] : null;

  return (
    <section className="relative py-24 md:py-32 bg-foreground text-background overflow-hidden">
      <div
        className="absolute top-0 left-0 w-24 h-28 md:w-28 md:h-36 opacity-70"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      <div
        className="absolute bottom-0 right-0 w-24 h-28 md:w-28 md:h-36 opacity-70"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      <div className="container relative mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="h-px w-12 bg-background/30 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t.partners.title}
          </h2>
          <p className="text-background/60 max-w-xl mx-auto">
            {t.partners.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partnerCategories.map((category, index) => {
            const isActive = activeIndex === index;
            const isDimmed = activeIndex !== null && activeIndex !== index;

            return (
              <motion.div
                key={`${category.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setActiveIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setActiveIndex(null);
                  }
                }}
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? null : index))
                }
                className={`border p-4 md:p-8 text-center transition-all duration-300 cursor-pointer group overflow-hidden min-w-0 ${
                  isActive
                    ? "bg-background border-background/40"
                    : isDimmed && canHover
                    ? "opacity-0 pointer-events-none"
                    : "border-background/15 hover:bg-background hover:border-background/30"
                }`}
              >
                <p
                  className={`text-sm font-medium tracking-normal md:tracking-widest uppercase transition-colors duration-300 break-words overflow-hidden min-w-0 ${
                    isActive
                      ? "text-foreground"
                      : isDimmed
                      ? "text-background/40"
                      : "text-background/80 group-hover:text-foreground"
                  }`}
                >
                  {category.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 min-h-[140px]">
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={`${currentCategory.name}-${activeIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center justify-items-center"
              >
                {currentCategory.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shadow-md">
                      <span className="text-xs font-semibold text-foreground text-center px-2">
                        {partner.name[0]}
                      </span>
                    </div>
                    <p className="text-xs text-background/80 text-center">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-background/50 text-sm mt-12 max-w-lg mx-auto leading-relaxed"
        >
          {t.partners.footer}
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
