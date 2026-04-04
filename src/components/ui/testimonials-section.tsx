"use client";
import React from "react";
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
  <div className="p-6 rounded-2xl border border-[#1a365d]/10 bg-white shadow-lg max-w-sm w-full">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#dc2626] text-[#dc2626]" />
      ))}
    </div>
    <p className="text-[#1a365d]/80 text-sm leading-relaxed mb-4">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#1a365d] flex items-center justify-center text-white font-bold text-xs">
        {testimonial.name.charAt(0)}
      </div>
      <div className="text-xs font-medium text-[#1a365d]">
        {testimonial.name}
      </div>
    </div>
  </div>
);

const TestimonialsColumn = ({
  testimonialsData,
  duration = 15,
}: {
  testimonialsData: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...new Array(2)].fill(0).map((_, index) =>
          testimonialsData.map((testimonial, i) => (
            <React.Fragment key={`${index}-${i}`}>
              <TestimonialCard testimonial={testimonial} />
            </React.Fragment>
          )),
        )}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  const firstColumn = testimonials.slice(0, 4);
  const secondColumn = testimonials.slice(4, 8);
  const thirdColumn = testimonials.slice(8, 12);

  return (
    <section className="py-16 bg-white relative">
      {/* Header - outside gradient */}
      <div className="container mx-auto px-6 mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a365d] text-center">
            Das sagen unsere Kunden
          </h2>
        </motion.div>
      </div>

      {/* Animated Testimonials - 3 columns with different speeds */}
      <div className="relative">
        <div className="flex justify-center gap-6 px-6 overflow-hidden h-[500px]">
          <TestimonialsColumn testimonialsData={firstColumn} duration={20} />
          <div className="hidden md:block">
            <TestimonialsColumn testimonialsData={secondColumn} duration={25} />
          </div>
          <div className="hidden lg:block">
            <TestimonialsColumn testimonialsData={thirdColumn} duration={22} />
          </div>
        </div>

        {/* Gradient fade only at top and bottom of cards area */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
