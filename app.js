/* Simulacro de Especialidades de Cirugía I (UPAO)
 * Motor del simulador. No necesita servidor: los bancos se cargan como <script> desde esp1.js…esp4.js, junto a index.html.
 * Las constantes de abajo son las únicas que hace falta tocar para cambiar las reglas.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Reglas del simulacro
  // ---------------------------------------------------------------------------
  const CONFIG = {
    ESPECIALIDADES: ['esp1', 'esp2', 'esp3', 'esp4'],
    PREGUNTAS_POR_ESPECIALIDAD: 10,
    TIEMPO_MINUTOS: 50,
    PUNTOS_POR_PREGUNTA: 0.5,
    NOTA_MAXIMA: 20,
    NOTA_APROBATORIA: 11,
    // Refuerzo adaptativo
    INTENTOS_PARA_REFUERZO: 5,   // simulacros terminados antes de empezar a reforzar
    VENTANA_INTENTOS: 5,         // cuántos simulacros recientes se miran para medir los errores
    UMBRAL_1_EXTRA: 0.40,        // error ≥ 40 % en un tema → 1 pregunta extra de ese tema
    UMBRAL_2_EXTRA: 0.60,        // error ≥ 60 % en un tema → 2 preguntas extra
    PREFIJO: 'simcir1_',
    MAX_HISTORIAL: 60
  };

  const BANCO = window.BANCO || {};
  const ESPS = CONFIG.ESPECIALIDADES.filter(function (e) { return BANCO[e] && BANCO[e].preguntas && BANCO[e].preguntas.length; });
  const FALTAN = CONFIG.ESPECIALIDADES.filter(function (e) { return ESPS.indexOf(e) < 0; });
  const POR_ID = {};
  ESPS.forEach(function (e) { BANCO[e].preguntas.forEach(function (q) { POR_ID[q.id] = q; }); });

  const ETIQUETA_CLAVE = {
    docente: 'Clave del docente',
    'guía': 'Clave de la guía',
    libro: 'Clave del libro',
    deducida: 'Clave deducida'
  };
  const AYUDA_CLAVE = {
    docente: 'La respuesta sale de un examen, pretest o diapositiva del docente.',
    'guía': 'No hay clave del docente; la respuesta sale de la guía de estudio actualizada.',
    libro: 'No hay clave del docente ni de la guía; la respuesta sale del libro.',
    deducida: 'No hay clave oficial: la respuesta se dedujo de las fuentes citadas abajo.'
  };

  // ---------------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------------
  const app = document.getElementById('app');

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function conEnlaces(s) {
    return esc(s).replace(/https?:\/\/[^\s<]+[^\s<.,;:)\]»]/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + '</a>';
    });
  }
  function num(n) {
    return new Intl.NumberFormat('es-PE', { maximumFractionDigits: 1 }).format(n);
  }
  function mezclar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function normal(s) { return String(s).toLowerCase().replace(/\s+/g, ' ').trim(); }
  function letra(i) { return 'abcdefgh'[i]; }
  function reloj(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    const m = Math.floor(s / 60), r = s % 60;
    return String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
  }
  function fechaCorta(iso) {
    try {
      return new Date(iso).toLocaleDateString('es-PE', { day: 'numeric', month: 'short' }) + ', ' +
        new Date(iso).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    } catch (e) { return iso; }
  }
  function nombreEsp(e) { return BANCO[e] ? BANCO[e].nombre : e; }

  // Almacenamiento: si el navegador lo bloquea, todo funciona igual en memoria.
  const memoria = {};
  const store = {
    get: function (k, def) {
      try {
        const v = localStorage.getItem(CONFIG.PREFIJO + k);
        return v ? JSON.parse(v) : def;
      } catch (e) { return k in memoria ? memoria[k] : def; }
    },
    set: function (k, v) {
      memoria[k] = v;
      try { localStorage.setItem(CONFIG.PREFIJO + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ }
    },
    del: function (k) {
      delete memoria[k];
      try { localStorage.removeItem(CONFIG.PREFIJO + k); } catch (e) { /* nada */ }
    }
  };

  function historial() { return store.get('historial', []); }

  // ---------------------------------------------------------------------------
  // Dominio por tema y refuerzo adaptativo
  // ---------------------------------------------------------------------------
  // Devuelve {tema: {n, err}} con las preguntas de esa especialidad en los últimos intentos.
  function estadisticasTema(esp, ventana) {
    const hist = historial();
    const ult = ventana ? hist.slice(-ventana) : hist;
    const m = {};
    ult.forEach(function (h) {
      (h.items || []).forEach(function (it) {
        if (it.esp !== esp) return;
        if (!m[it.tema]) m[it.tema] = { n: 0, err: 0 };
        m[it.tema].n++;
        if (!it.ok) m[it.tema].err++;
      });
    });
    return m;
  }

  function refuerzoActivo() { return historial().length >= CONFIG.INTENTOS_PARA_REFUERZO; }

  // Preguntas extra que recibirá cada tema en el próximo simulacro.
  function extrasPorTema(esp) {
    const out = {};
    if (!refuerzoActivo()) return out;
    const est = estadisticasTema(esp, CONFIG.VENTANA_INTENTOS);
    Object.keys(est).forEach(function (t) {
      const r = est[t].n ? est[t].err / est[t].n : 0;
      out[t] = r >= CONFIG.UMBRAL_2_EXTRA ? 2 : (r >= CONFIG.UMBRAL_1_EXTRA ? 1 : 0);
    });
    return out;
  }

  // Cuántas preguntas de cada tema entran en el simulacro de una especialidad.
  function repartoTemas(esp) {
    const N = CONFIG.PREGUNTAS_POR_ESPECIALIDAD;
    const banco = BANCO[esp];
    const disp = {};
    banco.preguntas.forEach(function (q) { disp[q.tema] = (disp[q.tema] || 0) + 1; });
    const temas = banco.temas.filter(function (t) { return disp[t]; });
    const extras = extrasPorTema(esp);
    const est = estadisticasTema(esp, CONFIG.VENTANA_INTENTOS);
    // Un tema sin datos se trata como «a medio dominar»: se quita antes uno que siempre se acierta.
    const tasa = function (t) { return est[t] && est[t].n ? est[t].err / est[t].n : 0.25; };

    const slots = {};
    temas.forEach(function (t) { slots[t] = Math.min(disp[t], 1 + (extras[t] || 0)); });
    let total = temas.reduce(function (s, t) { return s + slots[t]; }, 0);

    // Si sobran preguntas, se quitan primero de los temas mejor dominados.
    if (total > N) {
      const fuertes = mezclar(temas).sort(function (a, b) { return tasa(a) - tasa(b); });
      for (let i = 0; i < fuertes.length && total > N; i++) {
        const t = fuertes[i];
        if (!extras[t] && slots[t] > 0) { slots[t]--; total--; }
      }
      for (let i = 0; i < fuertes.length && total > N; i++) {
        const t = fuertes[i];
        while (slots[t] > 1 && total > N) { slots[t]--; total--; }
      }
    }
    // Si faltan, se completan al azar, en proporción al tamaño de cada tema.
    let guard = 0;
    while (total < N && guard++ < 500) {
      const libres = temas.filter(function (t) { return slots[t] < disp[t]; });
      if (!libres.length) break;
      const peso = libres.reduce(function (s, t) { return s + (disp[t] - slots[t]); }, 0);
      let r = Math.random() * peso, elegido = libres[0];
      for (let i = 0; i < libres.length; i++) {
        r -= (disp[libres[i]] - slots[libres[i]]);
        if (r <= 0) { elegido = libres[i]; break; }
      }
      slots[elegido]++; total++;
    }
    return slots;
  }

  // Prioridad de una pregunta: primero las nunca vistas, luego las falladas, luego las menos vistas.
  function prioridades() {
    const hist = historial();
    const vistas = {};
    hist.forEach(function (h, idx) {
      (h.items || []).forEach(function (it) {
        const v = vistas[it.id] || (vistas[it.id] = { n: 0, ultimaOk: true, ultimoIntento: -1 });
        v.n++; v.ultimaOk = it.ok; v.ultimoIntento = idx;
      });
    });
    const ultimo = hist.length - 1;
    return function (id) {
      const v = vistas[id];
      if (!v) return 0;
      let p = v.ultimaOk ? 2 + v.n : 1;
      if (v.ultimoIntento === ultimo && v.ultimaOk) p += 5;
      return p;
    };
  }

  function puedeMezclar(q) {
    return !q.alternativas.some(function (a) {
      return /\b(todas|todos|ninguna|ninguno|anteriores|ambas|ambos)\b|\b[a-e]\s*y\s*[a-e]\b/i.test(a.texto);
    });
  }

  function armarSimulacro() {
    const prio = prioridades();
    const preguntas = [];
    ESPS.forEach(function (esp) {
      const reparto = repartoTemas(esp);
      const usados = {};
      const elegidas = [];
      Object.keys(reparto).forEach(function (tema) {
        const cand = mezclar(BANCO[esp].preguntas.filter(function (q) { return q.tema === tema; }))
          .sort(function (a, b) { return prio(a.id) - prio(b.id); });
        let k = 0;
        for (let i = 0; i < cand.length && k < reparto[tema]; i++) {
          const clave = normal(cand[i].enunciado);
          if (usados[clave]) continue;
          usados[clave] = true;
          elegidas.push(cand[i]); k++;
        }
      });
      mezclar(elegidas).forEach(function (q) {
        const ids = q.alternativas.map(function (a) { return a.id; });
        preguntas.push({ id: q.id, esp: esp, orden: puedeMezclar(q) ? mezclar(ids) : ids });
      });
    });
    const ahora = Date.now();
    return {
      inicio: ahora,
      limite: ahora + CONFIG.TIEMPO_MINUTOS * 60000,
      preguntas: preguntas,
      resp: {},
      marcadas: {},
      actual: 0
    };
  }

  // ---------------------------------------------------------------------------
  // Vistas compartidas
  // ---------------------------------------------------------------------------
  function barraDominio(esp, tema) {
    const est = estadisticasTema(esp, CONFIG.VENTANA_INTENTOS)[tema];
    const extra = extrasPorTema(esp)[tema] || 0;
    let txt, p = 0, clase = 'sin-datos';
    if (est && est.n) {
      p = Math.round(100 * (est.n - est.err) / est.n);
      txt = (est.n - est.err) + ' de ' + est.n;
      clase = p >= 70 ? 'alto' : (p >= 50 ? 'medio' : 'bajo');
    } else {
      txt = 'Sin datos';
    }
    return '<li class="tema-fila">' +
      '<span class="tema-nombre">' + esc(tema) + '</span>' +
      '<span class="tema-medida">' +
      '<span class="barra ' + clase + '" role="img" aria-label="' + esc(tema + ': ' + txt + ' aciertos') + '"><span style="width:' + p + '%"></span></span>' +
      '<small>' + txt + '</small>' +
      (extra ? '<span class="refuerzo" title="Recibirá ' + extra + ' pregunta' + (extra > 1 ? 's' : '') + ' extra en el próximo simulacro">+' + extra + '</span>' : '') +
      '</span></li>';
  }

  function graficoProgreso(hist) {
    const datos = hist.slice(-20);
    if (!datos.length) {
      return '<p class="vacio">Tu primera nota aparecerá aquí cuando termines un simulacro.</p>';
    }
    const W = 560, H = 220, mx = 38, my = 18, mb = 30;
    const iw = W - mx - 14, ih = H - my - mb;
    const x = function (i) { return mx + (datos.length === 1 ? iw / 2 : i * iw / (datos.length - 1)); };
    const y = function (v) { return my + ih - v / CONFIG.NOTA_MAXIMA * ih; };
    let ejes = '';
    [0, 5, 10, 15, 20].forEach(function (v) {
      ejes += '<line x1="' + mx + '" x2="' + (W - 14) + '" y1="' + y(v) + '" y2="' + y(v) + '" class="g-rejilla"/>' +
        '<text x="' + (mx - 8) + '" y="' + (y(v) + 4) + '" class="g-eje" text-anchor="end">' + v + '</text>';
    });
    const aprob = '<line x1="' + mx + '" x2="' + (W - 14) + '" y1="' + y(CONFIG.NOTA_APROBATORIA) + '" y2="' + y(CONFIG.NOTA_APROBATORIA) + '" class="g-aprob"/>' +
      '<text x="' + (W - 16) + '" y="' + (y(CONFIG.NOTA_APROBATORIA) - 6) + '" class="g-aprob-txt" text-anchor="end">Aprobado: ' + CONFIG.NOTA_APROBATORIA + '</text>';
    const pts = datos.map(function (h, i) { return x(i) + ',' + y(h.nota); }).join(' ');
    let puntos = '';
    datos.forEach(function (h, i) {
      const ok = h.nota >= CONFIG.NOTA_APROBATORIA;
      puntos += '<circle cx="' + x(i) + '" cy="' + y(h.nota) + '" r="5" class="' + (ok ? 'g-ok' : 'g-mal') + '"><title>' +
        esc(fechaCorta(h.fecha) + ': ' + num(h.nota)) + '</title></circle>';
      if (datos.length <= 12 || i === datos.length - 1) {
        puntos += '<text x="' + x(i) + '" y="' + (H - 10) + '" class="g-eje" text-anchor="middle">' + (hist.length - datos.length + i + 1) + '</text>';
      }
    });
    const desc = 'Notas de los últimos ' + datos.length + ' simulacros: ' + datos.map(function (h) { return num(h.nota); }).join(', ');
    return '<svg class="grafico" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(desc) + '">' +
      ejes + aprob + '<polyline points="' + pts + '" class="g-linea"/>' + puntos + '</svg>' +
      '<p class="grafico-pie">Eje horizontal: número de simulacro. Eje vertical: nota sobre 20.</p>';
  }

  // ---------------------------------------------------------------------------
  // Inicio
  // ---------------------------------------------------------------------------
  function renderInicio() {
    detenerReloj();
    const hist = historial();
    const sesion = store.get('sesion', null);
    const totalPreg = ESPS.length * CONFIG.PREGUNTAS_POR_ESPECIALIDAD;
    const refuerzo = refuerzoActivo();
    const faltanRef = Math.max(0, CONFIG.INTENTOS_PARA_REFUERZO - hist.length);

    let columnas = '';
    ESPS.forEach(function (esp) {
      const b = BANCO[esp];
      columnas += '<article class="columna" data-esp="' + esp + '">' +
        '<header class="columna-cabeza"><h3>' + esc(b.nombre) + '</h3>' +
        '<p>' + CONFIG.PREGUNTAS_POR_ESPECIALIDAD + ' preguntas en el simulacro</p></header>' +
        '<ul class="temas">' + b.temas.map(function (t) { return barraDominio(esp, t); }).join('') + '</ul>' +
        '<footer class="columna-pie">Banco: ' + b.preguntas.length + ' preguntas</footer>' +
        '</article>';
    });

    const aviso = FALTAN.length
      ? '<p class="aviso">No se encontró el banco de ' + FALTAN.join(', ') +
        '. Revisa que el archivo esté junto a <code>index.html</code>. El simulacro se arma con las especialidades que sí cargaron.</p>'
      : '';

    const continuar = sesion
      ? '<button class="boton boton-grande" id="b-continuar">Continuar el simulacro en curso</button>' +
        '<button class="boton boton-suave" id="b-descartar">Descartarlo y empezar otro</button>'
      : '<button class="boton boton-grande" id="b-empezar"' + (ESPS.length ? '' : ' disabled') + '>Empezar simulacro</button>';

    let lista = '';
    if (hist.length) {
      lista = '<ol class="historial" reversed>' + hist.slice().reverse().slice(0, 10).map(function (h, i) {
        const idx = hist.length - 1 - i;
        const ok = h.nota >= CONFIG.NOTA_APROBATORIA;
        return '<li><span class="h-fecha">' + esc(fechaCorta(h.fecha)) + '</span>' +
          '<span class="h-nota ' + (ok ? 'ok' : 'mal') + '">' + num(h.nota) + '</span>' +
          '<button class="enlace" data-revisar="' + idx + '">Ver revisión</button></li>';
      }).join('') + '</ol>';
    }

    app.innerHTML =
      '<header class="portada">' +
        '<div class="nota-adhesiva nota-rosa" aria-hidden="true">Cada pregunta que revisas hoy es una que ya no te sorprende en el examen ♡</div>' +
        '<div class="portada-titulo">' +
          '<h1>Simulacro de Especialidades</h1>' +
          '<p class="subtitulo">Cirugía I, UPAO. Oncología, Anestesiología, Traumatología y Cirugía pediátrica.</p>' +
        '</div>' +
        '<div class="nota-adhesiva nota-lila">' +
          '<strong>' + totalPreg + ' preguntas</strong><br>' + CONFIG.TIEMPO_MINUTOS + ' minutos<br>' +
          num(CONFIG.PUNTOS_POR_PREGUNTA) + ' puntos cada una<br>Apruebas con ' + CONFIG.NOTA_APROBATORIA +
        '</div>' +
      '</header>' +
      aviso +
      '<section class="arranque">' + continuar + '</section>' +
      '<section aria-labelledby="t-dominio">' +
        '<h2 id="t-dominio" class="cinta">Mi dominio por tema</h2>' +
        '<p class="ayuda">Aciertos en los últimos ' + CONFIG.VENTANA_INTENTOS + ' simulacros. ' +
        (refuerzo
          ? 'Los temas con <span class="refuerzo">+1</span> o <span class="refuerzo">+2</span> recibirán preguntas extra en el próximo simulacro.'
          : 'El refuerzo de temas débiles empieza después de ' + CONFIG.INTENTOS_PARA_REFUERZO + ' simulacros' +
            (faltanRef ? ' (te falta' + (faltanRef > 1 ? 'n ' : ' ') + faltanRef + ')' : '') + '.') +
        '</p>' +
        '<div class="planificador">' + columnas + '</div>' +
      '</section>' +
      '<section class="fila-inferior">' +
        '<article class="tarjeta progreso" aria-labelledby="t-progreso"><h2 id="t-progreso">Mi progreso</h2>' +
          graficoProgreso(hist) + lista + '</article>' +
        '<aside class="tarjeta recuerda" aria-labelledby="t-recuerda"><h2 id="t-recuerda">Cómo funciona</h2>' +
          '<ul>' +
            '<li>Salen ' + CONFIG.PREGUNTAS_POR_ESPECIALIDAD + ' preguntas por especialidad y un reloj de ' + CONFIG.TIEMPO_MINUTOS + ' minutos para todo.</li>' +
            '<li>Puedes saltar, volver y marcar preguntas. Al acabarse el tiempo, el simulacro se entrega solo.</li>' +
            '<li>En la revisión ves por qué es correcta cada respuesta, por qué no lo es la tuya y de dónde sale el dato.</li>' +
            '<li>Si el docente y la guía no coinciden, se te dice qué marcar en el examen.</li>' +
            '<li>Tu avance se guarda en este navegador.</li>' +
          '</ul>' +
          (hist.length ? '<button class="enlace enlace-peligro" id="b-borrar">Borrar mi progreso</button>' : '') +
        '</aside>' +
      '</section>';

    const b = function (id, fn) { const e = document.getElementById(id); if (e) e.addEventListener('click', fn); };
    b('b-empezar', empezar);
    b('b-continuar', function () { abrirExamen(store.get('sesion', null)); });
    b('b-descartar', function () {
      confirmar('¿Descartar el simulacro en curso?', 'Se perderán las respuestas que llevas. No cuenta para tu progreso.', 'Descartar', function () {
        store.del('sesion'); renderInicio();
      });
    });
    b('b-borrar', function () {
      confirmar('¿Borrar todo tu progreso?', 'Se eliminan tus notas, el dominio por tema y el refuerzo. No se puede deshacer.', 'Borrar progreso', function () {
        store.del('historial'); store.del('sesion'); renderInicio();
      });
    });
    app.querySelectorAll('[data-revisar]').forEach(function (bt) {
      bt.addEventListener('click', function () { renderResultados(historial()[+bt.getAttribute('data-revisar')], false); });
    });
    window.scrollTo(0, 0);
  }

  function empezar() {
    const s = armarSimulacro();
    store.set('sesion', s);
    abrirExamen(s);
  }

  // ---------------------------------------------------------------------------
  // Examen
  // ---------------------------------------------------------------------------
  let sesion = null;
  let temporizador = null;

  function detenerReloj() { if (temporizador) { clearInterval(temporizador); temporizador = null; } }

  function abrirExamen(s) {
    if (!s) { renderInicio(); return; }
    // Quita preguntas que ya no existan en los bancos (por ejemplo, si se editó un archivo).
    s.preguntas = s.preguntas.filter(function (p) { return POR_ID[p.id]; });
    if (!s.preguntas.length) { store.del('sesion'); renderInicio(); return; }
    sesion = s;
    if (Date.now() >= s.limite) { finalizar(true); return; }
    renderExamen();
    detenerReloj();
    temporizador = setInterval(tic, 1000);
    tic();
  }

  function guardar() { store.set('sesion', sesion); }

  function tic() {
    if (!sesion) return;
    const resta = sesion.limite - Date.now();
    const r = document.getElementById('reloj');
    if (r) {
      r.textContent = reloj(resta);
      r.parentElement.classList.toggle('poco-tiempo', resta <= 5 * 60000);
    }
    if (resta <= 0) finalizar(true);
  }

  function respondidas() { return Object.keys(sesion.resp).length; }

  function renderExamen() {
    const total = sesion.preguntas.length;
    let mapa = '';
    ESPS.forEach(function (esp) {
      const idxs = [];
      sesion.preguntas.forEach(function (p, i) { if (p.esp === esp) idxs.push(i); });
      if (!idxs.length) return;
      mapa += '<div class="mapa-col" data-esp="' + esp + '"><p>' + esc(nombreEsp(esp)) + '</p><div class="mapa-casillas">' +
        idxs.map(function (i) {
          return '<button class="casilla-nav" data-ir="' + i + '" aria-label="Pregunta ' + (i + 1) + '">' + (i + 1) + '</button>';
        }).join('') + '</div></div>';
    });

    app.innerHTML =
      '<header class="barra-examen">' +
        '<p class="barra-titulo">Simulacro en curso</p>' +
        '<p class="reloj" aria-label="Tiempo restante"><span class="reloj-icono" aria-hidden="true">⏱</span> <span id="reloj">' + reloj(sesion.limite - Date.now()) + '</span></p>' +
        '<p class="barra-avance"><span id="avance">' + respondidas() + '</span> de ' + total + ' respondidas</p>' +
        '<button class="boton boton-suave" id="b-terminar">Terminar simulacro</button>' +
      '</header>' +
      '<div class="examen">' +
        '<section class="pregunta" id="pregunta" aria-live="polite"></section>' +
        '<nav class="mapa" aria-label="Ir a una pregunta">' + mapa +
          '<p class="mapa-leyenda"><span class="ley ley-resp"></span> respondida <span class="ley ley-marca"></span> marcada para revisar</p>' +
        '</nav>' +
      '</div>';

    document.getElementById('b-terminar').addEventListener('click', pedirTerminar);
    app.querySelectorAll('[data-ir]').forEach(function (bt) {
      bt.addEventListener('click', function () { irA(+bt.getAttribute('data-ir')); });
    });
    pintarPregunta();
  }

  function irA(i) {
    sesion.actual = Math.max(0, Math.min(sesion.preguntas.length - 1, i));
    guardar();
    pintarPregunta();
    const p = document.getElementById('pregunta');
    if (p) {
      p.focus({ preventScroll: true });
      if (p.getBoundingClientRect().top < 0) p.scrollIntoView({ block: 'start' });
    }
  }

  function pintarPregunta() {
    const i = sesion.actual;
    const p = sesion.preguntas[i];
    const q = POR_ID[p.id];
    const total = sesion.preguntas.length;
    const marcada = !!sesion.marcadas[i];
    const alts = p.orden.map(function (id) { return q.alternativas.find(function (a) { return a.id === id; }); });

    const cont = document.getElementById('pregunta');
    cont.setAttribute('data-esp', p.esp);
    cont.setAttribute('tabindex', '-1');
    cont.innerHTML =
      '<header class="pregunta-cabeza">' +
        '<p class="pregunta-esp">' + esc(nombreEsp(p.esp)) + '</p>' +
        '<p class="pregunta-num">Pregunta ' + (i + 1) + ' de ' + total + '</p>' +
      '</header>' +
      '<p class="pregunta-tema">' + esc(q.tema) + '</p>' +
      '<fieldset class="alternativas">' +
        '<legend class="enunciado">' + esc(q.enunciado) + '</legend>' +
        alts.map(function (a, k) {
          const sel = sesion.resp[i] === a.id;
          return '<label class="alt' + (sel ? ' elegida' : '') + '">' +
            '<input type="radio" name="alt" value="' + esc(a.id) + '"' + (sel ? ' checked' : '') + '>' +
            '<span class="casilla" aria-hidden="true"></span>' +
            '<span class="alt-letra">' + letra(k) + ')</span>' +
            '<span class="alt-texto">' + esc(a.texto) + '</span></label>';
        }).join('') +
      '</fieldset>' +
      '<div class="acciones">' +
        '<button class="boton boton-suave" id="b-ant"' + (i === 0 ? ' disabled' : '') + '>Anterior</button>' +
        '<button class="boton boton-marca' + (marcada ? ' activa' : '') + '" id="b-marcar" aria-pressed="' + marcada + '">' +
          (marcada ? 'Marcada para revisar' : 'Marcar para revisar') + '</button>' +
        '<button class="enlace" id="b-borrar-resp"' + (sesion.resp[i] ? '' : ' hidden') + '>Borrar respuesta</button>' +
        (i < total - 1
          ? '<button class="boton" id="b-sig">Siguiente</button>'
          : '<button class="boton" id="b-fin">Terminar simulacro</button>') +
      '</div>' +
      '<p class="atajos">Atajos: letras a–e para responder, flechas izquierda y derecha para cambiar de pregunta, M para marcar.</p>';

    cont.querySelectorAll('input[name=alt]').forEach(function (inp) {
      inp.addEventListener('change', function () { responder(inp.value); });
    });
    const on = function (id, fn) { const e = document.getElementById(id); if (e) e.addEventListener('click', fn); };
    on('b-ant', function () { irA(i - 1); });
    on('b-sig', function () { irA(i + 1); });
    on('b-fin', pedirTerminar);
    on('b-marcar', alternarMarca);
    on('b-borrar-resp', function () {
      delete sesion.resp[i]; guardar(); pintarPregunta(); actualizarMapa();
      const primera = document.querySelector('#pregunta input[name=alt]');
      if (primera) primera.focus();
    });
    actualizarMapa();
  }

  function responder(id) {
    sesion.resp[sesion.actual] = id;
    guardar();
    document.querySelectorAll('.alt').forEach(function (l) {
      l.classList.toggle('elegida', l.querySelector('input').value === id);
    });
    const br = document.getElementById('b-borrar-resp');
    if (br) br.hidden = false;
    actualizarMapa();
  }

  function alternarMarca() {
    const i = sesion.actual;
    if (sesion.marcadas[i]) delete sesion.marcadas[i]; else sesion.marcadas[i] = true;
    guardar();
    pintarPregunta();
  }

  function actualizarMapa() {
    app.querySelectorAll('[data-ir]').forEach(function (bt) {
      const i = +bt.getAttribute('data-ir');
      const r = !!sesion.resp[i], m = !!sesion.marcadas[i], a = i === sesion.actual;
      bt.classList.toggle('respondida', r);
      bt.classList.toggle('marcada', m);
      bt.classList.toggle('actual', a);
      if (a) bt.setAttribute('aria-current', 'step'); else bt.removeAttribute('aria-current');
      bt.setAttribute('aria-label', 'Pregunta ' + (i + 1) + (r ? ', respondida' : ', sin responder') + (m ? ', marcada' : ''));
    });
    const av = document.getElementById('avance');
    if (av) av.textContent = respondidas();
  }

  function pedirTerminar() {
    const total = sesion.preguntas.length;
    const faltan = total - respondidas();
    const marc = Object.keys(sesion.marcadas).length;
    let texto = 'Respondiste ' + respondidas() + ' de ' + total + '.';
    if (faltan) texto += ' Las ' + faltan + ' sin responder cuentan como incorrectas.';
    if (marc) texto += ' Tienes ' + marc + ' marcada' + (marc > 1 ? 's' : '') + ' para revisar.';
    confirmar('¿Terminar el simulacro?', texto, 'Terminar y ver mi nota', function () { finalizar(false); });
  }

  function finalizar(porTiempo) {
    detenerReloj();
    if (!sesion) return;
    const dlg = document.getElementById('dialogo');
    if (dlg.open) { dlg.onclose = null; dlg.close(); }
    const s = sesion;
    sesion = null;
    const items = s.preguntas.map(function (p, i) {
      const q = POR_ID[p.id];
      const r = s.resp[i] || null;
      return { id: p.id, esp: p.esp, tema: q.tema, resp: r, ok: r === q.correcta, orden: p.orden, marcada: !!s.marcadas[i] };
    });
    const aciertos = items.filter(function (it) { return it.ok; }).length;
    const porEsp = {};
    items.forEach(function (it) {
      const e = porEsp[it.esp] || (porEsp[it.esp] = { aciertos: 0, total: 0 });
      e.total++; if (it.ok) e.aciertos++;
    });
    const intento = {
      fecha: new Date().toISOString(),
      nota: aciertos * CONFIG.PUNTOS_POR_PREGUNTA,
      aciertos: aciertos,
      total: items.length,
      duracionSeg: Math.round((Math.min(Date.now(), s.limite) - s.inicio) / 1000),
      porTiempo: !!porTiempo,
      porEsp: porEsp,
      items: items
    };
    const hist = historial();
    hist.push(intento);
    while (hist.length > CONFIG.MAX_HISTORIAL) hist.shift();
    store.set('historial', hist);
    store.del('sesion');
    renderResultados(intento, true);
  }

  // ---------------------------------------------------------------------------
  // Resultados y revisión
  // ---------------------------------------------------------------------------
  let filtro = { estado: 'todas', esp: 'todas' };

  function renderResultados(intento, recien) {
    detenerReloj();
    if (!intento) { renderInicio(); return; }
    filtro = { estado: recien ? 'incorrectas' : 'todas', esp: 'todas' };
    const ok = intento.nota >= CONFIG.NOTA_APROBATORIA;
    const dur = intento.duracionSeg || 0;
    const sinResp = intento.items.filter(function (it) { return !it.resp; }).length;

    let columnas = '';
    ESPS.forEach(function (esp) {
      const e = intento.porEsp[esp];
      if (!e) return;
      const temas = {};
      intento.items.forEach(function (it) {
        if (it.esp !== esp) return;
        const t = temas[it.tema] || (temas[it.tema] = { a: 0, n: 0 });
        t.n++; if (it.ok) t.a++;
      });
      columnas += '<article class="columna" data-esp="' + esp + '">' +
        '<header class="columna-cabeza"><h3>' + esc(nombreEsp(esp)) + '</h3>' +
        '<p class="columna-puntos"><strong>' + num(e.aciertos * CONFIG.PUNTOS_POR_PREGUNTA) + '</strong> de ' + num(e.total * CONFIG.PUNTOS_POR_PREGUNTA) + ' puntos</p></header>' +
        '<ul class="temas">' + BANCO[esp].temas.filter(function (t) { return temas[t]; }).map(function (t) {
          const x = temas[t];
          return '<li class="tema-fila"><span class="tema-nombre">' + esc(t) + '</span><span class="tema-medida">' +
            '<span class="puntos">' + Array.from({ length: x.n }, function (_, k) {
              return '<span class="punto ' + (k < x.a ? 'p-ok' : 'p-mal') + '"></span>';
            }).join('') + '</span><small>' + x.a + ' de ' + x.n + '</small></span></li>';
        }).join('') + '</ul>' +
        '<footer class="columna-pie">' + e.aciertos + ' de ' + e.total + ' correctas</footer></article>';
    });

    // Temas que se reforzarán en el próximo simulacro.
    let proximo = '';
    if (refuerzoActivo()) {
      const lista = [];
      ESPS.forEach(function (esp) {
        const ex = extrasPorTema(esp);
        Object.keys(ex).forEach(function (t) { if (ex[t]) lista.push(esc(t) + ' (' + esc(nombreEsp(esp)) + ', +' + ex[t] + ')'); });
      });
      proximo = lista.length
        ? '<p class="ayuda">En el próximo simulacro reforzaré: ' + lista.join('; ') + '.</p>'
        : '<p class="ayuda">Ningún tema llega al ' + Math.round(CONFIG.UMBRAL_1_EXTRA * 100) + ' % de error en tus últimos ' + CONFIG.VENTANA_INTENTOS + ' simulacros: el próximo saldrá con el reparto normal.</p>';
    } else {
      const f = CONFIG.INTENTOS_PARA_REFUERZO - historial().length;
      proximo = '<p class="ayuda">El refuerzo de temas débiles empieza después de ' + CONFIG.INTENTOS_PARA_REFUERZO + ' simulacros' + (f > 0 ? ' (te falta' + (f > 1 ? 'n ' : ' ') + f + ')' : '') + '.</p>';
    }

    const chipsEsp = '<button class="chip" data-fesp="todas">Todas las especialidades</button>' +
      ESPS.filter(function (e) { return intento.porEsp[e]; }).map(function (e) {
        return '<button class="chip" data-fesp="' + e + '" data-esp="' + e + '">' + esc(nombreEsp(e)) + '</button>';
      }).join('');

    app.innerHTML =
      '<header class="resultado">' +
        '<div class="nota-adhesiva nota-grande ' + (ok ? 'nota-verde' : 'nota-rosa') + '">' +
          '<p class="nota-numero">' + num(intento.nota) + '<span> / ' + CONFIG.NOTA_MAXIMA + '</span></p>' +
          '<p class="nota-estado">' + (ok ? 'Aprobado' : 'Desaprobado') + '</p>' +
        '</div>' +
        '<div class="resultado-texto">' +
          '<h1>' + (ok ? '¡Lo lograste!' : 'Todavía no, pero ya sabes qué repasar') + '</h1>' +
          '<p>' + intento.aciertos + ' correctas de ' + intento.total + '. ' +
            (sinResp ? sinResp + ' sin responder. ' : '') +
            'Tiempo usado: ' + reloj(dur * 1000) + (intento.porTiempo ? ' (se entregó al acabarse el tiempo)' : '') + '.</p>' +
          '<p class="h-fecha">' + esc(fechaCorta(intento.fecha)) + '</p>' +
          proximo +
          '<div class="resultado-botones">' +
            '<button class="boton" id="b-nuevo">Nuevo simulacro</button>' +
            '<button class="boton boton-suave" id="b-inicio">Volver al inicio</button>' +
            '<button class="boton boton-suave" id="b-imprimir">Imprimir revisión</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<section aria-labelledby="t-por-esp"><h2 id="t-por-esp" class="cinta">Por especialidad</h2>' +
        '<div class="planificador">' + columnas + '</div></section>' +
      '<section aria-labelledby="t-revision" class="revision">' +
        '<h2 id="t-revision" class="cinta">Revisión pregunta por pregunta</h2>' +
        '<div class="filtros" role="group" aria-label="Filtrar preguntas">' +
          '<div class="chips">' +
            '<button class="chip" data-festado="todas">Todas</button>' +
            '<button class="chip" data-festado="incorrectas">Incorrectas y sin responder</button>' +
            '<button class="chip" data-festado="correctas">Correctas</button>' +
            '<button class="chip" data-festado="marcadas">Marcadas</button>' +
          '</div>' +
          '<div class="chips">' + chipsEsp + '</div>' +
        '</div>' +
        '<p class="ayuda conteo"><span id="conteo"></span> <button class="enlace" id="b-abrir">Abrir todas</button></p>' +
        '<div id="lista-revision"></div>' +
      '</section>';

    document.getElementById('b-nuevo').addEventListener('click', function () {
      if (store.get('sesion', null)) { abrirExamen(store.get('sesion', null)); return; }
      empezar();
    });
    document.getElementById('b-inicio').addEventListener('click', renderInicio);
    document.getElementById('b-imprimir').addEventListener('click', function () { window.print(); });
    document.getElementById('b-abrir').addEventListener('click', function () {
      const ds = app.querySelectorAll('details.revisar');
      const abrir = Array.prototype.some.call(ds, function (d) { return !d.open; });
      ds.forEach(function (d) { d.open = abrir; });
      this.textContent = abrir ? 'Cerrar todas' : 'Abrir todas';
    });
    app.querySelectorAll('[data-festado]').forEach(function (bt) {
      bt.addEventListener('click', function () { filtro.estado = bt.getAttribute('data-festado'); pintarRevision(intento); });
    });
    app.querySelectorAll('[data-fesp]').forEach(function (bt) {
      bt.addEventListener('click', function () { filtro.esp = bt.getAttribute('data-fesp'); pintarRevision(intento); });
    });
    pintarRevision(intento);
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  function pintarRevision(intento) {
    app.querySelectorAll('[data-festado]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-festado') === filtro.estado); });
    app.querySelectorAll('[data-fesp]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-fesp') === filtro.esp); });
    const visibles = [];
    intento.items.forEach(function (it, i) {
      if (!POR_ID[it.id]) return;
      if (filtro.esp !== 'todas' && it.esp !== filtro.esp) return;
      if (filtro.estado === 'incorrectas' && it.ok) return;
      if (filtro.estado === 'correctas' && !it.ok) return;
      if (filtro.estado === 'marcadas' && !it.marcada) return;
      visibles.push(tarjetaRevision(it, i, intento.items.length));
    });
    const faltantes = intento.items.filter(function (it) { return !POR_ID[it.id]; }).length;
    document.getElementById('conteo').textContent = visibles.length + (visibles.length === 1 ? ' pregunta' : ' preguntas') + ' en esta vista.' +
      (faltantes ? ' ' + faltantes + ' ya no están en los bancos y no se pueden mostrar.' : '');
    const ba = document.getElementById('b-abrir');
    if (ba) { ba.textContent = 'Abrir todas'; ba.hidden = !visibles.length; }
    document.getElementById('lista-revision').innerHTML = visibles.length
      ? visibles.join('')
      : '<p class="vacio">No hay preguntas con este filtro. ' + (filtro.estado === 'incorrectas' ? '¡Las respondiste todas bien!' : 'Prueba con «Todas».') + '</p>';
  }

  function resaltarDato(texto, dato) {
    if (!dato) return esc(texto);
    const i = texto.indexOf(dato);
    if (i < 0) return esc(texto);
    return esc(texto.slice(0, i)) + '<mark class="dato">' + esc(dato) + '</mark>' + esc(texto.slice(i + dato.length));
  }

  function tarjetaRevision(it, i, total) {
    const q = POR_ID[it.id];
    const orden = (it.orden && it.orden.length === q.alternativas.length) ? it.orden : q.alternativas.map(function (a) { return a.id; });
    const alts = orden.map(function (id) { return q.alternativas.find(function (a) { return a.id === id; }); }).filter(Boolean);
    const L = {};
    alts.forEach(function (a, k) { L[a.id] = letra(k); });
    const correcta = q.alternativas.find(function (a) { return a.id === q.correcta; });
    const tuya = it.resp ? q.alternativas.find(function (a) { return a.id === it.resp; }) : null;
    const estado = it.ok ? 'correcta' : (it.resp ? 'incorrecta' : 'sin-responder');
    const estadoTxt = it.ok ? 'Correcta' : (it.resp ? 'Incorrecta' : 'Sin responder');

    const lista = alts.map(function (a) {
      let cls = '', nota = '';
      if (a.id === q.correcta) { cls = 'es-correcta'; nota = '<span class="marca-alt">Respuesta correcta</span>'; }
      if (it.resp === a.id && !it.ok) { cls = 'es-tuya'; nota = '<span class="marca-alt">Tu respuesta</span>'; }
      if (it.resp === a.id && it.ok) nota = '<span class="marca-alt">Respuesta correcta, la tuya</span>';
      return '<li class="' + cls + '"><span class="alt-letra">' + L[a.id] + ')</span> <span>' + esc(a.texto) + '</span> ' + nota + '</li>';
    }).join('');

    const otras = alts.filter(function (a) { return a.id !== q.correcta && a.id !== it.resp; });
    const pn = q.por_que_no || {};
    const f = q.fuentes || {};

    let fuentes = '';
    if (f.docente) fuentes += '<div class="fuente"><h5>Tu docente dice</h5><p>' + conEnlaces(f.docente) + '</p></div>';
    if (f.discrepancia && f.guia) {
      const k = f.guia.indexOf('Para el examen');
      const antes = k > 0 ? f.guia.slice(0, k).trim() : f.guia;
      const examen = k > 0 ? f.guia.slice(k).trim() : '';
      fuentes += '<div class="fuente discrepancia"><h5>Ojo: las fuentes no coinciden</h5><p>' + conEnlaces(antes) + '</p>' +
        (examen ? '<p class="para-examen">' + conEnlaces(examen) + '</p>' : '') + '</div>';
    } else if (f.guia) {
      fuentes += '<div class="fuente"><h5>Dato curioso: la guía</h5><p>' + conEnlaces(f.guia) + '</p></div>';
    }
    if (f.libro) fuentes += '<div class="fuente"><h5>Libro o fuente oficial</h5><p>' + conEnlaces(f.libro) + '</p></div>';

    const refs = (q.referencias || []).map(function (r) { return '<li>' + conEnlaces(r) + '</li>'; }).join('');

    const etiquetas =
      '<span class="etiqueta" title="' + esc(q.procedencia || '') + '">' + (q.origen === 'creada' ? 'Pregunta creada para practicar' : 'Pregunta de examen') + '</span>' +
      '<span class="etiqueta etiqueta-' + esc(q.tipo_clave) + '" title="' + esc(AYUDA_CLAVE[q.tipo_clave] || '') + '">' + esc(ETIQUETA_CLAVE[q.tipo_clave] || q.tipo_clave) + '</span>' +
      (f.discrepancia ? '<span class="etiqueta etiqueta-disc">Discrepancia entre fuentes</span>' : '') +
      (it.marcada ? '<span class="etiqueta">La marcaste para revisar</span>' : '');

    return '<details class="revisar ' + estado + '" data-esp="' + it.esp + '">' +
      '<summary>' +
        '<span class="r-num">' + (i + 1) + '</span>' +
        '<span class="r-resumen"><span class="r-esp">' + esc(nombreEsp(it.esp)) + '</span>' +
        '<span class="r-enunciado">' + esc(q.enunciado) + '</span></span>' +
        '<span class="r-estado">' + estadoTxt + '</span>' +
      '</summary>' +
      '<div class="r-cuerpo">' +
        '<p class="r-tema">' + esc(q.tema) + (q.subtema ? ' › ' + esc(q.subtema) : '') + '</p>' +
        '<p class="r-enunciado-completo">' + resaltarDato(q.enunciado, q.dato_clave) + '</p>' +
        (q.dato_clave ? '<p class="dato-clave"><strong>Dato clave:</strong> «' + esc(q.dato_clave) + '»</p>' : '') +
        '<ul class="r-alternativas">' + lista + '</ul>' +
        '<h4>Por qué es correcta «' + esc(correcta ? correcta.texto : '') + '»</h4>' +
        '<p>' + conEnlaces(q.por_que_correcta) + '</p>' +
        (tuya && !it.ok ? '<h4>Por qué no es tu respuesta, «' + esc(tuya.texto) + '»</h4><p>' + conEnlaces(pn[tuya.id] || '') + '</p>' : '') +
        (otras.length ? '<h4>Las otras alternativas</h4><ul class="r-otras">' + otras.map(function (a) {
          return '<li><strong>«' + esc(a.texto) + '»</strong>: ' + conEnlaces(pn[a.id] || '') + '</li>';
        }).join('') + '</ul>' : '') +
        '<div class="fuentes"><h4>Fuentes</h4>' + fuentes +
          (refs ? '<h5 class="refs-titulo">Referencias</h5><ol class="referencias">' + refs + '</ol>' : '') +
        '</div>' +
        '<p class="etiquetas">' + etiquetas + '</p>' +
        (q.procedencia ? '<p class="procedencia">Procedencia: ' + esc(q.procedencia) + '</p>' : '') +
      '</div></details>';
  }

  // Al imprimir se abren todas las tarjetas de la revisión.
  let abiertas = [];
  window.addEventListener('beforeprint', function () {
    abiertas = [];
    document.querySelectorAll('details.revisar').forEach(function (d) { if (!d.open) { abiertas.push(d); d.open = true; } });
  });
  window.addEventListener('afterprint', function () { abiertas.forEach(function (d) { d.open = false; }); abiertas = []; });

  // ---------------------------------------------------------------------------
  // Diálogo de confirmación
  // ---------------------------------------------------------------------------
  function confirmar(titulo, texto, aceptar, alAceptar) {
    const d = document.getElementById('dialogo');
    document.getElementById('dialogo-titulo').textContent = titulo;
    document.getElementById('dialogo-texto').textContent = texto;
    document.getElementById('dialogo-aceptar').textContent = aceptar;
    if (typeof d.showModal !== 'function') {
      if (window.confirm(titulo + '\n\n' + texto)) alAceptar();
      return;
    }
    d.returnValue = '';
    d.onclose = function () { if (d.returnValue === 'aceptar') alAceptar(); };
    d.showModal();
  }

  // ---------------------------------------------------------------------------
  // Teclado durante el examen
  // ---------------------------------------------------------------------------
  document.addEventListener('keydown', function (e) {
    if (!sesion || !document.getElementById('pregunta')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.getElementById('dialogo').open) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'TEXTAREA' || (tag === 'INPUT' && e.target.type === 'text')) return;
    const k = e.key.toLowerCase();
    const inputs = document.querySelectorAll('#pregunta input[name=alt]');
    const pos = 'abcde'.indexOf(k) >= 0 ? 'abcde'.indexOf(k) : ('12345'.indexOf(k) >= 0 ? '12345'.indexOf(k) : -1);
    if (pos >= 0 && inputs[pos]) {
      e.preventDefault();
      inputs[pos].checked = true;
      responder(inputs[pos].value);
      const n = document.querySelectorAll('#pregunta input[name=alt]')[pos];
      if (n) n.focus();
    } else if (e.key === 'ArrowRight') {
      // Izquierda y derecha cambian de pregunta; arriba y abajo siguen moviéndose entre alternativas.
      e.preventDefault(); irA(sesion.actual + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault(); irA(sesion.actual - 1);
    } else if (k === 'm') {
      e.preventDefault(); alternarMarca();
    }
  });

  // ---------------------------------------------------------------------------
  // Arranque
  // ---------------------------------------------------------------------------
  if (!ESPS.length) {
    app.innerHTML = '<p class="aviso">No se cargó ningún banco de preguntas. Copia los archivos <code>esp1.js</code> a <code>esp4.js</code> junto a este <code>index.html</code>, y recarga la página.</p>';
    return;
  }
  renderInicio();
})();
