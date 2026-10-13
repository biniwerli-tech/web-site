(function () {
  'use strict';

  var EMAIL = 'bsm.conseilprotection@gmail.com';
  var IMG = function (id) { return 'images/' + id + '.jpg'; };

  var CATS = [
    { key: 'corps', label: 'Protection du corps', sub: 'Combinaisons et surbottes jetables', img: 'combi' },
    { key: 'mains', label: 'Protection des mains', sub: 'Gants latex et gants de manutention', img: 'latex' },
    { key: 'resp', label: 'Protection respiratoire', sub: 'Demi-masques et filtres P3', img: 'sge46' },
    { key: 'conf', label: 'Confinement et déchets', sub: 'Film, ruban et sacs marqués amiante', img: 'sacs' },
    { key: 'hyg', label: 'Hygiène', sub: 'Lingettes de décontamination', img: 'lingettes' },
    { key: 'asp', label: 'Aspiration', sub: 'Aspirateurs classe H et cartouches', img: 'hzc390' }
  ];

  var PRODUCTS = [
    { id: 'combi', cat: 'corps', step: 10, unit: 'Pièce',
      name: 'Combinaison jetable cat. III type 5/6', desc: 'Combinaison blanche à capuche pour le travail en zone amiante.', keys: ['Cat. III', 'Type 5/6'],
      specs: [['Catégorie', 'EPI catégorie III'], ['Type 5', 'EN ISO 13982-1, particules solides'], ['Type 6', 'EN 13034, projections limitées'], ['Couleur', 'Blanche'], ['Capuche', 'Oui'], ['Tailles', 'Plusieurs tailles, dont XL et XXL']] },
    { id: 'surbottes', cat: 'corps', step: 10, unit: 'Paire',
      name: 'Surbottes', desc: 'Surbottes à usage unique, à enfiler par-dessus les chaussures de sécurité.', keys: ['Usage unique'],
      specs: [['Usage', 'Unique'], ['Vente', 'À la paire']] },
    { id: 'latex', cat: 'mains', step: 10, unit: 'Paire',
      name: 'Gants latex jaunes', desc: 'Gants en latex pour les opérations de nettoyage et de décontamination.', keys: ['Latex', 'T10 / XL'],
      specs: [['Matière', 'Latex'], ['Couleur', 'Jaune'], ['Taille', 'T10 (XL)']] },
    { id: 'manut', cat: 'mains', step: 10, unit: 'Paire',
      name: 'Gants de manutention légère', desc: 'Gants en polyester enduit polyuréthane, pour garder une bonne dextérité.', keys: ['Enduit PU', 'T10'],
      specs: [['Support', 'Polyester'], ['Enduction', 'Polyuréthane'], ['Couleur', 'Gris'], ['Taille', 'T10']] },
    { id: 'sge46', cat: 'resp', step: 1, unit: 'Pièce',
      name: 'Demi-masque silicone BLS SGE46', desc: 'Demi-masque réutilisable en silicone, raccord universel pour filtre fileté 40 mm.', keys: ['EN 140:1998', 'EN 148-1'],
      specs: [['Norme', 'EN 140:1998'], ['Raccord', 'Universel EN 148-1 (filetage 40 mm)'], ['Pièce faciale', 'Silicone'], ['Poids', '150 g'], ['Catégorie', 'EPI catégorie III'], ['Filtres conseillés', 'PF10 P3']] },
    { id: 'aviva', cat: 'resp', step: 1, unit: 'Pièce',
      name: 'Demi-masque Scott AVIVA 40', desc: 'Demi-masque réutilisable à raccord 40 mm, prévu pour les filtres PF10 P3.', keys: ['Raccord 40 mm'],
      specs: [['Raccord', 'Filetage 40 mm'], ['Filtres compatibles', 'PF10 P3'], ['Tailles', 'Plusieurs tailles, dont L']] },
    { id: 'pf10', cat: 'resp', step: 20, unit: 'Pièce ou boîte de 20',
      name: 'Filtre 3M Scott PRO2000 PF10 P3', desc: 'Filtre P3 contre les particules solides et liquides, à faible résistance respiratoire.', keys: ['EN 143 · P3 R', 'Filetage 40 mm'],
      specs: [['Classe', 'P3 R (EN 143)'], ['Raccord', 'Filetage 40 mm, EN 148-1'], ['Compatibilité', 'Demi-masques 40 mm, masques complets, Proflow'], ['Conservation', '10 ans en emballage scellé'], ['Conditionnement', 'Boîte de 20']] },
    { id: 'ruban', cat: 'conf', step: 1, unit: 'Rouleau',
      name: 'Ruban adhésif toile polyéthylène', desc: 'Ruban toilé argent pour le calfeutrement et la fermeture des confinements.', keys: ['48 mm × 50 y'],
      specs: [['Dimensions', '48 mm × 50 yards (environ 45 m)'], ['Matière', 'Toile polyéthylène'], ['Couleur', 'Argent']] },
    { id: 'film', cat: 'conf', step: 1, unit: 'Rouleau',
      name: 'Film polyéthylène de confinement', desc: 'Film blanc pour la protection des surfaces et la réalisation des confinements.', keys: ['120 m²'],
      specs: [['Matière', 'Polyéthylène'], ['Couleur', 'Blanc'], ['Surface', '120 m² par rouleau']] },
    { id: 'sacs', cat: 'conf', step: 10, unit: 'Sac, en rouleau',
      name: 'Sacs à déchets marqués Amiante', desc: 'Sacs transparents avec marquage amiante, conditionnés en rouleau.', keys: ['Transparent', 'Marquage amiante'],
      specs: [['Couleur', 'Transparent'], ['Marquage', 'Amiante'], ['Conditionnement', 'Rouleau']] },
    { id: 'lingettes', cat: 'hyg', step: 1, unit: 'Boîte de 100',
      name: 'Lingettes nettoyantes et désinfectantes', desc: 'Pour nettoyer les équipements et les mains en sortie de zone.', keys: ['Boîte de 100'],
      specs: [['Usage', 'Nettoyage et désinfection'], ['Conditionnement', 'Boîte de 100 lingettes']] },
    { id: 'aspi24', cat: 'asp', step: 1, unit: 'Pièce',
      name: 'Aspirateur classe H 24 L à filtre THE', desc: "Aspirateur pour poussières dangereuses, livré avec son kit d'accessoires.", keys: ['Classe H', 'Filtre THE', '24 L'],
      specs: [['Classe de poussières', 'H'], ['Filtration', 'Filtre THE'], ['Cuve', '24 L'], ['Livré avec', "Kit d'accessoires"]] },
    { id: 'hzc390', cat: 'asp', step: 1, unit: 'Pièce',
      name: 'Aspirateur Numatic HZC390L', desc: 'Aspirateur à cartouche jetable étanche, conçu pour les travaux en sous-section 4.', keys: ['Classe H', 'H13', '13 L'],
      specs: [['Classe de poussières', 'H (EN 60335-2-69)'], ['Filtration', 'Cartouche jetable H13 (EN 1822)'], ['Puissance', '1 000 W'], ['Cuve', '13 L'], ['Câble', '10 m'], ['Flexible', '2,4 m, Ø 32 mm'], ['Poids', '13 kg']] },
    { id: 'cartouche', cat: 'asp', step: 1, unit: 'Pièce',
      name: 'Cartouche H13 pour Numatic HZC390L', desc: 'Cartouche de filtration jetable sécurisée, livrée avec tuyau, bouchon et certificat.', keys: ['H13', 'Jetable'],
      specs: [['Filtration', 'H13'], ['Contenu', 'Cartouche, tuyau, bouchon, certificat'], ['Pour', 'Numatic HZC390L']] }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var catLabel = function (k) { var c = CATS.filter(function (c) { return c.key === k; })[0]; return c ? c.label : ''; };
  var byId = function (id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; };
  var plural = function (n) { return n + (n > 1 ? ' articles' : ' article'); };
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var CROSS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  // Sélection conservée dans le navigateur du visiteur
  var KEY = 'bsm-devis-v3';
  var qty = {};
  try { qty = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { qty = {}; }
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(qty)); } catch (e) { /* stockage indisponible */ } };
  var filter = 'all';

  // Gammes
  $('gammes-list').innerHTML = CATS.map(function (c) {
    var n = PRODUCTS.filter(function (p) { return p.cat === c.key; }).length;
    return '<a class="gamme" href="#catalogue" data-cat="' + c.key + '">' +
      '<span class="ph"><img src="' + IMG(c.img) + '" alt="" width="120" height="120" loading="lazy"></span>' +
      '<span><strong>' + esc(c.label) + '</strong><small>' + esc(c.sub) + '</small>' +
      '<span class="meta">' + plural(n) + ARROW + '</span></span></a>';
  }).join('');
  $('f-gammes').innerHTML = CATS.map(function (c) {
    return '<li><a href="#catalogue" data-cat="' + c.key + '">' + esc(c.label) + '</a></li>';
  }).join('');
  document.querySelectorAll('[data-cat]').forEach(function (a) {
    a.addEventListener('click', function () { setFilter(a.getAttribute('data-cat')); });
  });

  // Filtres
  $('filters').innerHTML = [{ key: 'all', label: 'Tous les articles' }].concat(CATS).map(function (c) {
    return '<button type="button" data-f="' + c.key + '" aria-pressed="' + (c.key === 'all') + '">' + esc(c.label) + '</button>';
  }).join('');
  $('filters').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-f]');
    if (b) setFilter(b.getAttribute('data-f'));
  });
  function setFilter(f) {
    filter = f;
    document.querySelectorAll('#filters button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-f') === f));
    });
    renderGrid();
  }

  // Catalogue
  function control(p) {
    var n = qty[p.id] || 0;
    if (!n) return '<button type="button" class="btn ink" data-add="' + p.id + '">Ajouter au devis</button>';
    return '<div class="step">' +
      '<button type="button" data-d="-1" data-id="' + p.id + '" aria-label="Diminuer : ' + esc(p.name) + '">−</button>' +
      '<input type="number" min="0" inputmode="numeric" data-in="' + p.id + '" value="' + n + '" aria-label="Quantité : ' + esc(p.name) + '">' +
      '<button type="button" data-d="1" data-id="' + p.id + '" aria-label="Augmenter : ' + esc(p.name) + '">+</button></div>';
  }
  function renderGrid() {
    var items = PRODUCTS.filter(function (p) { return filter === 'all' || p.cat === filter; });
    $('count').textContent = plural(items.length) + (filter !== 'all' ? ' · ' + catLabel(filter) : '');
    $('grid').innerHTML = items.map(function (p) {
      return '<article class="card' + (qty[p.id] ? ' on' : '') + '">' +
        '<div class="card-img"><span class="cat">' + esc(catLabel(p.cat)) + '</span>' +
        '<img src="' + IMG(p.id) + '" alt="' + esc(p.name) + '" width="210" height="210" loading="lazy" decoding="async"></div>' +
        '<div class="card-body"><h3>' + esc(p.name) + '</h3><p class="desc">' + esc(p.desc) + '</p>' +
        '<ul class="keys">' + p.keys.map(function (k) { return '<li>' + esc(k) + '</li>'; }).join('') + '</ul>' +
        '<details><summary>Fiche technique</summary><dl>' +
        p.specs.map(function (s) { return '<dt>' + esc(s[0]) + '</dt><dd>' + esc(s[1]) + '</dd>'; }).join('') +
        '</dl></details></div>' +
        '<div class="card-foot"><span class="unit">Vendu par<b>' + esc(p.unit) + '</b></span>' + control(p) + '</div>' +
        '</article>';
    }).join('');
  }
  function setQty(id, n) {
    n = Math.max(0, Math.floor(Number(n) || 0));
    if (n) qty[id] = n; else delete qty[id];
    save();
    renderGrid();
    renderSel();
  }
  $('grid').addEventListener('click', function (e) {
    var add = e.target.closest('[data-add]');
    if (add) { var p = byId(add.getAttribute('data-add')); setQty(p.id, p.step); focusQty(p.id); return; }
    var d = e.target.closest('[data-d]');
    if (d) {
      var q = byId(d.getAttribute('data-id'));
      setQty(q.id, (qty[q.id] || 0) + Number(d.getAttribute('data-d')) * q.step);
      var again = document.querySelector('[data-d="' + d.getAttribute('data-d') + '"][data-id="' + q.id + '"]');
      if (again) again.focus(); else focusAdd(q.id);
    }
  });
  $('grid').addEventListener('change', function (e) {
    var input = e.target.closest('[data-in]');
    if (input) setQty(input.getAttribute('data-in'), input.value);
  });
  function focusQty(id) { var el = document.querySelector('[data-in="' + id + '"]'); if (el) el.focus(); }
  function focusAdd(id) { var el = document.querySelector('[data-add="' + id + '"]'); if (el) el.focus(); }

  // Sélection du devis
  function selected() {
    return PRODUCTS.filter(function (p) { return qty[p.id]; });
  }
  function renderSel() {
    var sel = selected();
    $('sel').hidden = !sel.length;
    $('sel-empty').hidden = !!sel.length;
    $('sel').innerHTML = sel.map(function (p) {
      return '<li><img src="' + IMG(p.id) + '" alt="" width="52" height="52" loading="lazy">' +
        '<span class="nm">' + esc(p.name) + '<small>' + esc(p.unit) + '</small></span>' +
        '<span class="q">× ' + qty[p.id] + '</span>' +
        '<button type="button" class="rm" data-rm="' + p.id + '" aria-label="Retirer : ' + esc(p.name) + '">' + CROSS + '</button></li>';
    }).join('');
    document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = sel.length; });
    $('fab').hidden = !sel.length;
  }
  $('sel').addEventListener('click', function (e) {
    var b = e.target.closest('[data-rm]');
    if (b) setQty(b.getAttribute('data-rm'), 0);
  });

  // Envoi : ouvre la messagerie avec la demande rédigée
  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target.elements;
    var val = function (n) { return (f[n].value || '').trim(); };
    var lines = ['Bonjour,', '', 'Je souhaite recevoir un devis pour les articles suivants :', ''];
    var sel = selected();
    if (sel.length) sel.forEach(function (p) { lines.push('- ' + p.name + ' : ' + qty[p.id] + ' (' + p.unit + ')'); });
    else lines.push('(voir message ci-dessous)');
    lines.push('');
    if (val('lieu')) lines.push('Lieu du chantier / livraison : ' + val('lieu'));
    if (val('msg')) { lines.push(''); lines.push(val('msg')); }
    lines.push('');
    lines.push([val('nom'), val('societe'), val('tel')].filter(Boolean).join(' · '));
    var subject = 'Demande de devis' + (val('societe') ? ' — ' + val('societe') : '');
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  });

  renderGrid();
  renderSel();
})();
