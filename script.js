const toggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const copy = document.querySelector('#copy-email');
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}
if (copy) copy.addEventListener('click', async () => {
  const email = copy.dataset.email;
  try { await navigator.clipboard.writeText(email); showToast('Email copied to clipboard'); }
  catch { window.location.href = `mailto:${email}`; showToast('Opening your email app'); }
});
