import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORNER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const partnerCategories = [
  {
    name: "Communication",
    partners: [
      { name: "Partenaire communication 1",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire communication 2",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire communication 3",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
    ],
  },
  {
    name: "Politique",
    partners: [
      { name: "Partenaire politique 1",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire politique 2",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire politique 3",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
    ],
  },
  {
    name: "Économie",
    partners: [
      { name: "Partenaire économie 1",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire économie 2",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire économie 3",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
    ],
  },
  {
    name: "Finances",
    partners: [
      { name: "Partenaire finances 1",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire finances 2",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire finances 3",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
    ],
  },
  {
    name: "Éducation",
    partners: [
      { name: "Partenaire éducation 1",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire éducation 2",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire éducation 3",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
    ],
  },
  {
    name: "Gestion de crise",
    partners: [
      { name: "Partenaire gestion de crise 1",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire gestion de crise 2",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
      { name: "Partenaire gestion de crise 3",
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png"
       },
    ],
  },
];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const currentCategory =
    activeCategory &&
    partnerCategories.find((category) => category.name === activeCategory);

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
            Notre réseau de partenaires
          </h2>
          <p className="text-background/60 max-w-xl mx-auto">
            Un écosystème de collaborateurs experts, présents dans plusieurs pays africains, mobilisable en fonction de vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partnerCategories.map((category, index) => {
            const isActive = activeCategory === category.name;
            const isDimmed = activeCategory !== null && !isActive;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() =>
                  setActiveCategory((prev) =>
                    prev === category.name ? null : category.name
                  )
                }
                className={`border p-4 md:p-8 text-center transition-all duration-300 cursor-pointer group overflow-hidden min-w-0 ${
                  isActive
                    ? "bg-background border-background/40"
                    : isDimmed
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
                key={currentCategory.name}
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
          Composé de partenaires de confiance, cet écosystème offre une grande agilité dans la conception de stratégies sur-mesure.
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
