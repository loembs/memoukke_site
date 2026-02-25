import { motion } from "framer-motion";

const FOUNDER_IMAGE =
  "https://res.cloudinary.com/dlna2kuo1/image/upload/v1772015692/Ali_Soumar%C3%A9_ocgppv.jpg";

const Founder = () => {
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
              À l&apos;origine de MEMOUKKE AS CONSEIL, un parcours mêlant engagement
              politique, conseil stratégique et accompagnement d&apos;acteurs publics
              et privés, en France comme sur le continent africain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le fondateur met au service des dirigeants une expérience de terrain,
              une compréhension fine des enjeux institutionnels et une approche
              résolument opérationnelle, tournée vers les résultats.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette vision s&apos;incarne dans une exigence d&apos;excellence, de
              confidentialité et de loyauté, au service de trajectoires ambitieuses
              et durables.
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
                alt="Portrait du fondateur de MEMOUKKE AS CONSEIL"
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
                Vision
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Faire de MEMOUKKE AS CONSEIL un partenaire stratégique de référence
                pour les dirigeants qui souhaitent conjuguer influence, impact et
                responsabilité.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-t border-foreground pt-4">
                <p className="text-3xl font-display font-bold text-foreground">
                  15+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  années d&apos;expérience cumulée
                </p>
              </div>
              <div className="border-t border-foreground pt-4">
                <p className="text-3xl font-display font-bold text-foreground">
                  France & Afrique
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  ancrage des missions et réseaux
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

