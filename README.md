# Vejen Kunstmuseum – Teknisk dokumentation

## Indledning

Dette projekt er udviklet som et redesign af Vejen Kunstmuseums digitale platform med fokus på visuel formidling, brugeroplevelse og tilgængelighed.

Løsningen er udviklet i Astro med Tailwind CSS og JavaScript og hostes via Netlify. Projektet arbejder ud fra et mobile first princip og er bygget op omkring genanvendelige komponenter og et konsistent design system.

Projektet har haft fokus på at skabe en digital oplevelse, som i højere grad matcher den fysiske oplevelse af museet.

---

## Links

GitHub repository:  
https://github.com/EmmaSofieM/VejenKunstmuseum

Live site:  
https://vejenkunstmuseum.netlify.app/

---

## Teknologier

Projektet er udviklet med:

- Astro
- Tailwind CSS
- JavaScript
- HTML5
- CSS3
- Netlify
- GitHub
- Lenis Scroll

---

## Projektstruktur

Projektet er bygget op med en komponentbaseret struktur i Astro, hvor sider, layouts, scripts og genanvendelige komponenter er opdelt for at skabe overblik og en mere vedligeholdelsesvenlig kodebase.

```text
/
├── .astro/
│
├── .vscode/
│   ├── extensions.json
│   └── launch.json
│
├── dist/
│
├── node_modules/
│
├── public/
│   ├── andet/
│   │
│   ├── favicon_io (2)/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   │
│   ├── fonts/
│   │   ├── Nimbus-Sans-D-OT-Bold_32747.woff2
│   │   └── Nimbus-Sans-D-OT-Light_32752.woff2
│   │
│   ├── hero/
│   ├── ikoner/
│   ├── kalender/
│   ├── kort/
│   ├── logo/
│   ├── personale/
│   ├── samling/
│   ├── tidslinje/
│   ├── udstillinger/
│   │
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Breadcrumbs.astro
│   │   ├── Cta.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ImageCollage.astro
│   │   ├── KalenderCard.astro
│   │   ├── Kort.astro
│   │   ├── PageHeroImage.astro
│   │   ├── QuoteBlock.astro
│   │   ├── SamlingCard.astro
│   │   ├── SamlingForside.astro
│   │   ├── StaffCards.astro
│   │   ├── Tidslinje.astro
│   │   ├── UdstillingForside.astro
│   │   ├── UdstillingsSlider.astro
│   │   └── Welcome.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── besoeg/
│   │   │   ├── billedskolen.astro
│   │   │   ├── findvej.astro
│   │   │   ├── gruppeogfirmaer.astro
│   │   │   ├── praktiskinfo.astro
│   │   │   └── aabningstider.astro
│   │   │
│   │   ├── ommuseet/
│   │   │   ├── historie.astro
│   │   │   ├── om.astro
│   │   │   ├── samling.astro
│   │   │   └── vision.astro
│   │   │
│   │   ├── udstillinger/
│   │   │   ├── aktuelle.astro
│   │   │   ├── kommende.astro
│   │   │   └── tidligere.astro
│   │   │
│   │   ├── index.astro
│   │   ├── kalender.astro
│   │   └── search.json.ts
│   │
│   ├── scripts/
│   │   └── lenis.js
│   │
│   ├── styles/
│   │   └── generel.css
│   │
│   └── .gitignore
│
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## Navngivning

Komponenter navngives med stort begyndelsesbogstav og beskriver deres funktion.

Eksempler:

- Header.astro
- Footer.astro
- Hero.astro
- SamlingCard.astro

Assets og billeder navngives med små bogstaver og konkrete beskrivelser.

Eksempel:

- hero-billede.webp
- kalender-ikon.svg

---

## Arbejdsstruktur

Projektet er struktureret gennem GitHub branches for at skabe overblik og gøre det muligt at arbejde eksperimenterende uden at påvirke main branch direkte.

Branches navngives efter funktion eller feature.

Eksempel:

- feature-header
- feature-kalender
- fix-navigation

Commitbeskeder beskriver hvilke ændringer der er lavet.

---

## CSS og styling

Projektet er bygget med Tailwind CSS kombineret med globale styles i generel.css.

Der er arbejdet med:

- responsive breakpoints
- spacing system
- typografisk hierarki
- konsistente farver
- hover states
- transitions
- grid layouts
- overlays
- animationer

Løsningen er udviklet mobile first.

### Typografi

Projektet anvender Nimbus Sans som primær skrifttype.

Skrifttyperne er importeret lokalt gennem public/fonts for at sikre stabil performance og ensartet rendering på tværs af browsere.

### Farver

Farvepaletten er udviklet med fokus på kontrast, varme og visuel identitet inspireret af museets kunstværker og rumlige stemning.

Farverne bruges aktivt til:

- navigation
- hover states
- call to actions
- sektioner
- visuel guidning

---

## Responsivt design

Hjemmesiden er udviklet med fokus på mobiloplevelsen først.

Layoutet tilpasser sig automatisk forskellige skærmstørrelser gennem Tailwind breakpoints.

Der er særligt arbejdet med:

- navigation på mobil
- touchvenlige elementer
- responsive grids
- læsbar typografi
- fleksible sektioner
- responsive billeder
- mobile sliders

Ved siden af burgermenuen er der placeret et ur ikon, som fungerer som direkte genvej til “Planlæg dit besøg”.

Det interaktive museumskort er også tilpasset mobil gennem en horisontal slider med cards, så funktionaliteten fungerer bedre på touchskærme.

---

## Komponenter

Projektet er bygget op omkring genanvendelige komponenter for at skabe en mere fleksibel og vedligeholdelsesvenlig kodebase.

### Header

Headeren indeholder:

- navigation
- dropdown menu
- burger menu
- åbent/lukket status
- genvej til planlæg besøg

Headeren arbejder desuden med hover states, dynamiske farver og interaktive navigationselementer.

### Footer

Footeren indeholder:

- kontaktinformation
- adresse
- sociale medier
- nyhedsbrev

Footeren fungerer som afslutning på alle sider og genbruges globalt gennem layoutet.

### Hero

Hero sektionen fungerer som brugerens første møde med museet.

Der arbejdes med:

- store billeder
- stemningsskabende indhold
- call to actions
- dynamiske farver
- slider funktionalitet
- visuelle overlays

### Breadcrumbs

Breadcrumbs hjælper brugeren med at forstå placering på sitet og forbedrer navigationen mellem sider.

### SamlingCard

Cards bruges til at præsentere værker og udstillinger gennem:

- billede
- titel
- kort beskrivelse
- link

### KalenderCard

Kalender komponentet giver overblik over arrangementer og udstillinger gennem cards med dato, information og links.

### Tidslinje

Tidslinjen bruges til at formidle museets historie gennem en vertikal navigation med årstal og indhold.

### Kort

Kort komponentet fungerer som et interaktivt museumskort, hvor brugeren kan udforske museets områder digitalt.

---

## JavaScript funktioner

Projektet anvender JavaScript til at skabe dynamiske og interaktive funktioner.

### Åbent eller lukket status

Headeren viser automatisk om museet er åbent eller lukket baseret på dato og tidspunkt.

Koden beregner automatisk:

- ugedag
- klokkeslæt
- åbningstid

og opdaterer status dynamisk i interfacet.

### Newsletter formular

Nyhedsbrevet giver brugeren feedback direkte i interfacet uden reload af siden.

Ved submit:

- ændres input status
- formularen opdateres visuelt
- brugeren får feedback direkte

### Breadcrumbs

Brødkrummestien genereres dynamisk gennem arrays og Astro props, så komponentet kan genbruges på tværs af flere sider.

### Hero slider

Hero sektionen arbejder med dynamiske slides og skiftende indhold.

Slides skifter blandt andet:

- billeder
- farver
- tekst
- logo variationer

### Interaktivt museumskort

Kortet er bygget op med interaktive punkter placeret via CSS variabler.

Ved hover eller klik vises information om udstillinger og lokationer.

På mobil erstattes punkterne af en horisontal slider for bedre usability.

### Lenis smooth scroll

Projektet anvender Lenis til smooth scrolling.

Lenis bruges til:

- mere flydende scroll
- bedre oplevelse mellem sektioner
- roligere navigation
- mere moderne interaktion

---

## Performanceoptimering

Der er arbejdet aktivt med performance og bæredygtighed.

### Lazy loading

Billeder anvender:

```html
loading="lazy"
```

for at reducere unødvendig indlæsning.

### WebP billeder

Billeder er konverteret til WebP format og nedskaleret for at forbedre loadingtid og reducere filstørrelser.

### Minificering

CSS og build filer minificeres automatisk gennem Astro build processen.

### Lighthouse

Der er arbejdet med:

- performance
- accessibility
- SEO
- best practices

for at skabe en hurtig og tilgængelig løsning.

### SEO

Projektet arbejder med SEO gennem:

- meta descriptions
- semantisk HTML
- korrekt heading struktur
- alt tekster
- performanceoptimering

---

## Tilgængelighed

Projektet arbejder med tilgængelighed gennem:

- kontrast
- semantisk HTML
- aria labels
- tydelige call to actions
- læsbar typografi
- logisk informationshierarki
- touchvenlige elementer

Der er arbejdet med at gøre løsningen mere overskuelig og brugervenlig på tværs af forskellige enheder og brugerbehov.

---

## Deployment

Projektet er deployet via Netlify.

Netlify bruges til:

- hosting
- build
- deployment
- performanceoptimering

GitHub bruges som versionsstyring og til håndtering af branches og commits.

---

## Konklusion

Projektet har haft fokus på at skabe en mere oplevelsesbaseret og tilgængelig digital platform for Vejen Kunstmuseum.

Ved at kombinere:

- visuel formidling
- brugeroplevelse
- responsivt design
- komponentbaseret udvikling
- performanceoptimering

er der udviklet en løsning, som fungerer både som informationsplatform og som digital indgang til museumsoplevelsen.

Løsningen arbejder med at skabe en tydeligere forbindelse mellem den digitale og den fysiske museumsoplevelse gennem visuel formidling, navigation og interaktive elementer.
