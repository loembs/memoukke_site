import { motion } from "framer-motion";

const ABOUT_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1772016380/IMG_2808_vl1y2s.jpg";

const About = () => {
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
                alt="Équipe de consultants en réunion stratégique"
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
              Une expertise forgée par l'expérience
            </h2>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Forts d'une expertise politique et entrepreneuriale, nous proposons aux dirigeants
                engagés en France et en Afrique une offre d'accompagnement stratégique et
                opérationnel, ponctuel et/ou récurrent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cet accompagnement repose sur une expérience de plus de <strong className="text-foreground">15 ans</strong> dans le monde politique et
                auprès de décideurs publics et privés de premier plan. Il s'appuie sur des réseaux
                construits et animés sur cette période, et repose sur une vision ambitieuse, des valeurs
                d'ouverture et une ambition partagée.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <motion.div
                  className="border-t border-foreground pt-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-4xl font-display font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">Années d'expérience</p>
                </motion.div>
                <motion.div
                  className="border-t border-foreground pt-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-4xl font-display font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground mt-1">Continents</p>
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
