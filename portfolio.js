/* ===========================
   portfolio.js
   Leest data.js en bouwt de pagina op.
   Je hoeft dit bestand normaal niet aan te passen.
   =========================== */

(function () {
  const root = document.getElementById('portfolio-root');

  categorieën.forEach(({ naam, emoji }) => {
    const groep = opdrachten.filter(o => o.categorie === naam);
    if (groep.length === 0) return;

    // Hoofdstuk-titel
    const titel = document.createElement('div');
    titel.className = 'chapter-title';
    titel.textContent = `${emoji} ${naam}`;
    root.appendChild(titel);

    groep.forEach(opdracht => {
      const entry = document.createElement('div');
      entry.className = 'entry';

      // Afbeelding (optioneel)
      const afbeeldingHTML = opdracht.afbeelding
        ? `<img class="entry-image" src="${opdracht.afbeelding}" alt="Screenshot van ${opdracht.titel}">`
        : '';

      // Links (optioneel)
      const linksHTML = opdracht.links && opdracht.links.length
        ? `<div class="entry-links">
            ${opdracht.links.map(l =>
              `<a class="entry-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
            ).join('')}
           </div>`
        : '';

      entry.innerHTML = `
        <button class="entry-header">
          <div class="entry-title">${opdracht.titel}</div>
          <div class="entry-subtitle">${opdracht.semester} • ${opdracht.categorie}</div>
        </button>
        <div class="entry-body">
          ${afbeeldingHTML}
          <div class="tags">
            ${opdracht.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <h3>Opdracht</h3>
          <p>${opdracht.opdracht}</p>
          <h3>Uitvoering</h3>
          <p>${opdracht.uitvoering}</p>
          <h3>Resultaat</h3>
          <p>${opdracht.resultaat}</p>
          <h3>Reflectie</h3>
          <p>${opdracht.reflectie}</p>
          ${linksHTML}
        </div>
      `;

      root.appendChild(entry);
    });
  });

  // Accordion gedrag
  root.addEventListener('click', e => {
    const header = e.target.closest('.entry-header');
    if (!header) return;

    const body = header.nextElementSibling;
    const isOpen = body.style.display === 'block';

    document.querySelectorAll('.entry-body').forEach(b => b.style.display = 'none');
    if (!isOpen) body.style.display = 'block';
  });
})();
