import { useEffect } from 'react';
import { injectOnce } from '../utils/helpers';

export default function useInjectStyles() {
  useEffect(() => {
    // Google Font
    injectOnce('link', 'font-quicksand', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap'
    });

    // Tailwind CSS (CDN)
    injectOnce('script', 'tailwind-cdn', { src: 'https://cdn.tailwindcss.com' });

    // AOS CSS
    injectOnce('link', 'aos-css', {
      rel: 'stylesheet',
      href: 'https://unpkg.com/aos@2.3.4/dist/aos.css'
    });

    // Inline styles
    if (!document.getElementById('paud-inline-styles')) {
      const style = document.createElement('style');
      style.id = 'paud-inline-styles';
      style.textContent = `
        :root { 
          --brand-1:#fef3c7; 
          --brand-2:#e0f2fe; 
          --brand-3:#d1fae5; 
          --accent-1:#22c55e; 
          --accent-2:#0ea5e9; 
          --accent-3:#f59e0b; 
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Quicksand', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
        
        .blob { 
          position:absolute; 
          border-radius:9999px; 
          filter:blur(60px); 
          opacity:.5; 
          animation:float 15s ease-in-out infinite; 
        }
        .blob.a { background:linear-gradient(135deg, var(--brand-2), var(--accent-2)); width:320px; height:320px; top:-60px; left:-60px; }
        .blob.b { background:linear-gradient(135deg, var(--brand-1), var(--accent-3)); width:380px; height:380px; bottom:-80px; right:5%; animation-delay:3s; }
        .blob.c { background:linear-gradient(135deg, var(--brand-3), var(--accent-1)); width:280px; height:280px; top:25%; right:-80px; animation-delay:6s; }
        @keyframes float { 
          0%,100% { transform: translate(0, 0) scale(1) } 
          33% { transform: translate(20px, -30px) scale(1.05) } 
          66% { transform: translate(-20px, 20px) scale(0.95) } 
        }

        .glass {
          /* gentle translucent glass but tinted to the kucica theme */
          background: linear-gradient(180deg, rgba(59,130,246,0.06), rgba(255,210,63,0.03));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.06);
        }

        * { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        .card-gradient {
          position: relative;
          /* subtle blue-yellow background instead of white */
          background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(255,210,63,0.08));
          border-radius: inherit;
          box-shadow: 0 10px 30px rgba(2,6,23,0.06);
          overflow: hidden;
        }
        .card-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, rgba(59,130,246,0.6), rgba(255,210,63,0.6));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .card-gradient:hover::before { opacity: 0.2; }

        body:not(.aos-initialized) [data-aos] { opacity: 1 !important; transform: none !important; }
      `;
      document.head.appendChild(style);
    }

    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({ once: true, duration: 800, easing: 'ease-out' });
        document.body.classList.add('aos-initialized');
      }
    };
    if (!document.getElementById('aos-js')) {
      injectOnce('script', 'aos-js', { src: 'https://unpkg.com/aos@2.3.4/dist/aos.js' }, initAOS);
      window.addEventListener('load', initAOS, { once: true });
    } else {
      initAOS();
    }
  }, []);
}
