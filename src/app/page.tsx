"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Star,
  Clock,
  Zap,
  FileCheck,
  UserCheck,
  Clock4,
  Users,
  Sparkles,
  CalendarCheck,
  Euro,
  Award,
  Wrench,
  TreePine,
  Cpu,
  ShieldAlert,
  Lock,
  Layers,
  Timer,
} from "lucide-react";
import { ExpandingPanels } from "@/components/ui/expanding-panels";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { GridBackground } from "@/components/ui/grid-background";
import NavHeader from "@/components/ui/nav-header";
import TestimonialsSection from "@/components/ui/testimonials-section";
import { NumberTicker } from "@/components/ui/number-ticker";

// Animated Cycling Text Component
const cyclingWords = ["Rollläden", "Markisen", "Sonnenschutz", "Jalousien"];

function CyclingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cyclingWords.length);
        setDisplayIndex((prev) => (prev + 1) % cyclingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-xl md:text-2xl text-[#dc2626] font-bold transition-opacity duration-400 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {cyclingWords[currentIndex]}
    </span>
  );
}

// Logo Component
function Logo() {
  return (
    <div className="relative w-20 h-20">
      <Image
        src="/logo.svg"
        alt="Meisterwerk Berlin Logo"
        fill
        className="object-contain"
        sizes="80px"
      />
    </div>
  );
}

