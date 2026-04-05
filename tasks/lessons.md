# Lessons Learned

## 2026-04-05 – Next.js gehört NICHT auf GitHub Pages

**Problem:** User hatte bei seinem ersten Demo-Projekt (Anwalt) reines HTML/CSS/JS genutzt und erfolgreich auf GitHub Pages deployed. Bei diesem Projekt (Next.js) wollte er den gleichen Weg gehen.

**Regel:** Für **Next.js-Projekte** immer **Vercel** vorschlagen, nicht GitHub Pages.

**Warum:**
- GitHub Pages serviert nur statische Dateien
- Next.js braucht Server-Features (Server Components, Image Optimization, API Routes)
- Mit Static Export (`output: 'export'`) ginge GH Pages, aber viele Features brechen
- Vercel ist vom Next.js-Hersteller, kostenlos (Hobby-Tier), 2-Min-Deployment, Auto-Deploy bei Git-Push

**Für welches Projekt welches Hosting:**
| Stack | Hosting |
|---|---|
| HTML/CSS/JS (statisch) | GitHub Pages, Netlify, Cloudflare Pages |
| Next.js / React / SSR | Vercel |
| Python/Django, Node-Backend | Railway, Render, Hetzner |

---

## 2026-04-05 – Navi-Links müssen auf echte Sektionen zeigen

**Problem:** Die Navi enthielt Fake-Dropdowns mit Links wie `#reparatur`, `#notdienst`, `#markisen`, `#ueber-uns` – diese Anker existierten gar nicht auf der Seite. Der User merkte das beim Klicken.

**Regel:** Vor dem Nav-Setup **immer erst die echten Section-IDs** auf der Seite prüfen (`grep "id=" page.tsx`). Nur auf existierende Anker linken. Keine Platzhalter-Dropdowns einbauen, die später tote Links sind.

**Warum:** Tote Links wirken unprofessionell und killen das Vertrauen beim Kunden-Pitch sofort.

---

## 2026-04-05 – Demo-Seite: Qualität vor Features

**Problem:** Zu viele Sektionen (8-10) machen die Seite lang und verwässern den Pitch. Elemente ohne Funktion (z.B. Google-Maps-iframe nur als Deko) sind "Füller" ohne Mehrwert.

