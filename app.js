const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded', String(open));nav.classList.toggle('open', open);menu.textContent = open ? 'Close' : 'Menu';});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu';}));
document.addEventListener('keydown', e => {if(e.key==='Escape' && nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';menu.focus();}});
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {const text = document.getElementById(button.dataset.copy).innerText;const status = document.getElementById('copy-status');try{await navigator.clipboard.writeText(text);status.textContent='Bio copied to clipboard.';button.textContent='Copied';setTimeout(()=>button.textContent='Copy bio',2500);}catch{status.textContent='Select the bio text and copy it, or download all bios below.';}}));
// Keep the scheduled appearance from reading as upcoming after its date.
document.querySelectorAll('[data-event-date]').forEach(label=>{const end=new Date(label.dataset.eventDate+'T23:59:59-05:00');if(new Date()>end){label.textContent='SCHEDULED APPEARANCE / WELCOME ADDRESS';label.closest('.event-row')?.classList.remove('upcoming');}});
