/*
  ============================================================
  data.js — Opdrachten toevoegen en bewerken
  ============================================================

  Structuur van één opdracht:
  {
    titel:      "Naam van de opdracht",
    semester:   "Semester 2",
    categorie:  "Webdevelopment",         // moet overeenkomen met een categorie hieronder
    tags:       ["HTML", "CSS"],          // technologieën / talen
    opdracht:   "Wat was de opdracht?",
    uitvoering: "Hoe heb je het aangepakt?",
    resultaat:  "Wat was het eindresultaat?",
    reflectie:  "Wat heb je geleerd?",

    // Optioneel — weglaten als je het niet nodig hebt:
    afbeelding: "img/screenshot.png",     // pad naar afbeelding of een volledige URL
    links: [
      { label: "Live website", url: "https://..." },
      { label: "GitHub",       url: "https://github.com/..." },
      { label: "Documentatie", url: "https://..." },
    ]
  }

  !! Categorieën staan onderaan in het 'categorieën'-object.
  ============================================================
*/

const opdrachten = [
  // --- Individueel Project ---
  {
    titel: "Jiminy's Dagboek - Het Morele Register",
    semester: "Cyclus 5 • DP12",
    categorie: "Individueel Project",
    tags: ["HTML", "CSS", "JavaScript", "AR.js", "A-Frame", "GitHub Pages"],
    opdracht:
      "Ontwikkel een individueel AR-project met een eigen concept, visuele identiteit en technische uitwerking. Het project moest een interactieve website zijn met een AR-component en een onderbouwde ethische analyse.",
    uitvoering:
      "Gebouwd als interactieve tijdlijnwebsite die de moreel zwaarste momenten uit de Kingdom Hearts-reeks analyseert vanuit het perspectief van Jiminy Cricket — het geweten van het verhaal. De site bevat accordion-entries met een morele gewichtsschaal (0–100), filterfunctie op thema (opoffering, verraad, identiteit…), een sterrenveld-achtergrond en een AR-component op basis van HIRO-markerherkenning. Typografie en kleurpalet zijn volledig afgestemd op het concept: drie lettertypen (Cinzel, IM Fell English, Crimson Pro) en een palet van donkere marineblauw-zwarten met goud als enige lichtbron.",
    resultaat:
      "Live website gepubliceerd via GitHub Pages met acht uitgewerkte morele casussen, werkende filter- en accordionfunctionaliteit, AR-demo met portaalanimatie en voice-over, en een volledig uitgewerkt ethisch stappenplan als onderdeel van de documentatie.",
    reflectie:
      "AR.js bleek eigenwilliger dan verwacht — het conflict tussen de eigen camera-stream en die van AR.js kostte acht iteraties om op te lossen. De koppeling tussen fysieke HIRO-marker en de volledige media-keten is daardoor nog niet automatisch. Wat ik meeneem: eerder prototypen met de AR-laag en de camera-integratie los testen van de rest. Inhoudelijk heb ik geleerd hoe je een concept consistent doortrekt van kleur en typografie tot interactiepatroon en tekst — elke keuze vertelt hetzelfde verhaal.",
    links: [
      { label: "Live website", url: "https://jayheshya.github.io/Jiminy-s-Dagboek" },
      {
        label: "Documentatie",
        url: "https://jayheshya.github.io/Jiminy-s-Dagboek/documentatie2.html",
      },
      { label: "GitHub", url: "https://github.com/Jayheshya/Jiminy-s-Dagboek" },
    ],
  },

  // --- Bedrijfsproject (DP10) ---
  {
    titel: "ZIVRA Revalidatie Dashboard",
    semester: "Cyclus 4 • DP10",
    categorie: "Webdevelopment",
    tags: [
      "UX/UI",
      "Figma",
      "Design Thinking",
      "User Testing",
      "Datavisualisatie",
      "Healthcare",
    ],
    opdracht:
      "Ontwerp in teamverband (Team Tegendeel) een gebruiksvriendelijke digitale oplossing voor ZIVRA waarmee fysiotherapeuten en CVA-patiënten inzicht krijgen in het revalidatieproces. De uitdaging was om complexe bewegings- en voortgangsdata toegankelijk te maken voor verschillende doelgroepen zonder overprikkeling of extra werkdruk te veroorzaken.",
    uitvoering:
      "Met behulp van de Design Thinking-methodiek zijn interviews, gebruikersanalyses, persona's, empathy maps en gebruikerstesten uitgevoerd. Op basis van deze inzichten zijn meerdere iteraties van low-, mid- en high-fidelity prototypes ontwikkeld in Figma. De oplossing werd opgesplitst in twee gebruikerservaringen: een dashboard voor fysiotherapeuten met analyses, rapportages en patiëntbeheer, en een vereenvoudigde mobiele omgeving voor patiënten met voortgangsinzichten, oefeningen en meldingen. Tijdens gebruikerstesten zijn onder andere navigatie, datavisualisaties en informatiehiërarchie gevalideerd en verbeterd.",
    resultaat:
      "Een volledig uitgewerkt high-fidelity prototype bestaande uit een webdashboard voor fysiotherapeuten en een mobiele app voor CVA-patiënten. Het ontwerp bevat voortgangsrapportages, prestatieanalyses, patiëntoverzichten, persoonlijke dashboards, meldingen en visuele feedback. Uit gebruikerstesten met zeven deelnemers bleek een gemiddelde taakvoltooiing van 83%, waarbij de navigatiestructuur als duidelijk en intuïtief werd ervaren.",
    reflectie:
      "Dit project liet zien hoe belangrijk het is om complexe data te vertalen naar begrijpelijke inzichten voor verschillende gebruikersgroepen. Vooral het ontwerpen van datavisualisaties bleek uitdagend, omdat gebruikers extra context nodig hadden om grafieken correct te interpreteren. Ik heb geleerd dat vroeg en regelmatig testen met eindgebruikers cruciaal is om aannames te valideren en ontwerpkeuzes beter te onderbouwen. Daarnaast heb ik meer ervaring opgedaan met Design Thinking, iteratief ontwerpen en het ontwikkelen van toegankelijke interfaces voor zorgtoepassingen.",
    links: [
      {
        label: "Figma design",
        url: "https://www.figma.com/design/X0DswFSypvYTf6M1r86Qmy/ZIVRA-Design?node-id=73-3&p=f&t=atcJMHh9N6KvsEDL-0",
      },
    ],
  },

  // --- UI Hackaton (DP6) ---
  {
    titel: "UI Hackaton: Campus Navigatie App",
    semester: "Cyclus 3 • DP6",
    categorie: "Webdevelopment",
    tags: ["UX/UI", "Figma", "Usability Testing", "Wireframing", "MoSCoW"],
    opdracht:
      "Ontwerp in teamverband (Team Tegendeel) een intuïtieve campusnavigatie-app voor Hogeschool Windesheim Almere, gericht op eerstejaars studenten, internationale studenten, gastsprekers en bezoekers tijdens open dagen die moeite hebben met het vinden van lokalen en voorzieningen.",
    uitvoering:
      "Het proces startte met gebruikersonderzoek: persona's, empathy maps, user journeys en een enquête onder studenten en bezoekers. Op basis van de MoSCoW-requirementslijst zijn vier flows uitgewerkt (lokaal zoeken, snelle route, toegankelijkheidsmodus, drukte/alternatieven). Vervolgens zijn low-, mid- en high-fidelity wireframes gebouwd in Figma, met Windesheim-merkkleuren (rood, groen). Usabilitytests met 6 testpersonen valideerden de flows; verbeterpunten zoals een prominenter inputveld en een grotere kaartweergave zijn doorgevoerd.",
    resultaat:
      "Een volledig uitgewerkt high-fidelity prototype van een campusnavigatie-app met stap-voor-stap navigatie, visuele routeweergave, drukte-indicaties, toegankelijkheidsmodus en een snelle-route-functie. Usabilitytests toonden aan dat alle 6 testpersonen de kerntaken zelfstandig voltooiden, gemiddeld binnen 18–22 seconden.",
    reflectie:
      "Door vroeg gebruikersonderzoek te doen kregen de ontwerpkeuzes een solide onderbouwing. De empathy maps maakten duidelijk hoe sterk stress en taalbarrières de navigatie-ervaring beïnvloeden. Wat ik meeneem: taalvrije visuele navigatie (iconen > tekst) werkt aantoonbaar beter voor een diverse doelgroep, en itereren op basis van testfeedback levert meetbaar betere resultaten op.",
    links: [
      {
        label: "Figma design",
        url: "https://www.figma.com/design/FfNaLXgZ7DaXZWWRwBeZz2/WindesFind-indoor-navigation-app?node-id=2-2&p=f&t=2mwy12uZb2aKNYqp-0"},
    {
        label: "Prototype",
        url: "https://www.figma.com/proto/FfNaLXgZ7DaXZWWRwBeZz2/WindFind-indoor-navigation-app?node-id=2-2&p=f&t=2mwy12uZb2aKNYqp-0&scaling=scale-down&page-id=0%3A1",
      },
    ],

  },

  // --- DP5 Wireframes (Cyclus 2) ---
  {
    titel: "Mobiele App Wireframes: Vergaderruimte Claimen",
    semester: "Cyclus 2 • DP5",
    categorie: "Webdevelopment",
    tags: ["UX/UI", "Figma", "Wireframing", "Mobile Design", "Sensordata"],
    opdracht:
      "Ontwerp low-, mid- en high-fidelity wireframes voor een mobiele applicatie waarmee medewerkers van Hogeschool Windesheim snel een beschikbare vergaderruimte kunnen vinden en tijdelijk claimen op basis van real-time sensordata.",
    uitvoering:
      "Gestart met een schets op papier om de basisflow te bepalen, daarna uitgewerkt naar low-fidelity (structuur en navigatie), mid-fidelity (knoppen, titels, ruimte-info) en high-fidelity wireframes. Het kleurenpalet combineert een donkerblauwe achtergrond (#0D1B2A) met teal accenten (#3ECFBF) en een rood/oranje/groen systeem voor beschikbaarheidsstatus. Na feedback van medestudenten zijn een filterfunctie, consistente terminologie ('Claim Ruimte' overal) en een duidelijkere plattegrond met looproute-icoontjes toegevoegd.",
    resultaat:
      "Een volledig uitgewerkt high-fidelity prototype met welkomstscherm, gebouwkeuze, lijst- én plattegrondweergave, filteropties (personen, ruimtetype, faciliteiten, toegankelijkheid), ruimtedetailpagina met realtime klimaatdata, en een claimflow met bevestiging en afteltimer. De gebruiker bereikt het claimscherm in maximaal vier tikken.",
    reflectie:
      "Door te starten in op papier konden we snel de flow uitdenken zonder tijd te verliezen aan tools. Feedback van medestudenten wees op twee concrete verbeterpunten. Consistentie in taalgebruik en filtering. Dit verhoogt de bruikbaarheid. Ik leerde dat kleine inconsistenties in microcopy (twee namen voor dezelfde knop) meer verwarring veroorzaken dan ze lijken.",
      links: [
      {
        label: "Figma design",
        url: "https://www.figma.com/design/KR5xtiDOJmiQ4I3UJRrR6H/Meeting-room-design?node-id=0-1&p=f&t=AnQDVRDZabNDxjBZ-0",
      },
    ],
  },
];

/*
  ============================================================
  Categorieën
  Koppel elke categorie aan een emoji en een volgorde.
  Voeg een nieuwe rij toe als je een nieuwe categorie nodig hebt.
  ============================================================
*/
const categorieën = [
  { naam: "Individueel Project", emoji: "🔑" },
  { naam: "Webdevelopment",      emoji: "💻" },
  { naam: "Database",            emoji: "🗄️" },
  
  // { naam: "Backend",     emoji: "⚙️" },   
  // { naam: "Security",    emoji: "🔐" },
  // { naam: "Projectwerk", emoji: "📁" },
];
