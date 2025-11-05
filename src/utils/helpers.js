import { KUCICA_WHATSAPP, WHATSAPP_MSG, KUCICA_ADDRESS } from '../constants/config';

export function injectOnce(tag, id, attrs = {}, onload) {
  if (document.getElementById(id)) return;
  const el = document.createElement(tag);
  el.id = id;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (onload) el.onload = onload;
  document.head.appendChild(el);
}

export const openWhatsApp = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  const web = `https://wa.me/${KUCICA_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  const scheme = `whatsapp://send?phone=${KUCICA_WHATSAPP}&text=${encodeURIComponent(WHATSAPP_MSG)}`;
  const start = Date.now();
  window.location.href = scheme;
  setTimeout(() => {
    if (Date.now() - start < 1200) {
      window.open(web, '_blank', 'noopener');
    }
  }, 800);
};

export const openMap = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  const gm = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(KUCICA_ADDRESS)}`;
  const geo = `geo:0,0?q=${encodeURIComponent(KUCICA_ADDRESS)}`;
  const start = Date.now();
  window.location.href = geo;
  setTimeout(() => {
    if (Date.now() - start < 1200) {
      window.open(gm, '_blank', 'noopener');
    }
  }, 800);
};
