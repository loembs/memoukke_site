import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CORNER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const PARTNER_LOGOS = [
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1783006556/sangomar_ljtzxq.jpg",
  "https://res.cloudinary.com/dprbhsvxl/image/upload/v1781632012/Logo-SHERPA-2025_00001-e1767651938752_b15bm2.png",
  "https://res.cloudinary.com/dprbhsvxl/image/upload/v1781632012/5redlogo_mrn3ru.jpg",
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1773754281/andalblacklog_xd0cms.jpg",
  "https://res.cloudinary.com/dprbhsvxl/image/upload/v1781632012/WhatsApp_Image_2026-06-04_at_16.37.13_dlwys2.jpg",
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1783005967/3_6_lsqcxb.png",
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1783529435/WhatsApp_Image_2026-07-07_at_18.17.52_r4dkr2.jpg",
];

const Partners = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {PARTNER_LOGOS.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-2"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background flex items-center justify-center shadow-lg overflow-hidden ring-4 ring-background/10 hover:ring-background/30 transition-all duration-300">
                      <img
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        className="w-full h-full object-contain p-3"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {PARTNER_LOGOS.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-background"
                    : "w-2 bg-background/30 hover:bg-background/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-background/50 text-sm mt-12 max-w-lg mx-auto leading-relaxed text-justify"
        >
          {t.partners.footer}
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
