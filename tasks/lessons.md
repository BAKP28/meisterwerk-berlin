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
