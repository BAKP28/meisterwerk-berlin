"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Star, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import NavHeader from "@/components/ui/nav-header";
import TestimonialsSection from "@/components/ui/testimonials-section";

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

// Navigation
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#1a365d]/95 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="#leistungen"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="#ueber-uns"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="#kontakt"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:03066774463"
              className="flex items-center gap-2 text-[#dc2626] font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              030 66 77 44 63
            </a>
            <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-6">
              Kostenlose Beratung
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 bg-[#1a365d]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-white">
                Startseite
              </Link>
              <Link
                href="#leistungen"
                className="text-sm font-medium text-white/80"
              >
                Leistungen
              </Link>
              <Link
                href="#ueber-uns"
                className="text-sm font-medium text-white/80"
              >
                Über uns
              </Link>
              <Link
                href="#kontakt"
                className="text-sm font-medium text-white/80"
              >
                Kontakt
              </Link>
              <a
                href="tel:03066774463"
                className="flex items-center gap-2 text-[#dc2626] font-bold"
              >
                <Phone className="w-5 h-5" />
                030 66 77 44 63
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section - Clean white with subtle shadows
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* LEFT SIDE: Text - aligned to top */}
          <div className="text-[#1a365d] pt-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-[#1a365d]">
              Rollladen-Profis
              <span className="block text-[#dc2626]">für Berlin</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1a365d]/70 mb-6 leading-relaxed">
              Wir sind Ihr zuverlässiger Partner für alle Belange rund um
              Rollläden, Markisen und Sonnenschutz in Berlin. Mit über 15 Jahren
              Erfahrung und einem Team aus qualifizierten Fachleuten bieten wir
              Ihnen erstklassigen Service zu fairen Preisen.
            </p>
            <ul className="text-lg text-[#1a365d]/70 mb-10 space-y-2">
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
              <a href="tel:03066774463">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg px-10 py-6 font-bold"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Jetzt Anrufen
                </Button>
              </a>
              <Link href="#kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white text-lg px-10 py-6 font-semibold"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
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
        <div className="w-8 h-12 border-2 border-[#1a365d]/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#1a365d]/50 rounded-full" />
        </div>
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
          <a href="tel:017670685813">
            <Button
              size="lg"
              className="bg-white text-[#dc2626] hover:bg-gray-100 font-bold text-lg px-10 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              0176 706 85 813
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// Bewertungen Section
function BewertungenSection() {
  const bewertungen = [
    {
      name: "Seiichi Kato",
      text: "Great service! Everything went smooth. Professional work. Highly recommend.",
      stars: 5,
    },
    {
      name: "Frank Weiss",
      text: "Bei meiner Schwiegermutter war das Rollo defekt. Heute Vormittag telefoniert und mittags war alles repariert!",
      stars: 5,
    },
    {
      name: "kaydazzledorf",
      text: "Schnell, nett, gute Arbeit. Der Preis ist nachvollziehbar, alles prima.",
      stars: 5,
    },
    {
      name: "Tallie M. Tieslauk",
      text: "Heute waren zwei Profis bei mir (Vater und Sohn), super freundlich und super schnell!",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#1a365d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Das sagen unsere Kunden
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl font-bold text-white">4.8</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <p className="text-white/60">Google Bewertungen</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bewertungen.map((bewertung) => (
            <Card
              key={bewertung.name}
              className="bg-white/10 border-white/10 text-white"
            >
              <CardContent className="pt-4">
                <div className="flex mb-2">
                  {[...Array(bewertung.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-3 leading-relaxed">
                  &ldquo;{bewertung.text}&rdquo;
                </p>
                <p className="font-semibold text-white text-sm">
                  {bewertung.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Über Uns
function UeberUnsSection() {
  return (
    <section id="ueber-uns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center">
              <span className="text-8xl">🔧</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5">
              <div className="text-3xl font-bold text-[#1a365d]">15+</div>
              <div className="text-gray-600 text-sm">Jahre Erfahrung</div>
            </div>
          </div>
          <div>
            <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-wider">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mt-2 mb-6">
              Meisterwerk Berlin
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ihr lokaler Fachbetrieb für Rollladen-Service in Berlin mit
              jahrelanger Erfahrung und höchsten Qualitätsstandards.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Wir sind ein Familienunternehmen mit Leidenschaft für unser
              Handwerk. Unser Team steht für zuverlässige, saubere Arbeit und
              fairen Service.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="font-medium text-[#1a365d] text-sm">
                  Meisterbetrieb
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="font-medium text-[#1a365d] text-sm">
                  Eigene Monteure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="font-medium text-[#1a365d] text-sm">
                  Faire Preise
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="font-medium text-[#1a365d] text-sm">
                  Kostenlos beraten
                </span>
              </div>
            </div>
            <Button className="bg-[#1a365d] hover:bg-[#2c5282] text-white font-semibold px-6">
              Mehr über uns
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Standorte
function StandorteSection() {
  const standorte = [
    { name: "Berlin Süd", address: "Britzer Damm 123", plz: "12347 Berlin" },
    { name: "Berlin Nord", address: "Spandauer Damm 185", plz: "14050 Berlin" },
    {
      name: "Berlin Ost",
      address: "Regattastraße 132",
      plz: "12527 Berlin Grünau",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-wider">
            Unsere Standorte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mt-2 mb-4">
            Immer in Ihrer Nähe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {standorte.map((standort) => (
            <Card key={standort.name} className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg text-[#1a365d]">
                  {standort.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{standort.address}</p>
                <p className="text-gray-600 text-sm">{standort.plz}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden h-[350px] border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30274.27144280747!2d13.35!3d52.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Meisterwerk Berlin Standorte"
          />
        </div>
      </div>
    </section>
  );
}

// Kontakt Section
function KontaktSection() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#dc2626] font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mt-2 mb-4">
            Sprechen Sie mit uns
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir
            freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-xl p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-[#1a365d]">
                Kontaktformular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Vorname *
                    </label>
                    <Input placeholder="Max" className="h-10" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Nachname *
                    </label>
                    <Input placeholder="Mustermann" className="h-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    placeholder="max@beispiel.de"
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    placeholder="030 123 456 78"
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Ihre Nachricht *
                  </label>
                  <Textarea
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold h-10"
                >
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-0 shadow-xl p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#1a365d]">
                  Kontaktdaten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <a
                      href="tel:03066774463"
                      className="text-[#dc2626] font-bold hover:underline"
                    >
                      030 66 77 44 63
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      WhatsApp (Notdienst)
                    </p>
                    <a
                      href="tel:017670685813"
                      className="text-[#dc2626] font-bold hover:underline"
                    >
                      0176 706 85 813
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-Mail</p>
                    <a
                      href="mailto:service@meisterwerk-berlin.de"
                      className="text-[#dc2626] font-bold hover:underline"
                    >
                      service@meisterwerk-berlin.de
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#1a365d]">
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a365d]">
                      Mo - Fr: 08:00 - 18:00 Uhr
                    </p>
                    <p className="text-gray-500 text-sm">
                      Sa: 10:00 - 14:00 Uhr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white py-12">
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
            <h4 className="font-semibold mb-3 text-lg">Leistungen</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link
                  href="/rolladenreparatur"
                  className="hover:text-white transition-colors"
                >
                  Rollladen Reparatur
                </Link>
              </li>
              <li>
                <Link
                  href="/rollladennotdienst"
                  className="hover:text-white transition-colors"
                >
                  Rollladennotdienst
                </Link>
              </li>
              <li>
                <Link
                  href="/holzrollladen"
                  className="hover:text-white transition-colors"
                >
                  Holzrollladen
                </Link>
              </li>
              <li>
                <Link
                  href="/markise"
                  className="hover:text-white transition-colors"
                >
                  Markisen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Kontakt</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Tel: 030 66 77 44 63</li>
              <li>E-Mail: service@meisterwerk-berlin.de</li>
              <li>WhatsApp: 0176 706 85 813</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Öffnungszeiten</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Mo - Fr: 08:00 - 18:00 Uhr</li>
              <li>Samstag: 10:00 - 14:00 Uhr</li>
              <li className="text-[#dc2626] font-semibold">
                24/7 Notdienst verfügbar
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Meisterwerk Berlin. Alle Rechte vorbehalten.
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
        <NotdienstBanner />
        <TestimonialsSection />
        <UeberUnsSection />
        <StandorteSection />
        <KontaktSection />
      </main>
      <Footer />
    </div>
  );
}
