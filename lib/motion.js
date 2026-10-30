// Framer-style motion layer: blur-in word reveals, staggered card entrances,
// scroll-linked image scaling, sticky blurred header, infinite tickers, text-roll buttons.
const EASE = 'cubic-bezier(.22,1,.36,1)';
const done = new WeakSet();
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const BLUR = (y, b) => [{ opacity: 0, filter: `blur(${b}px)`, translate: `0 ${y}` }, { opacity: 1, filter: 'blur(0px)', translate: '0 0' }];

export function init(root = document) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const cs = el => getComputedStyle(el), anims = [], offs = [];
  const hiddenAtInit = document.visibilityState !== 'visible';
  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); offs.push(() => t.removeEventListener(ev, fn, o)); };
  const sections = [...root.querySelectorAll('section[data-screen-label]')];
  const all = sections.flatMap(s => [...s.querySelectorAll('*')]);
  const isDark = el => { const s = el.closest('section'); return !!s && cs(s).backgroundColor === 'rgb(0, 0, 0)'; };
  const within = (el, list) => list.some(g => g !== el && g.contains(el));
  const glass = all.filter(el => el.tagName === 'DIV' && cs(el).backgroundColor === 'rgba(255, 255, 255, 0.22)');
  const marquee = all.filter(el => el.tagName === 'DIV' && cs(el).whiteSpace === 'nowrap' && cs(el).display === 'flex' && el.parentElement && cs(el.parentElement).backgroundImage.includes('radial-gradient'));
  const strip = sections[0] && [...sections[0].querySelectorAll('div')].find(d => d.children.length >= 5 && [...d.children].every(c => c.tagName === 'SPAN') && cs(d).color === 'rgb(154, 154, 154)');

  // ---------- Card grids (staggered entrances)
  const cards = [];
  all.forEach(d => {
    if (d.tagName !== 'DIV' || cs(d).display !== 'grid' || d.children.length < 2 || within(d, glass)) return;
    const kids = [...d.children], ds = cs(d);
    const bordered = parseFloat(ds.borderTopWidth) > 0 || parseFloat(ds.borderLeftWidth) > 0 || kids.some(k => parseFloat(cs(k).borderRightWidth) > 0 || parseFloat(cs(k).borderBottomWidth) > 0);
    if (kids.length < 3 && !bordered) return;
    kids.flatMap(k => cs(k).display === 'contents' ? [...k.children] : [k]).forEach(k => {
      const ks = cs(k);
      if (ks.display === 'grid' && parseFloat(ks.paddingTop) === 0 && k.children.length >= 2) return; // layout wrapper: its children get handled
      if (!cards.some(c => c.contains(k))) cards.push(k);
    });
  });
  const inCard = el => cards.some(c => c.contains(el));

  // ---------- Loose elements: headings, copy, buttons, eyebrows, list rows, image panels
  const loose = [], panels = [];
  sections.forEach(s => s.querySelectorAll('h1,h2,h3,p,img,a,div').forEach(el => {
    if (done.has(el) || inCard(el) || within(el, glass) || within(el, marquee) || el === strip || loose.some(l => l.contains(el))) return;
    const t = el.tagName, st = cs(el);
    if (/^(H1|H2|H3|P|IMG)$/.test(t)) return loose.push(el);
    if (t === 'A') { const h = parseFloat(st.height); if (h >= 36 && h <= 60) loose.push(el); return; }
    const f = el.firstElementChild;
    if (st.backgroundImage.includes('url(') && el.offsetHeight >= 400) { loose.push(el); panels.push(el); return; }
    if (!f) return;
    const fs = cs(f);
    if (f.tagName === 'SPAN' && fs.backgroundImage.includes('linear-gradient') && parseFloat(fs.height) <= 8) loose.push(el); // eyebrow
    else if (f.tagName === 'SPAN' && f.textContent === '→' && el.children.length === 2) loose.push(el); // arrow list row
  }));

  // ---------- Reveal engine
  const vh = innerHeight, pending = new Map(), started = []; let introI = 0;
  const unit = (el, parts) => {
    done.add(el);
    const list = parts.map(([t, kf, dur, rd]) => { const a = t.animate(kf, { duration: dur, easing: EASE, fill: 'both' }); a.pause(); a.currentTime = 0; anims.push(a); return [a, rd]; });
    const u = { list, start: base => list.forEach(([a, rd]) => { a.effect.updateTiming({ delay: base + rd }); a.play(); }) };
    if (el.getBoundingClientRect().top < vh * 0.95) {
      if (hiddenAtInit) list.forEach(([a]) => a.finish());
      else { u.start(120 + Math.min(introI++, 12) * 85); started.push(u); }
    } else pending.set(el, u);
  };
  const splitWords = el => {
    const words = [];
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        if (!c.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) return frag.appendChild(document.createTextNode(p));
          const w = document.createElement('span'); w.textContent = p; w.style.display = 'inline-block'; frag.appendChild(w); words.push(w);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(el); return words;
  };

  cards.forEach(k => unit(k, [[k, BLUR('48px', 6), 1100, 0]]));
  loose.forEach(el => {
    const t = el.tagName;
    if (t === 'H1' || t === 'H2' || t === 'H3') {
      const words = splitWords(el), step = t === 'H3' ? 30 : 45;
      unit(el, words.map((w, i) => [w, BLUR('0.45em', 12), 950, i * step]));
    } else if (t === 'IMG' && el.getBoundingClientRect().width > 700) {
      unit(el, [[el, [{ clipPath: 'inset(0 100% 0 0)', opacity: .2 }, { clipPath: 'inset(0 0% 0 0)', opacity: .9 }], 1800, 0]]);
    } else if (panels.includes(el)) {
      unit(el, [[el, [{ opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)' }], 1200, 0]]);
    } else unit(el, [[el, BLUR('22px', 8), 900, 0]]);
  });

  // Bars that grow from the left: eyebrow gradients, size scale, progress fills
  all.forEach(el => {
    if (done.has(el)) return; const s = cs(el), p = el.parentElement;
    const grad = s.backgroundImage.includes('linear-gradient') && !s.backgroundImage.includes('repeating') && (parseFloat(s.height) <= 8 || s.position === 'absolute');
    const fill = p && s.backgroundColor === 'rgb(0, 0, 0)' && s.borderRadius === '3px' && cs(p).height === '6px';
    if (!grad && !fill) return;
    el.style.transformOrigin = 'left center';
    unit(el, [[el, [{ scale: '0 1' }, { scale: '1 1' }], fill || s.position === 'absolute' ? 1500 : 900, 250]]);
  });

  const io = new IntersectionObserver(entries => {
    entries.filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
      .forEach((e, i) => { const u = pending.get(e.target); io.unobserve(e.target); if (!u) return; pending.delete(e.target); u.start(Math.min(i, 8) * 80); });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  pending.forEach((_, el) => io.observe(el));

  // Safety nets: never leave content hidden
  const finishAll = () => {
    pending.forEach(u => u.list.forEach(([a]) => a.finish())); pending.clear();
    started.forEach(u => u.list.forEach(([a]) => { if (a.playState !== 'finished') a.finish(); })); started.length = 0;
  };
  const catchUp = () => pending.forEach((u, el) => { if (el.getBoundingClientRect().top < innerHeight) { pending.delete(el); u.start(0); } });
  on(window, 'scroll', catchUp, { passive: true });
  on(window, 'beforeprint', finishAll);
  on(document, 'visibilitychange', catchUp);
  if (hiddenAtInit) finishAll();
  const stalled = () => document.visibilityState !== 'visible' || !document.timeline || !(document.timeline.currentTime > 0);
  const safety = setTimeout(() => { if (stalled()) finishAll(); }, 1500);
  const introDone = setTimeout(() => started.forEach(u => u.list.forEach(([a]) => { if (a.playState !== 'finished') a.finish(); })), 4000);
  const late = setTimeout(finishAll, 8000);
  on(document, 'visibilitychange', () => { if (document.visibilityState !== 'visible') finishAll(); });

  // ---------- Infinite tickers
  const ticker = (track, gap, reverse, pxPerSec, hoverEl) => requestAnimationFrame(() => {
    const shift = (track.scrollWidth + gap) / 2;
    const kf = [{ translate: '0 0' }, { translate: `-${shift}px 0` }];
    const a = track.animate(reverse ? kf.reverse() : kf, { duration: shift / pxPerSec * 1000, iterations: Infinity });
    anims.push(a);
    on(hoverEl, 'pointerenter', () => a.updatePlaybackRate(.25));
    on(hoverEl, 'pointerleave', () => a.updatePlaybackRate(1));
  });
  if (strip && !done.has(strip)) {
    done.add(strip);
    const items = [...strip.children];
    const vp = document.createElement('div');
    const mask = 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)';
    vp.style.cssText = `overflow:hidden;width:100%;-webkit-mask-image:${mask};mask-image:${mask}`;
    const track = document.createElement('div');
    track.style.cssText = 'display:flex;gap:96px;width:max-content;align-items:center';
    items.forEach(i => track.appendChild(i));
    items.forEach(i => { const c = i.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
    vp.appendChild(track); strip.appendChild(vp); strip.style.flexWrap = 'nowrap';
    unit(strip, [[strip, BLUR('16px', 6), 900, 0]]);
    ticker(track, 96, false, 45, vp);
  }
  marquee.forEach((row, i) => {
    if (done.has(row)) return; done.add(row);
    [...row.children].forEach(c => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); row.appendChild(k); });
    ticker(row, parseFloat(cs(row).columnGap) || 20, i % 2 === 1, 38, row.parentElement);
  });

  // ---------- Ambient loops
  glass.forEach((el, i) => anims.push(el.animate([{ translate: '0 0' }, { translate: '0 -12px' }], { duration: 4200 + i * 300, easing: 'ease-in-out', direction: 'alternate', iterations: Infinity, delay: -i * 900 })));
  glass.forEach(g => g.querySelectorAll('span').forEach((el, i) => {
    const s = cs(el); if (s.borderRadius !== '50%' || parseFloat(s.width) > 9) return;
    anims.push(el.animate([{ opacity: 1, scale: '1' }, { opacity: .35, scale: '.7' }], { duration: 1400, easing: 'ease-in-out', direction: 'alternate', iterations: Infinity, delay: -i * 350 }));
  }));
  all.forEach(el => {
    const s = cs(el);
    if (s.backgroundImage.includes('repeating-linear-gradient') && parseFloat(s.height) <= 2) anims.push(el.animate([{ backgroundPosition: '0 0' }, { backgroundPosition: '24px 0' }], { duration: 1200, iterations: Infinity }));
    else if (s.backgroundImage.includes('radial-gradient') && s.backgroundSize === '38px 38px') anims.push(el.animate([{ backgroundPosition: '0 0' }, { backgroundPosition: '38px 38px' }], { duration: 9000, iterations: Infinity }));
  });
  const barArrow = [...root.querySelectorAll('span')].find(s => s.textContent === '⇢' && !s.closest('section') && !s.closest('header'));
  barArrow && anims.push(barArrow.animate([{ translate: '0 0' }, { translate: '5px 0' }], { duration: 900, easing: 'ease-in-out', direction: 'alternate', iterations: Infinity }));

  // ---------- Scroll-linked: sticky blurred header, panel scale, glass parallax + tilt
  const header = root.querySelector('header');
  if (header) {
    Object.assign(header.style, { position: 'sticky', top: '0', zIndex: '50', transition: `translate .55s ${EASE}, background-color .35s, backdrop-filter .35s, box-shadow .35s` });
  }
  const base = new Map(glass.map(g => [g, g.style.transform || '']));
  const tilt = new Map();
  let raf = 0, lastY = scrollY;
  const paint = () => {
    raf = 0; const H = innerHeight, y = scrollY;
    if (header) {
      const scrolled = y > 80;
      header.style.backgroundColor = scrolled ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,0)';
      header.style.backdropFilter = header.style.webkitBackdropFilter = scrolled ? 'blur(16px) saturate(1.4)' : 'none';
      header.style.boxShadow = scrolled ? '0 1px 0 rgba(0,0,0,.06)' : 'none';
      header.style.translate = y > lastY && y > 500 ? '0 -100%' : '0 0';
      lastY = y;
    }
    panels.forEach(p => { const r = p.getBoundingClientRect(); if (r.bottom < 0 || r.top > H) return; p.style.scale = (0.9 + 0.1 * clamp((H - r.top) / (H * 0.6))).toFixed(4); });
    glass.forEach(g => {
      const r = g.getBoundingClientRect(); if (r.bottom < -200 || r.top > H + 200) return;
      const py = ((r.top + r.height / 2) - H / 2) * -0.06, t = tilt.get(g) || [0, 0];
      g.style.transform = `${base.get(g)} translateY(${py.toFixed(1)}px) perspective(1100px) rotateX(${t[0]}deg) rotateY(${t[1]}deg)`;
    });
  };
  const req = () => { if (!raf) raf = requestAnimationFrame(paint); };
  on(window, 'scroll', req, { passive: true }); on(window, 'resize', req); req();
  glass.forEach(g => {
    const host = g.parentElement; g.style.transition = `transform .6s ${EASE}`;
    on(host, 'pointermove', e => { const r = host.getBoundingClientRect(); tilt.set(g, [((e.clientY - r.top) / r.height - .5) * -5, ((e.clientX - r.left) / r.width - .5) * 6]); req(); });
    on(host, 'pointerleave', () => { tilt.set(g, [0, 0]); req(); });
  });

  micro(root, sections, glass, cards, anims, on, isDark);

  return () => { io.disconnect(); clearTimeout(safety); clearTimeout(introDone); clearTimeout(late); cancelAnimationFrame(raf); offs.forEach(f => f()); anims.forEach(a => a.cancel()); };
}

function micro(root, sections, glass, cards, anims, on, isDark) {
  const cs = el => getComputedStyle(el);
  const tr = (el, props, d = '.4s') => { const cur = (el.style.transition || '').split(/,(?![^(]*\))/).map(s => s.trim()).filter(Boolean); props.forEach(p => { if (!cur.some(c => c.startsWith(p + ' '))) cur.push(`${p} ${d} ${EASE}`); }); el.style.transition = cur.join(','); };
  const hover = (el, enter, leave) => { on(el, 'pointerenter', enter); on(el, 'pointerleave', leave); };

  // Buttons: text roll + lift + recolor + press
  root.querySelectorAll('a').forEach(a => {
    const s = cs(a), h = parseFloat(s.height);
    if (!(h >= 36 && h <= 60) || a.closest('nav')) return;
    const txt = a.__roll ? null : [...a.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim()).pop();
    let [r1, r2] = a.__roll || [];
    if (txt) {
      const label = txt.textContent.trim();
      const wrap = document.createElement('span');
      wrap.style.cssText = 'display:inline-grid;overflow:hidden;line-height:1.3;vertical-align:top';
      r1 = document.createElement('span'); r2 = document.createElement('span');
      [r1, r2].forEach(r => { r.textContent = label; r.style.cssText = `grid-area:1/1;transition:translate .55s ${EASE}`; wrap.appendChild(r); });
      r2.setAttribute('aria-hidden', 'true'); r2.style.translate = '0 110%';
      txt.replaceWith(wrap); done.add(wrap); a.__roll = [r1, r2];
    }
    const bg = s.backgroundColor, bc = s.borderColor, fg = s.color;
    const solidDark = bg === 'rgb(0, 0, 0)', solidLight = bg === 'rgb(255, 255, 255)';
    tr(a, ['background-color', 'border-color', 'color', 'translate', 'scale']);
    hover(a, () => {
      a.style.translate = '0 -2px';
      if (r1) { r1.style.translate = '0 -110%'; r2.style.translate = '0 0'; }
      if (solidDark) a.style.backgroundColor = '#1e4dff';
      else if (solidLight) a.style.backgroundColor = '#e8eeff';
      else { a.style.borderColor = isDark(a) ? '#fff' : '#0a0a0a'; a.style.backgroundColor = isDark(a) ? 'rgba(255,255,255,.06)' : 'rgba(30,77,255,.05)'; }
    }, () => {
      a.style.translate = '0 0'; a.style.scale = '1'; a.style.backgroundColor = bg; a.style.borderColor = bc; a.style.color = fg;
      if (r1) { r1.style.translate = '0 0'; r2.style.translate = '0 110%'; }
    });
    on(a, 'pointerdown', () => { a.style.scale = '.97'; });
    on(a, 'pointerup', () => { a.style.scale = '1'; });
  });

  // Nav links: underline sweep
  root.querySelectorAll('nav a').forEach(a => {
    a.style.backgroundImage = 'linear-gradient(currentColor,currentColor)';
    a.style.backgroundRepeat = 'no-repeat'; a.style.backgroundPosition = '0 100%'; a.style.backgroundSize = '0% 1px'; a.style.paddingBottom = '3px';
    tr(a, ['background-size']);
    hover(a, () => { a.style.backgroundSize = '100% 1px'; }, () => { a.style.backgroundSize = '0% 1px'; });
  });

  // Link cards: tint, icon zoom, arrow nudge
  root.querySelectorAll('a').forEach(a => {
    const mh = parseFloat(cs(a).minHeight); if (!(mh >= 300)) return;
    const bg = cs(a).backgroundColor, img = a.querySelector('img');
    const more = [...a.querySelectorAll('div')].find(d => /Learn more/.test(d.textContent) && !d.children.length);
    tr(a, ['background-color']); img && tr(img, ['scale', 'rotate']); more && tr(more, ['translate', 'color']);
    hover(a, () => {
      a.style.backgroundColor = isDark(a) ? '#0a0d1a' : '#f6f8ff';
      if (img) { img.style.scale = '1.08'; img.style.rotate = '-3deg'; }
      if (more) { more.style.translate = '6px 0'; more.style.color = isDark(a) ? '#9db6ff' : '#1e4dff'; }
    }, () => { a.style.backgroundColor = bg; if (img) { img.style.scale = '1'; img.style.rotate = '0deg'; } if (more) { more.style.translate = '0 0'; more.style.color = ''; } });
  });

  // Dark cards: cursor spotlight
  cards.filter(isDark).forEach(c => {
    if (cs(c).backgroundImage !== 'none') return;
    on(c, 'pointermove', e => { const r = c.getBoundingClientRect(); c.style.backgroundImage = `radial-gradient(420px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(30,77,255,.16), transparent 60%)`; });
    on(c, 'pointerleave', () => { c.style.backgroundImage = 'none'; });
  });
  // Light cards: icon lift
  cards.filter(c => !isDark(c)).forEach(c => {
    const img = c.querySelector('img'); if (!img || c.tagName === 'A') return;
    tr(img, ['translate', 'scale']);
    hover(c, () => { img.style.translate = '0 -4px'; img.style.scale = '1.05'; }, () => { img.style.translate = '0 0'; img.style.scale = '1'; });
  });

  // Accordion: icon spin + answer blur-in
  root.querySelectorAll('button').forEach(b => {
    const ic = b.lastElementChild; if (!ic || !/^[+×]$/.test(ic.textContent.trim())) return;
    on(b, 'click', () => requestAnimationFrame(() => {
      const i2 = b.lastElementChild; i2 && i2.animate([{ rotate: '-90deg', opacity: .3 }, { rotate: '0deg', opacity: 1 }], { duration: 420, easing: EASE });
      const ans = b.nextElementSibling; ans && ans.animate([{ opacity: 0, filter: 'blur(6px)', translate: '0 -8px' }, { opacity: 1, filter: 'blur(0px)', translate: '0 0' }], { duration: 520, easing: EASE });
    }));
  });

  // Tabs: panel cross-fade
  root.querySelectorAll('button').forEach(b => {
    if (cs(b).borderBottomWidth !== '3px') return;
    on(b, 'click', () => requestAnimationFrame(() => {
      const panel = b.parentElement && b.parentElement.nextElementSibling;
      panel && [...panel.children].forEach((c, i) => c.animate([{ opacity: 0, filter: 'blur(8px)', translate: '0 14px' }, { opacity: 1, filter: 'blur(0px)', translate: '0 0' }], { duration: 600, delay: i * 70, easing: EASE, fill: 'backwards' }));
    }));
  });

  // Ticker chips: hover tint
  root.querySelectorAll('section span').forEach(c => {
    const p = c.parentElement; if (!p || cs(p).whiteSpace !== 'nowrap' || !cs(p.parentElement || p).backgroundImage.includes('radial-gradient')) return;
    const b = cs(c).borderColor; tr(c, ['border-color', 'color']);
    hover(c, () => { c.style.borderColor = '#3b55c8'; c.style.color = '#9db6ff'; }, () => { c.style.borderColor = b; c.style.color = ''; });
  });

  // Glass cards: checks/icons pop in sequence when visible
  const pio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; pio.unobserve(e.target);
    [...e.target.querySelectorAll('span')].filter(s => { const c = cs(s); return parseFloat(c.width) >= 24 && parseFloat(c.width) <= 40 && c.display === 'flex'; })
      .forEach((s, i) => anims.push(s.animate([{ scale: '0', opacity: 0 }, { scale: '1.15', opacity: 1, offset: .7 }, { scale: '1', opacity: 1 }], { duration: 560, delay: 300 + i * 110, easing: EASE, fill: 'backwards' })));
  }), { threshold: .3 });
  glass.forEach(g => pio.observe(g));
  on(window, 'pagehide', () => pio.disconnect());

  // Big static numbers count up
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, txt = el.textContent, m = txt.match(/^(\d+)(.*)$/); if (!m) return;
    const end = +m[1], rest = m[2], t0 = performance.now(), d = 1400;
    const step = t => { const p = Math.min(1, (t - t0) / d), v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = v + rest; if (p < 1) requestAnimationFrame(step); else el.textContent = txt; };
    requestAnimationFrame(step);
  }), { threshold: .5 });
  sections.forEach(s => s.querySelectorAll('div').forEach(d => {
    const c = cs(d); if (d.children.length || c.fontWeight !== '300' || parseFloat(c.fontSize) < 60) return;
    if (/^\d+(%|–\d+| min)?$/.test(d.textContent.trim())) cio.observe(d);
  }));
  on(window, 'pagehide', () => cio.disconnect());
}
