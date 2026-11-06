const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded', String(open));nav.classList.toggle('open', open);menu.textContent = open ? 'Close' : 'Menu';});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu';}));
document.addEventListener('keydown', e => {if(e.key==='Escape' && nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';menu.focus();}});
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {const text = document.getElementById(button.dataset.copy).innerText;const status = document.getElementById('copy-status');try{await navigator.clipboard.writeText(text);status.textContent='Bio copied to clipboard.';button.textContent='Copied';setTimeout(()=>button.textContent='Copy bio',2500);}catch{status.textContent='Select the bio text and copy it, or download all bios below.';}}));
// Keep the scheduled appearance from reading as upcoming after its date.
document.querySelectorAll('[data-event-date]').forEach(label=>{const end=new Date(label.dataset.eventDate+'T23:59:59-05:00');if(new Date()>end){label.textContent=label.textContent.replace(/^UPCOMING \/ /, 'SCHEDULED APPEARANCE / ');label.closest('.event-row')?.classList.remove('upcoming');}});

(() => {
  const section = document.querySelector('#conversations');
  if (!section) return;
  const rail = section.querySelector('.conversation-grid');
  const controls = section.querySelector('.conversation-controls');
  const toggle = controls.querySelector('[data-rotate]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let playing = !motion.matches;
  let visible = false;
  let timer;

  function move(direction) {
    const max = rail.scrollWidth - rail.clientWidth;
    if (max < 2) return;
    const step = rail.children[1].offsetLeft - rail.children[0].offsetLeft;
    let target = rail.scrollLeft + direction * step;
    if (direction > 0 && rail.scrollLeft >= max - 3) target = 0;
    if (direction < 0 && rail.scrollLeft <= 3) target = max;
    rail.scrollTo({left: target, behavior: motion.matches ? 'instant' : 'smooth'});
  }
  function refresh() {
    clearInterval(timer);
    toggle.textContent = playing ? 'Pause' : 'Play';
    toggle.setAttribute('aria-label', playing ? 'Pause automatic scrolling' : 'Start automatic scrolling');
    if (playing && visible && !document.hidden && !rail.matches(':hover, :focus-within')) {
      timer = setInterval(() => move(1), 5500);
    }
  }
  function pause() { playing = false; refresh(); }
  controls.hidden = false;
  controls.querySelectorAll('[data-turn]').forEach(button => {
    button.addEventListener('click', () => { pause(); move(Number(button.dataset.turn)); });
  });
  toggle.addEventListener('click', () => { playing = !playing; refresh(); });
  rail.addEventListener('focusin', pause);
  rail.addEventListener('pointerdown', pause);
  rail.addEventListener('wheel', pause, {passive:true});
  rail.addEventListener('mouseenter', refresh);
  rail.addEventListener('mouseleave', refresh);
  document.addEventListener('visibilitychange', refresh);
  motion.addEventListener('change', () => { if (motion.matches) pause(); });
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh(); }).observe(rail);
  refresh();
})();
