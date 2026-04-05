"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Am Samstag den Notdienst gerufen und noch am selben Tag super schnell, kompetent, freundlich und hilfsbereit UND mit Corona Schutzmaske unseren Terrassen Rollladen repariert. Sehr gerne wieder!",
    name: "RaMa",
    role: "Google Rezension",
  },
  {
    text: "Klare Weiterempfehlung. Unser Rollladen hat am Abend nicht mehr funktioniert. Haben hier angerufen, sofort ran gegangen und der Techniker ist innerhalb von 30 Min. gekommen.",
    name: "DiGastro",
    role: "Google Rezension",
  },
  {
    text: "Nach der ersten Kontaktaufnahme und Begutachtung vor Ort wurde alles zum genannten Termin erledigt. Ein 4-köpfiges Team hat sich der Sache dann angenommen.",
    name: "Muhammet Öztürk",
    role: "Google Rezension",
  },
  {
    text: "Richtig toller Service. Einfache, schnelle und hilfreiche Kommunikation, Terminabsprache (am selben Tag!) und richtig tolle Monteure.",
    name: "Franziska Behlert",
    role: "Google Rezension",
  },
  {
    text: "Die Beratung war fachlich kompetent und für Laien verständlich. Die Arbeiten wurden zügig und sorgfältig ausgeführt. Sehr empfehlenswert!",
    name: "Andreas Weger",
    role: "Google Rezension",
  },
  {
    text: "Am Montag eine Beanstandung gemeldet und am 21.12. wurde diese zu meiner vollsten Zufriedenheit beseitigt. Die Monteure waren sehr nett.",
    name: "Ralf Reimann",
    role: "Google Rezension",
  },
  {
    text: "Absolut zuverlässig, die Mitarbeiter sind freundlich. TOP Arbeit.",
    name: "Claudia Konermann",
    role: "Google Rezension",
  },
  {
    text: "Um 11 Uhr angerufen weil unser Rollo kaputt war, um 15 Uhr waren die Jungs da, und um 15:30 war alles erledigt. Super Service!",
    name: "Leony Kiel",
    role: "Google Rezension",
  },
  {
    text: "Sehr schnelle Terminvereinbarung, kompetente Beratung und Service. Vielen Dank und immer wieder gerne!",
    name: "Christoph Wetz",
    role: "Google Rezension",
  },
  {
    text: "Schnell einen Termin bekommen, pünktlich gekommen und die Arbeiten schnell und perfekt erledigt! Sehr guter Service!",
    name: "Ina Mertens",
    role: "Google Rezension",
  },
  {
    text: "Bin sehr zufrieden!!! Schnell einen Termin bekommen und die Monteure waren sehr nett. Jeder Zeit wieder",
    name: "Jenny xxx",
    role: "Google Rezension",
  },
  {
    text: "Ich kann nur sagen, ein tolles Unternehmen, fachlich kompetent und äußerst freundlich, sehr gute Arbeit- absolut empfehlenswert!",
    name: "Annett Schneider",
    role: "Google Rezension",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="p-6 rounded-2xl border border-[#0a0a0a]/10 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-[340px] flex-shrink-0">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#dc2626] text-[#dc2626]" />
      ))}
    </div>
    <p className="text-[#0a0a0a]/80 text-sm leading-relaxed mb-4 line-clamp-4">
      &ldquo;{testimonial.text}&rdquo;
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <div className="w-9 h-9 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white font-bold text-sm">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#0a0a0a] leading-tight">
          {testimonial.name}
        </p>
        <p className="text-xs text-[#0a0a0a]/50">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({
  items,
  direction = "left",
  duration = 40,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  duration?: number;
}) => {
  // Verdopple die Items für nahtlose Schleife
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden group">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ width: "max-content" }}
      >
        {duplicated.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, 6);
  const secondRow = testimonials.slice(6, 12);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Kundenstimmen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a]">
            Das sagen unsere Kunden
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mt-6 mb-6 rounded-full" />
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#dc2626] text-[#dc2626]"
                />
              ))}
            </div>
            <span className="text-[#0a0a0a] font-bold text-lg">4,8</span>
            <span className="text-[#0a0a0a]/60 text-sm">
              aus 58 Google Bewertungen
            </span>
          </div>
        </motion.div>
      </div>

      {/* Horizontales Marquee - 2 Reihen in Gegenrichtung */}
      <div className="relative">
        <div className="flex flex-col gap-6">
          <MarqueeRow items={firstRow} direction="left" duration={50} />
          <MarqueeRow items={secondRow} direction="right" duration={55} />
        </div>

        {/* Gradient fade an den Seiten */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