**Regel:**
- Jede Sektion muss einen **konkreten Zweck** haben (überzeugen, Vertrauen, Handeln auslösen)
- Alles was keine Funktion hat → **raus** (User hat explizit gesagt: "das bringt nichts")
- Footer kann doppelte Infos aufnehmen (z.B. Standorte), dann kann die eigene Sektion weg
- Ideale Seitenstruktur für Handwerker-Demos:
  1. Hero (Hook)
  2. Leistungen (was wir tun)
  3. Notdienst-Banner (Dringlichkeit)
  4. Galerie (visueller Beweis)
  5. Testimonials (Social Proof)
  6. Service-Versprechen (Differenzierung)
  7. Ablauf (wie geht's weiter – direkt vor Kontakt!)
  8. Kontakt (CTA)
  9. FAQ (letzte Zweifel)
  10. Footer (Standorte, Impressum, Nav)

**Warum:** Der User hat selbst gesagt: "man will Ergebnisse sehen, direkt wissen wie's weiter geht". Ablauf gehört vor Kontakt, FAQ ans Ende.

---

## 2026-04-05 – SEO-Setup ist Pflicht bei jedem neuen Demo-Projekt

**Problem:** Demo wurde gebaut, aber `layout.tsx` hatte noch "Create Next App" als Titel und Description. Google würde die Seite quasi nicht auffinden. Keine sitemap.xml, keine robots.txt, kein LocalBusiness-Schema.

**Regel:** **Ab jetzt wird jede neue Demo-Website von Anfang an SEO-ready gebaut.** Das ist kein Nachgedanke, sondern Teil des Setups. Ohne SEO ist die Seite für den Kunden wertlos — sie wird nicht gefunden.

**SEO-Checkliste für jede neue Demo:**

1. **Metadata in layout.tsx** (bei Next.js) bzw. im `<head>` (bei HTML):
   - `title` mit Hauptkeyword + Stadt + Betriebsart (z.B. "Rollladen Berlin – Meisterbetrieb")
   - `description` 150-160 Zeichen, mit Telefonnummer als Call-to-Action
   - `keywords` Array mit 8-12 lokalen Keywords
   - `metadataBase` auf die echte Domain setzen
2. **OpenGraph + Twitter Cards** — für WhatsApp/Facebook-Vorschauen
3. **Robots-Tags** — `index: true, follow: true`
4. **sitemap.ts** erstellen (Next.js generiert daraus automatisch /sitemap.xml)
5. **robots.ts** erstellen (Next.js generiert /robots.txt)
6. **LocalBusiness JSON-LD Schema** im `<body>` einbauen mit:
   - `@type`: passender Typ (HomeAndConstructionBusiness, LegalService, MedicalClinic, etc.)
   - Adresse, Telefon, E-Mail, Öffnungszeiten, Services, areaServed
7. **Canonical URL** setzen
8. **lang="de"** auf `<html>` (ist meist schon da)
9. **H1-Struktur prüfen**: Nur ein `<h1>` pro Seite mit Hauptkeyword
10. **Alt-Texte** auf allen Bildern

**Für welchen Branchentyp welcher Schema-Type:**
| Branche | schema.org @type |
|---|---|
| Handwerker (Rollladen, Elektriker, Maler) | HomeAndConstructionBusiness |
| Anwalt / Kanzlei | LegalService |
| Steuerberater | AccountingService |
| Arzt / Praxis | MedicalClinic / MedicalBusiness |
| Restaurant | Restaurant |
| Allgemein lokal | LocalBusiness |

**Warum:** Lokale Dienstleister leben von lokaler Google-Sichtbarkeit. Eine Demo ohne SEO-Setup ist kein überzeugendes Verkaufsargument. Außerdem: Je mehr SEO drin ist, desto stärker das Upsell-Argument ("Google Business Profil mit einrichten").

---

## 2026-04-05 – Google Business Profil ist Upsell-Gold

**Regel:** Bei jedem Verkaufsgespräch Google Business Profil als **zusätzliche Dienstleistung** anbieten.

**Verkaufsargumente (die B im Pitch nutzen kann):**

1. **"Kostenlos und bringt 80% Ihrer lokalen Anfragen"** — Google Business ist gratis und der wichtigste Hebel für lokale Sichtbarkeit.
2. **"Ihre Konkurrenz ist schon da"** — wer keinen Eintrag hat, existiert für Google Maps nicht.
3. **"Sie werden im Kartenausschnitt oben angezeigt"** — über den normalen Suchergebnissen, mit Sternen, Telefon, Anfahrt.
4. **"15 Minuten mit Ihnen zusammen, dann läuft's"** — niedrige Einstiegshürde.
5. **"Ich helfe Ihnen auch, die ersten 5 Bewertungen zu organisieren"** — 5 Sterne pushen Ranking enorm.

**Workflow:** Google Business Profil richtet der **Kunde** ein (Verifizierung läuft per Postkarte an seine Adresse / Anruf auf seine Nummer). B setzt sich mit dem Kunden zusammen und füllt es gemeinsam aus. KEIN eigenes Google-Business-Konto nötig.

**Paket-Angebot an Kunden:**
"Website + Google Business Einrichtung + Startbewertungen organisieren" = Komplett-Paket.

**Warum:** Die schönste SEO-optimierte Website bringt wenig ohne Google Business Eintrag. Umgekehrt: Google Business ohne Website wirkt unseriös. Beides zusammen = volle Wirkung. Ist das perfekte Upsell direkt nach der Website-Abnahme.