// Hero Section - Clean white with subtle shadows
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <GridBackground className="absolute inset-0 pt-20" />
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* LEFT SIDE: Text - vertically centered */}
          <div className="text-[#0a0a0a] flex flex-col justify-center py-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight tracking-tight text-[#0a0a0a]">
              Rollladen-Profis
              <span className="block text-[#dc2626]">für Berlin</span>
            </h1>
            <div className="mb-6 flex items-center">
              <span className="text-xl md:text-2xl text-[#0a0a0a]/70 mr-2">
                Experten für
              </span>
              <CyclingText />
            </div>
            <p className="text-xl md:text-2xl text-[#0a0a0a]/70 mb-6 leading-relaxed">
              Rollladen-Reparatur vor Ort, Holzrollläden, Elektroantrieb,
              Einbruchschutz und Markisen – alles aus einer Hand. Reparatur oft
              noch am gleichen Tag. Faire Preise, eigene Monteure, keine
              Subunternehmer.
            </p>
            <ul className="text-lg text-[#0a0a0a]/70 mb-10 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#dc2626] rounded-full"></span>
                Schnelle Hilfe bei Notfällen - 24/7 erreichbar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#dc2626] rounded-full"></span>
                Faire & transparente Preise ohne versteckte Kosten
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#dc2626] rounded-full"></span>
                Professionelle Beratung vor Ort
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:03066774463" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 relative bg-[#dc2626] cursor-pointer border-2 border-[#dc2626] overflow-hidden rounded-[30px] text-white transition-all duration-500 ease-in-out hover:bg-white group">
                  <Phone className="w-5 h-5 mr-2 text-white group-hover:text-[#dc2626]" />
                  <span className="text-base font-bold text-white group-hover:text-[#dc2626]">
                    Jetzt Anrufen
                  </span>
                </button>
              </a>
              <Link href="#kontakt" className="w-full sm:w-auto">
                <button className="button-blue w-full sm:w-auto flex items-center justify-center px-8 py-4 relative bg-transparent cursor-pointer border-2 border-[#0a0a0a] overflow-hidden rounded-[30px] text-[#0a0a0a] transition-all duration-500 ease-in-out hover:box-shadow-[1px_1px_200px_rgba(26,54,93,0.5)] hover:text-white group">
                  <span className="btn-txt text-base font-bold relative z-10 transition-all duration-500 group-hover:text-white">
                    Kontakt aufnehmen
                  </span>
                  <style jsx>{`
                    .button-blue::after {
                      content: "";
                      position: absolute;
                      left: 0;
                      top: 0;
                      transition: all 0.5s ease-in-out;
                      background-color: #0a0a0a;
                      border-radius: 30px;
                      visibility: hidden;
                      height: 10px;
                      width: 10px;
                      z-index: 0;
                    }
                    .button-blue:hover::after {
                      visibility: visible;
                      transform: scale(100) translateX(2px);
                    }
                  `}</style>
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-[#0a0a0a]/10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#dc2626]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0a0a0a] leading-none">
                    <NumberTicker value={15} />+
                  </p>
                  <p className="text-xs text-[#0a0a0a]/60 mt-1">
                    Jahre Erfahrung
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="w-5 h-5 text-[#dc2626]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0a0a0a] leading-none">
                    <NumberTicker value={1200} />+
                  </p>
                  <p className="text-xs text-[#0a0a0a]/60 mt-1">
                    Aufträge erledigt
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-[#dc2626] fill-[#dc2626]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0a0a0a] leading-none">
                    <NumberTicker value={4.8} decimals={1} />★
                  </p>
                  <p className="text-xs text-[#0a0a0a]/60 mt-1">
                    Google Bewertung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Accordion */}
          <div className="h-[400px] lg:h-[450px]">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-[#0a0a0a]/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#0a0a0a]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Leistungen Section
function LeistungenSection() {
  const leistungen = [
    {
      icon: Wrench,
      title: "Rollladen-Reparatur",
      text: "Wir reparieren Rollläden so gut wie immer erfolgreich vor Ort. Ob Motor nur summt, rattert oder sich gar nichts tut – oft erkennen wir das Problem schon am Telefon.",
    },
    {
      icon: TreePine,
      title: "Holz-Rollläden",
      text: "Holz ist stabil, einbruchhemmend und zeitlos schön. Wir reparieren und überholen Ihre Holz-Rollläden – inklusive Gurtwechsel und Austausch von Zugbändern.",
    },
    {
      icon: Cpu,
      title: "Elektroantrieb",
      text: "Wir rüsten Ihre Rollläden auf Motorbetrieb um – auch zeitgesteuert für maximalen Komfort. Schluss mit schwergängigen Gurten und abgerissenen Wicklern.",
    },
    {
      icon: ShieldAlert,
      title: "Einbruchschaden",
      text: "Langjährige Erfahrung mit Einbruchschadenbeseitigung. Auf Wunsch rechnen wir direkt mit Ihrer Versicherung ab – Sie haben eine Sorge weniger.",
    },
    {
      icon: Lock,
      title: "Hochschiebesicherung",
      text: "Effektiver Einbruchschutz: Sicherungen werden auf die Wickelwelle des Rollladens gesteckt und verhindern das Hochschieben von außen.",
    },
    {
      icon: Layers,
      title: "Rollladenpanzer",
      text: "Doppelwandige, dicklackbeschichtete Aluminiumprofile mit PVC-Gleitern. Komplett zusammengebaut und einbaufertig geliefert – in Wunschfarbe.",
    },
    {
      icon: Timer,
      title: "Schnelligkeit",
      text: "Bei Ersatzteilmangel improvisieren wir mit Erfahrung. Reparatur, Lieferung oder Elektro-Umrüstung – auf Wunsch noch am gleichen Tag.",
    },
  ];

  return (
    <section id="leistungen" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-[0.2em]">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-3 mb-4 tracking-tight">
            Rollladen-Service aus einer Hand
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Von der schnellen Reparatur bis zur kompletten Neumontage – wir sind
            Ihr Fachbetrieb für alles rund um Rollläden in Berlin.
          </p>
        </div>

        <ExpandingPanels items={leistungen} />
      </div>
    </section>
  );
}

// Notdienst Banner
function NotdienstBanner() {
  return (
    <section className="bg-[#dc2626] py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                24/7 Notdienst
              </h3>
              <p className="text-white/90">Sofortige Hilfe bei Notfällen!</p>
            </div>
          </div>
          <a href="tel:03066774463">
            <Button
              size="lg"
              className="bg-white text-[#dc2626] hover:bg-gray-100 font-bold text-lg px-10 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              030 66 77 44 63
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FaqSection() {
  const faqs = [
    {
      frage: "Was kostet eine Rollladen-Reparatur?",
      antwort:
        "Die Kosten hängen vom Schaden ab. Ein Gurtwechsel ist günstiger als ein Motortausch. Wir erstellen Ihnen ein kostenloses, transparentes Angebot – oft können wir den Preis schon nach einem kurzen Telefonat einschätzen.",
    },
    {
      frage: "Wie schnell könnt ihr vorbeikommen?",
      antwort:
        "Bei Notfällen sind wir rund um die Uhr erreichbar und versuchen noch am selben Tag vor Ort zu sein. Für normale Termine vereinbaren wir meist innerhalb von 1-3 Werktagen einen Besuch.",
    },
    {
      frage: "Rechnet ihr direkt mit der Versicherung ab?",
      antwort:
        "Ja. Bei Einbruchschäden oder versicherten Schäden übernehmen wir auf Wunsch die komplette Abrechnung mit Ihrer Versicherung – Sie haben damit nichts zu tun und eine Sorge weniger.",
    },
    {
      frage: "Arbeitet ihr auch mit eigenen Monteuren?",
      antwort:
        "Ausschließlich. Wir setzen keine Subunternehmer ein – alle Monteure sind fest bei uns angestellt und haben langjährige Erfahrung mit Rollläden, Markisen und Elektroantrieben.",
    },
    {
      frage: "Repariert ihr auch alte Holzrollläden?",
      antwort:
        "Ja, das ist eine unserer Spezialitäten. Holzrollläden sind stabil und zeitlos schön – wir überholen sie komplett inklusive Gurtwechsel, Zugbändern und Lack-Auffrischung.",
    },
    {
      frage: "Was passiert, wenn das Ersatzteil nicht verfügbar ist?",
      antwort:
        "Dann improvisieren wir mit Erfahrung. In über 15 Jahren haben wir so gut wie jeden Rollladen-Typ gesehen – oft finden wir pragmatische Lösungen auch ohne Original-Ersatzteil.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-[0.2em]">
            Häufige Fragen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-3 mb-4 tracking-tight">
            Wir beantworten gerne
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mb-6 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={index} frage={faq.frage} antwort={faq.antwort} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#dc2626]/30 bg-gradient-to-br from-[#dc2626]/5 to-transparent shadow-md"
          : "border-gray-200 bg-white hover:border-[#0a0a0a]/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <span className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? "text-[#dc2626]" : "text-[#0a0a0a]"}`}>
          {frage}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#dc2626] text-white rotate-45" : "bg-[#0a0a0a]/5 text-[#0a0a0a]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-600 leading-relaxed">{antwort}</p>
        </div>
      </div>
    </div>
  );
}

// Galerie Section (Vorher/Nachher)
function GalerieSection() {
  const projekte = [
    {
      title: "Rollladen Motortausch",
      ort: "Charlottenburg",
      vorher: "https://picsum.photos/seed/meisterwerk-vorher-1/800/600",
      nachher: "https://picsum.photos/seed/meisterwerk-nachher-1/800/600",
    },
    {
      title: "Holzrollladen restauriert",
      ort: "Kreuzberg",
      vorher: "https://picsum.photos/seed/meisterwerk-vorher-2/800/600",
      nachher: "https://picsum.photos/seed/meisterwerk-nachher-2/800/600",
    },
    {
      title: "Gurtwechsel & Revision",
      ort: "Pankow",
      vorher: "https://picsum.photos/seed/meisterwerk-vorher-3/800/600",
      nachher: "https://picsum.photos/seed/meisterwerk-nachher-3/800/600",
    },
    {
      title: "Einbruchschaden beseitigt",
      ort: "Neukölln",
      vorher: "https://picsum.photos/seed/meisterwerk-vorher-4/800/600",
      nachher: "https://picsum.photos/seed/meisterwerk-nachher-4/800/600",
    },
  ];

  return (
    <section id="galerie" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-[0.2em]">
            Unsere Arbeit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-3 mb-4 tracking-tight">
            Vorher & Nachher
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Ein paar Beispiele aus unserem Alltag – Bild antippen bzw. mit der
            Maus rüberfahren, um das Ergebnis zu sehen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projekte.map((projekt) => (
            <BeforeAfterCard key={projekt.title} projekt={projekt} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({
  projekt,
}: {
  projekt: { title: string; ort: string; vorher: string; nachher: string };
}) {
  const [showNachher, setShowNachher] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowNachher((v) => !v)}
      onMouseEnter={() => setShowNachher(true)}
      onMouseLeave={() => setShowNachher(false)}
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/5] bg-gray-100 w-full text-left cursor-pointer"
    >
      {/* Nachher (Base Layer) */}
      <Image
        src={projekt.nachher}
        alt={`${projekt.title} - Nachher`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />

      {/* Vorher (Top Layer - fades out when showNachher) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{ opacity: showNachher ? 0 : 1 }}
      >
        <Image
          src={projekt.vorher}
          alt={`${projekt.title} - Vorher`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Badge "Vorher" / "Nachher" */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="bg-white/95 backdrop-blur-sm text-[#0a0a0a] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md transition-opacity duration-500"
          style={{ opacity: showNachher ? 0 : 1 }}
        >
          Vorher
        </span>
        <span
          className="absolute top-0 left-0 bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md transition-opacity duration-500"
          style={{ opacity: showNachher ? 1 : 0 }}
        >
          Nachher
        </span>
      </div>

      {/* Tap-Hinweis nur auf Mobile, nur wenn Vorher sichtbar */}
      <div
        className="md:hidden absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1.5 rounded-full transition-opacity duration-500"
        style={{ opacity: showNachher ? 0 : 1 }}
      >
        Tippen für Nachher
      </div>

      {/* Gradient + Info */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pointer-events-none">
        <h3 className="text-white font-bold text-base mb-0.5 drop-shadow">
          {projekt.title}
        </h3>
        <p className="text-white/80 text-xs drop-shadow">{projekt.ort}</p>
      </div>
    </button>
  );
}

// Ablauf Section
function AblaufSection() {
  const schritte = [
    {
      nummer: "01",
      title: "Anruf oder Nachricht",
      text: "Sie rufen uns an oder schreiben uns – oft können wir Ihr Problem schon am Telefon einschätzen.",
    },
    {
      nummer: "02",
      title: "Kostenloses Angebot",
      text: "Sie erhalten ein transparentes Angebot. Ohne versteckte Kosten, ohne Verpflichtung.",
    },
    {
      nummer: "03",
      title: "Termin vor Ort",
      text: "Wir kommen pünktlich zum vereinbarten Termin – auf Wunsch noch am gleichen Tag.",
    },
    {
      nummer: "04",
      title: "Reparatur fertig",
      text: "Saubere Arbeit, fertige Rechnung – und auf Wunsch direkte Abrechnung mit Ihrer Versicherung.",
    },
  ];

  return (
    <section id="ablauf" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-[0.2em]">
            So läuft&apos;s ab
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-3 mb-4 tracking-tight">
            In 4 Schritten zur Reparatur
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Klar, einfach, transparent – so arbeiten wir von der ersten Anfrage
            bis zur fertigen Reparatur.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0a0a0a]/15 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {schritte.map((schritt) => (
              <div key={schritt.nummer} className="relative flex flex-col items-center text-center group">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-[#0a0a0a]/10 flex items-center justify-center shadow-lg group-hover:border-[#dc2626] group-hover:shadow-[#dc2626]/20 transition-all duration-300">
                    <span className="text-3xl font-bold text-[#0a0a0a] group-hover:text-[#dc2626] transition-colors duration-300">
                      {schritt.nummer}
                    </span>
                  </div>
                  {/* Red dot accent */}
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#dc2626] rounded-full border-2 border-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">
                  {schritt.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[260px]">
                  {schritt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// SERVICE
function ServiceSection() {
  const servicePoints = [
    { icon: FileCheck, text: "Kostenloses Angebot – unverbindlich & transparent" },
    { icon: UserCheck, text: "Persönlicher Ansprechpartner von Anfang bis Ende" },
    { icon: Clock4, text: "Beratung auch nach 18 Uhr & am Samstag" },
    { icon: Users, text: "Eigene Monteure – keine Subunternehmer" },
    { icon: Sparkles, text: "Saubere Arbeit – wir hinterlassen alles penibel" },
    { icon: CalendarCheck, text: "Pünktlich & zuverlässig – versprochen ist versprochen" },
    { icon: Euro, text: "Faire Preise – keine versteckten Kosten" },
    { icon: Award, text: "15+ Jahre Erfahrung – Kompetenz, die man spürt" },
  ];

  return (
    <section id="service" className="relative overflow-hidden">
      {/* Background split - diagonal slash style (nur Desktop) */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div
        className="hidden lg:block absolute inset-0 bg-[#dc2626]"
        style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0 100%)" }}
      />

      {/* Diagonal white separator (nur Desktop) */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full z-10"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        overflow="visible"
      >
        <line
          x1="58.8"
          y1="-4"
          x2="41.2"
          y2="104"
          stroke="#ffffff"
          vectorEffect="non-scaling-stroke"
          style={{ strokeWidth: "8px" }}
        />
      </svg>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {/* Left side - Heading */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end lg:pr-16 mb-12 lg:mb-0 py-20">
            <div className="text-center lg:text-right">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Deshalb
                <br />
                <span className="text-[#dc2626] lg:text-[#0a0a0a]">MEISTERWERK</span>
              </h2>
            </div>
          </div>

          {/* Right side - Bullet points */}
          <div className="lg:w-1/2 lg:pl-32 lg:pt-20 pb-20">
            <ul className="space-y-4">
              {servicePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-white group"
                  >
                    <span className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626]/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#dc2626] group-hover:border-[#dc2626] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#dc2626] group-hover:text-white transition-colors duration-300" />
                    </span>
                    <span className="text-lg pt-1.5">{point.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Kontakt Section
function KontaktSection() {
  return (
    <section id="kontakt" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-[0.2em]">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mt-3 mb-4 tracking-tight">
            Sprechen Sie mit uns
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir
            freuen uns auf Ihre Nachricht und melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Links: Kontaktformular */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#dc2626]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#dc2626]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">
                  Kontaktformular
                </h3>
              </div>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-[#0a0a0a] mb-2 block">
                      Vorname <span className="text-[#dc2626]">*</span>
                    </label>
                    <Input
                      placeholder="Max"
                      className="h-12 border-gray-200 focus:border-[#dc2626] focus:ring-[#dc2626]/20 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#0a0a0a] mb-2 block">
                      Nachname <span className="text-[#dc2626]">*</span>
                    </label>
                    <Input
                      placeholder="Mustermann"
                      className="h-12 border-gray-200 focus:border-[#dc2626] focus:ring-[#dc2626]/20 rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-[#0a0a0a] mb-2 block">
                      E-Mail <span className="text-[#dc2626]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="max@beispiel.de"
                      className="h-12 border-gray-200 focus:border-[#dc2626] focus:ring-[#dc2626]/20 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#0a0a0a] mb-2 block">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      placeholder="030 123 456 78"
                      className="h-12 border-gray-200 focus:border-[#dc2626] focus:ring-[#dc2626]/20 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#0a0a0a] mb-2 block">
                    Ihre Nachricht <span className="text-[#dc2626]">*</span>
                  </label>
                  <Textarea
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="min-h-[140px] border-gray-200 focus:border-[#dc2626] focus:ring-[#dc2626]/20 rounded-lg resize-none"
                  />
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    className="mt-1 w-4 h-4 accent-[#dc2626] cursor-pointer"
                  />
                  <label
                    htmlFor="datenschutz"
                    className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                  >
                    Ich habe die{" "}
                    <Link
                      href="/datenschutz"
                      className="text-[#dc2626] font-semibold hover:underline"
                    >
                      Datenschutzerklärung
                    </Link>{" "}
                    zur Kenntnis genommen.
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold h-12 text-base rounded-lg shadow-lg shadow-[#dc2626]/20 hover:shadow-xl hover:shadow-[#dc2626]/30 transition-all"
                >
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>

          {/* Rechts: Öffnungszeiten und Kontaktdaten */}
          <div className="lg:col-span-5 space-y-5">
            {/* Kontaktdaten Card */}
            <div className="bg-[#0a0a0a] rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-[#dc2626]/10 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#dc2626] rounded-full" />
                  Direkter Kontakt
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:03066774463"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-[#dc2626] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                        Zentrale
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-[#dc2626] transition-colors">
                        030 66 77 44 63
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:017670685813"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-[#dc2626] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                        Techniker direkt
                      </p>
                      <p className="text-white font-bold text-lg group-hover:text-[#dc2626] transition-colors">
                        0176 70 68 58 13
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:service@meisterwerk-berlin.de"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-[#dc2626] flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                        E-Mail
                      </p>
                      <p className="text-white font-bold group-hover:text-[#dc2626] transition-colors truncate">
                        service@meisterwerk-berlin.de
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Öffnungszeiten Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#dc2626] rounded-full" />
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-[#0a0a0a] font-medium">
                      Mo – Fr
                    </span>
                  </div>
                  <span className="text-gray-700 font-semibold">
                    08:00 – 18:00
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-[#0a0a0a] font-medium">Samstag</span>
                  </div>
                  <span className="text-gray-700 font-semibold">
                    10:00 – 14:00
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500 font-medium">Sonntag</span>
                  </div>
                  <span className="text-gray-500">Geschlossen</span>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-[#dc2626]/5 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-[#dc2626] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#dc2626] text-sm">
                      24/7 Notdienst
                    </p>
                    <p className="text-xs text-gray-600">
                      Auch an Feiertagen erreichbar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-white/70 mt-4 leading-relaxed text-sm">
              Ihr Meisterbetrieb für Rollladen in Berlin. Reparatur, Umbau und
              Montage aus einer Hand.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Navigation</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="#leistungen" className="hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#galerie" className="hover:text-white transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="#ablauf" className="hover:text-white transition-colors">
                  Ablauf
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Kontakt</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Tel: 030 66 77 44 63</li>
              <li>E-Mail: service@meisterwerk-berlin.de</li>
              <li>WhatsApp: 030 66 77 44 63</li>
              <li className="pt-2">Mo – Fr: 08:00 – 18:00 Uhr</li>
              <li>Samstag: 10:00 – 14:00 Uhr</li>
              <li className="text-[#dc2626] font-semibold">
                24/7 Notdienst verfügbar
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Standorte</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <a
                  href="https://maps.app.goo.gl/TQ9EiUETGha1eTS56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  <span className="text-white font-semibold">Berlin Süd</span>
                  <br />
                  Britzer Damm 123, 12347
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Qfwck6LJeAAaC2ru6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  <span className="text-white font-semibold">Berlin Nord</span>
                  <br />
                  Spandauer Damm 185, 14050
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/CkxMKik6ivC6F4Rh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  <span className="text-white font-semibold">Berlin Ost</span>
                  <br />
                  Regattastraße 132, 12527
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Meisterwerk Berlin. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-white/60 text-sm">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <main>
        <HeroSection />
        <LeistungenSection />
        <NotdienstBanner />
        <GalerieSection />
        <TestimonialsSection />
        <ServiceSection />
        <AblaufSection />
        <KontaktSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
