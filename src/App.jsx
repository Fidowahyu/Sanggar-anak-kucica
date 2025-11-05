import React, { useEffect } from 'react';
import logo from './assets/Logopaudkucica.png';

function injectOnce(tag, id, attrs = {}, onload) {
  if (document.getElementById(id)) return;
  const el = document.createElement(tag);
  el.id = id;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (onload) el.onload = onload;
  document.head.appendChild(el);
}

export default function App() {
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

    // Inline styles (pastel blobs, fonts, smooth scroll + fallback AOS)
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
        
        /* Enhanced blob animations */
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

        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Smooth transitions */
        * { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        
        /* Hover lift effect */
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        /* Card gradient borders */
        .card-gradient {
          position: relative;
          background: white;
        }
        .card-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #0ea5e9, #22c55e, #f59e0b);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .card-gradient:hover::before {
          opacity: 0.6;
        }

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

  return (
    <div className="bg-white text-slate-700 overflow-x-hidden">
      {/* Header - Enhanced with glassmorphism */}
      <header className="sticky top-0 z-50 glass shadow-lg shadow-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Logo PAUD anak kucica"
                className="w-12 h-12 rounded-2xl ring-2 ring-sky-400/50 object-cover bg-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = 'inline-flex';
                }}
              />
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 text-white font-bold shadow-lg" style={{ display: 'none' }}>
                PK
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-xl font-extrabold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">PAUD anak kucica</div>
              <div className="text-xs text-slate-600 font-medium">Belajar dengan Cinta dan Ceria</div>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Beranda', 'Tentang Kami', 'Program', 'Fasilitas', 'Biaya', 'Galeri', 'FAQ', 'Kontak'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                 className="text-slate-700 hover:text-sky-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-sky-600 after:transition-all">
                {item}
              </a>
            ))}
          </nav>
          
          <a href="#kontak" className="ml-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-sm font-bold px-6 py-3 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105">
            Daftar Sekarang
          </a>
        </div>
      </header>

      {/* Hero - Enhanced with better spacing and effects */}
      <section id="beranda" className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50/30 min-h-screen flex items-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob a"></div>
          <div className="blob b"></div>
          <div className="blob c"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Kolom kiri */}
          <div data-aos="fade-up" className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-700 ring-2 ring-emerald-200/50 px-4 py-2 text-sm font-bold shadow-md">
              🌟 PAUD ramah anak & penuh cinta
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-sky-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
                PAUD anak kucica
              </span>
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl font-bold text-slate-700">"Belajar dengan Cinta dan Ceria"</p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Tempat tumbuh kembang yang ramah anak, menyenangkan, dan penuh warna. Kami mendampingi si kecil belajar dasar-dasar dengan cara yang kreatif dan menyenangkan.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#program" className="rounded-2xl border-2 border-sky-300 bg-white text-sky-700 font-bold px-7 py-4 hover:bg-sky-50 hover:scale-105 shadow-lg hover:shadow-xl">
                Lihat Program
              </a>
              <a href="#kontak" className="rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold px-7 py-4 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:scale-105">
                Daftar Sekarang
              </a>
            </div>

            {/* Fitur unggulan - Enhanced cards */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: '👩‍🏫', title: 'Guru Hangat', desc: 'Bersertifikat & care', delay: 0 },
                { icon: '🧩', title: 'Belajar Seru', desc: 'Metode bermain', delay: 100 },
                { icon: '🛡️', title: 'Aman & Nyaman', desc: 'Lingkungan terjaga', delay: 200 }
              ].map((item, i) => (
                <div key={i} className="card-gradient hover-lift flex items-center gap-3 rounded-2xl bg-white ring-1 ring-slate-200/80 px-4 py-3 shadow-md" 
                     data-aos="fade-up" data-aos-delay={item.delay}>
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-slate-800">{item.title}</div>
                    <div className="text-slate-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimoni - Enhanced design */}
            <div className="mt-8 card-gradient hover-lift rounded-3xl bg-white ring-1 ring-slate-200/80 p-6 shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-start gap-4">
                <img className="w-14 h-14 rounded-2xl object-cover ring-2 ring-sky-200" 
                     src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=160&auto=format&fit=crop" alt="Orang tua"/>
                <div>
                  <div className="font-bold text-slate-800 text-lg">Ibu Sinta</div>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">"Anak saya jadi percaya diri dan suka belajar. Kegiatannya seru dan penuh warna!"</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400">⭐</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom kanan - Enhanced images */}
          <div data-aos="fade-up" data-aos-delay="200" className="relative z-10">
            <div className="relative rounded-3xl overflow-hidden ring-2 ring-white shadow-2xl hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
                alt="Anak-anak belajar bersama"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <span className="absolute top-6 left-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-2xl px-4 py-2 text-sm font-bold shadow-lg">
                ✨ Ceria!
              </span>
              <span className="absolute bottom-6 right-6 bg-gradient-to-r from-sky-400 to-blue-400 text-white rounded-2xl px-4 py-2 text-sm font-bold shadow-lg">
                🎨 Belajar Asyik
              </span>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596495578065-8e9d0f3a7d20?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop'
              ].map((src, i) => (
                <img key={i} className="rounded-2xl ring-2 ring-white object-cover h-32 w-full shadow-lg hover:scale-110 hover:shadow-2xl hover:z-10 relative" 
                     alt={`Kegiatan ${i + 1}`} src={src} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar - Enhanced */}
        <div className="absolute bottom-20 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { num: '100+', label: 'Orang Tua Puas', color: 'sky' },
                { num: '5', label: 'Guru Bersertifikat', color: 'emerald' },
                { num: '8:1', label: 'Rasio Murid:Guru', color: 'amber' }
              ].map((stat, i) => (
                <div key={i} className={`card-gradient hover-lift rounded-3xl glass px-6 py-5 text-center shadow-xl`}>
                  <div className={`text-4xl font-black bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent`}>
                    {stat.num}
                  </div>
                  <div className="text-sm text-slate-700 font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami - Enhanced */}
      <section id="tentang-kami" className="py-24 sm:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Tentang Kami</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              PAUD anak kucica berkomitmen menghadirkan lingkungan belajar yang hangat, aman, dan menyenangkan. Kami percaya setiap anak unik dan belajar terbaik melalui permainan yang bermakna.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div data-aos="fade-up" className="card-gradient hover-lift p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 ring-1 ring-sky-200/80 shadow-xl">
              <h3 className="text-2xl font-black text-sky-700">Visi</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Menjadi PAUD yang menumbuhkan karakter ceria, mandiri, dan penuh kasih, melalui pengalaman belajar menyenangkan.
              </p>
              <h3 className="mt-8 text-2xl font-black text-sky-700">Misi</h3>
              <ul className="mt-4 list-none pl-0 text-slate-600 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Menciptakan lingkungan yang aman, ramah, dan inklusif.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Menstimulasi motorik, kognitif, bahasa, dan sosial emosional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Melibatkan orang tua sebagai mitra belajar.</span>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="card-gradient hover-lift p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-green-50 ring-1 ring-emerald-200/80 shadow-xl">
              <h3 className="text-2xl font-black text-emerald-700">Profil Guru</h3>
              <div className="mt-6 grid sm:grid-cols-3 gap-6">
                {['Bu Sari', 'Pak Budi', 'Bu Ani'].map((name, i) => (
                  <div key={i} className="hover-lift p-5 rounded-2xl bg-white ring-1 ring-slate-200 text-center shadow-lg">
                    <img className="w-20 h-20 rounded-2xl mx-auto object-cover ring-2 ring-emerald-200"
                         src="https://images.unsplash.com/photo-1531123414780-f7424c22d9c0?q=80&w=400&auto=format&fit=crop"
                         alt={name} />
                    <div className="mt-3 font-bold text-slate-800">{name}</div>
                    <div className="text-xs text-slate-500 mt-1">Bersertifikat</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program - Enhanced cards */}
      <section id="program" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Program Kami</h2>
            <p className="mt-4 text-lg text-slate-600">Kegiatan belajar yang dirancang khusus untuk anak usia dini.</p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Kelas Playgroup', desc: 'Program untuk anak usia 2-4 tahun yang fokus pada pengenalan lingkungan, sosialisasi, dan motorik dasar melalui bermain.', gradient: 'from-pink-500 to-rose-500' },
              { title: 'Kelas TK A', desc: 'Program untuk anak usia 4-5 tahun yang mengembangkan kemampuan dasar akademik dan non-akademik melalui metode bermain yang terarah.', gradient: 'from-sky-500 to-blue-500' },
              { title: 'Kelas TK B', desc: 'Program lanjutan untuk anak usia 5-6 tahun yang mempersiapkan anak memasuki jenjang pendidikan selanjutnya dengan bekal keterampilan dan pengetahuan dasar.', gradient: 'from-emerald-500 to-green-500' },
              { title: 'Kelas Seni dan Kreativitas', desc: 'Program ekstra kurikuler yang menumbuhkan bakat dan minat anak dalam seni rupa, musik, dan kreativitas lainnya.', gradient: 'from-amber-500 to-orange-500' }
            ].map((program, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} 
                   className="group card-gradient hover-lift p-8 rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-xl relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <h3 className="text-2xl font-black text-slate-800 relative z-10">{program.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed relative z-10">{program.desc}</p>
                <a href="#kontak" className={`mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${program.gradient} text-white font-bold px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105 relative z-10`}>
                  Daftar Sekarang →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas - Enhanced */}
      <section id="fasilitas" className="py-24 sm:py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Fasilitas</h2>
            <p className="mt-4 text-lg text-slate-600">Fasilitas nyaman dan aman untuk mendukung proses belajar.</p>
          </div>
          
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏫', title: 'Ruang Kelas Nyaman', desc: 'Ventilasi baik, pencahayaan alami, kursi-meja anak.', color: 'sky' },
              { icon: '🛝', title: 'Area Bermain Aman', desc: 'Outdoor dan indoor dengan standar keselamatan.', color: 'emerald' },
              { icon: '📚', title: 'Perpustakaan Mini', desc: 'Koleksi buku cerita anak dan edukasi.', color: 'amber' },
              { icon: '🎨', title: 'Ruang Seni', desc: 'Cat, kertas, alat musik dan craft untuk eksplorasi.', color: 'pink' },
              { icon: '🚻', title: 'Toilet Anak', desc: 'Khusus anak dengan kebersihan terjaga.', color: 'purple' },
              { icon: '📷', title: 'CCTV & Keamanan', desc: 'Pemantauan area sekolah selama aktivitas.', color: 'blue' },
            ].map((f, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 50} 
                   className="card-gradient hover-lift p-6 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-lg flex items-start gap-4 group">
                <div className={`text-4xl transform group-hover:scale-125 transition-transform duration-300`}>{f.icon}</div>
                <div>
                  <div className="font-bold text-lg text-slate-800">{f.title}</div>
                  <div className="text-slate-600 text-sm mt-2 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biaya */}
      <section id="biaya" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-slate-800">Biaya Pendidikan</h2>
            <p className="mt-3 text-slate-600">Pilih paket sesuai kebutuhan anak.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Playgroup', price: 'Rp250.000/bln', features: ['3x per minggu', 'Seragam 1 stel', 'Kegiatan tematik'] },
              { name: 'TK A', price: 'Rp300.000/bln', features: ['4x per minggu', 'Seragam 2 stel', 'Laporan perkembangan'], highlight: true },
              { name: 'TK B', price: 'Rp350.000/bln', features: ['5x per minggu', 'Seragam 2 stel', 'Persiapan SD'] },
            ].map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}
                   className={`p-6 rounded-2xl ring-1 shadow-sm ${p.highlight ? 'bg-sky-50 ring-sky-200' : 'bg-white ring-slate-200'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-slate-800">{p.name}</h3>
                  {p.highlight && <span className="text-xs font-bold text-sky-700 bg-sky-100 rounded-full px-2 py-1">Rekomendasi</span>}
                </div>
                <div className="mt-3 text-2xl font-extrabold text-emerald-600">{p.price}</div>
                <ul className="mt-4 text-sm text-slate-600 space-y-2 list-disc pl-5">
                  {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
                <a href="#kontak" className="mt-5 inline-block rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 transition">
                  Daftar Paket {p.name}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500" data-aos="fade-up" data-aos-delay="300">
            Catatan: Biaya pendaftaran dan kebutuhan perlengkapan awal diinformasikan saat konsultasi.
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-slate-800">Galeri Kegiatan</h2>
            <p className="mt-3 text-slate-600">Momen ceria anak-anak saat belajar dan bermain.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            <img data-aos="zoom-in" className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" alt="Galeri 1"
                 src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop" />
            <img data-aos="zoom-in" data-aos-delay="50" className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" alt="Galeri 2"
                 src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" />
            <img data-aos="zoom-in" data-aos-delay="100" className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" alt="Galeri 3"
                 src="https://images.unsplash.com/photo-1596495578065-8e9d0f3a7d20?q=80&w=800&auto=format&fit=crop" />
            <img data-aos="zoom-in" data-aos-delay="150" className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" alt="Galeri 4"
                 src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop" />
            <img data-aos="zoom-in" data-aos-delay="200" className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" alt="Galeri 5"
                 src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" />
            <img data-aos="zoom-in" data-aos-delay="250" className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" alt="Galeri 6"
                 src="https://images.unsplash.com/photo-1529088748361-1f2e3f43bb56?q=80&w=800&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-slate-800">Pertanyaan yang Sering Diajukan</h2>
            <p className="mt-3 text-slate-600">Informasi ringkas seputar pendaftaran dan kegiatan.</p>
          </div>

          <div className="mt-8 grid gap-3 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            {[
              { q: 'Kapan tahun ajaran dimulai?', a: 'Setiap Juli, namun pendaftaran dibuka sepanjang tahun selama kuota tersedia.' },
              { q: 'Apakah ada sesi trial?', a: 'Ada. Satu minggu pertama tersedia sesi trial gratis untuk penyesuaian anak.' },
              { q: 'Bagaimana sistem pembayaran?', a: 'Bulanan via transfer atau tunai di administrasi sekolah.' },
              { q: 'Apakah orang tua boleh mendampingi?', a: 'Pada masa adaptasi, orang tua dapat mendampingi sesuai arahan guru.' },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl bg-white ring-1 ring-slate-200 p-4 open:ring-sky-200">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-800">
                  {item.q}
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-slate-800">Kontak & Pendaftaran</h2>
            <p className="mt-3 text-slate-600">Hubungi kami untuk informasi pendaftaran dan kunjungan.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <form data-aos="fade-up" className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">Nama Orang Tua</label>
                  <input type="text" required placeholder="Nama lengkap" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700">Nama Anak</label>
                  <input type="text" required placeholder="Nama anak" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-slate-700">Email</label>
                <input type="email" required placeholder="email@contoh.com" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-slate-700">Pesan</label>
                <textarea rows="4" placeholder="Tulis pertanyaan atau kebutuhan Anda..." className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500"></textarea>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <a className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 px-3 py-1"
                   href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">📱 WhatsApp</a>
                <a className="inline-flex items-center gap-2 rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200 px-3 py-1"
                   href="tel:+626281234567890">☎️ Telepon</a>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200 px-3 py-1">
                  📧 admin@paudkucica.sch.id
                </span>
              </div>
              <button type="submit" className="mt-6 inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 transition">
                Kirim
              </button>
            </form>

            {/* Map */}
            <div data-aos="fade-up" data-aos-delay="100" className="p-1 rounded-2xl bg-gradient-to-br from-sky-100 via-amber-100 to-emerald-100">
              <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                <iframe
                  title="Lokasi PAUD anak kucica"
                  src="https://www.google.com/maps?q=-6.200000,106.816666&z=14&output=embed"
                  className="w-full h-[420px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className="px-3 py-2 text-xs text-slate-500">
                Catatan: Ganti titik lokasi pada peta sesuai alamat PAUD anak kucica.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start justify-between gap-8 flex-col sm:flex-row">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Logo PAUD anak kucica" 
                   className="w-14 h-14 rounded-2xl ring-2 ring-sky-300 object-cover bg-white shadow-lg" 
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                   }}
              />
              <div>
                <div className="font-black text-xl bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                  PAUD anak kucica
                </div>
                <div className="text-sm text-slate-500 mt-1">Belajar dengan Cinta dan Ceria</div>
              </div>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed">
              <strong>Alamat:</strong> Jl. Contoh No. 123, Kota Anda<br/>
              <strong>Telp:</strong> 0812-3456-7890
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between flex-col sm:flex-row gap-4">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} PAUD anak kucica. Semua hak dilindungi.
            </div>
            <div className="flex items-center gap-6 text-sm font-medium">
              {['Beranda', 'Tentang Kami', 'Program', 'Kontak'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 hover:text-sky-600">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
