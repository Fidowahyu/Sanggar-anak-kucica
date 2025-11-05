import React from 'react';

export default function Hero() {
  return (
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

          {/* Fitur unggulan */}
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

          {/* Testimoni */}
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

        {/* Kolom kanan */}
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

      {/* Stats bar */}
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
  );
}
