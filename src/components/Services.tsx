import { motion } from "framer-motion";
import { Shield, Users, Globe, Lightbulb, Lock, Target } from "lucide-react";

const CORNER_IMAGE =
 "https://res.cloudinary.com/dlna2kuo1/image/upload/v1771948776/IMG_2804_eu9z6s-removebg-preview_zuxmha.png";

const services = [
  {
    icon: Target,
    title: "Stratégie politique",
    description: "Conseil stratégique pour les dirigeants politiques, campagnes et positionnement.",
  },
  {
    icon: Users,
    title: "Affaires publiques",
    description: "Relations institutionnelles, lobbying et dialogue avec les décideurs publics.",
  },
  {
    icon: Globe,
    title: "Communication",
    description: "Stratégies de communication sur-mesure, gestion d'image et relations médias.",
  },
  {
    icon: Lightbulb,
    title: "Conseil économique",
    description: "Accompagnement des projets entrepreneuriaux et développement économique.",
  },
  {
    icon: Shield,
    title: "Gestion de crise",
    description: "Anticipation, gestion et sortie de crise avec réactivité et confidentialité.",
  },
  {
    icon: Lock,
    title: "Philanthropie",
    description: "Structuration et accompagnement de projets philanthropiques à fort impact.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-muted overflow-hidden">
      {/* Coins décoratifs 
      <div
        className="absolute top-0 right-0 w-24 h-32 md:w-32 md:h-40 opacity-90"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-24 h-32 md:w-32 md:h-40 opacity-90"
        aria-hidden
      >
        <img
          src={CORNER_IMAGE}
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
      </div>*/}
      <div className="container relative mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="h-px w-12 bg-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nos domaines d'intervention
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un écosystème d'experts mobilisable en fonction de vos besoins et objectifs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -6 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-background border border-border rounded-sm shadow-sm hover:shadow-gold cursor-default"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <service.icon className="w-7 h-7 text-foreground mb-5" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
