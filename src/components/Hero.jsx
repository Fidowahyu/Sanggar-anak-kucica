import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-blue-50/40 via-indigo-50/30 to-purple-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] text-6xl opacity-10 animate-float">🎈</div>
        <div className="absolute top-40 right-[15%] text-5xl opacity-8 animate-float" style={{ animationDelay: '0.5s' }}>🌈</div>
        <div className="absolute bottom-32 left-[20%] text-7xl opacity-8 animate-float" style={{ animationDelay: '1s' }}>🎨</div>
        <div className="absolute top-[60%] right-[10%] text-5xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>
        <div className="absolute bottom-20 right-[25%] text-6xl opacity-8 animate-float" style={{ animationDelay: '2s' }}>🎵</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column */}
        <div className="md:col-span-1" data-aos="fade-up">
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full shadow-md border-2 border-amber-200/50">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-slate-700">PAUD Ceria & Aman</span>
            </div>

            {/* Main Title */}
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-slate-800">
              <span className="block">PAUD</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Anak Kucica
              </span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-bold text-slate-700">
              Belajar, Bermain, & Tumbuh Bersama
            </p>
            
            <p className="mt-3 text-lg text-slate-600 max-w-lg">
              Tempat yang hangat untuk si kecil — penuh warna, lagu, dan permainan edukatif yang menyenangkan.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#program" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-200"
              >
                <span>Lihat Program</span>
                <span className="text-xl">📚</span>
              </a>
              <Link
                to="/daftar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Daftar Sekarang</span>
                <span className="text-xl">✨</span>
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { icon: '🎨', label: 'Seni & Kriya', color: 'from-pink-200 to-rose-200' },
                { icon: '🎵', label: 'Musik', color: 'from-cyan-200 to-blue-200' },
                { icon: '🤸', label: 'Gerak Aktif', color: 'from-amber-200 to-yellow-200' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-sm`}>
                    {item.icon}
                  </div>
                  <div className="mt-2 text-sm font-bold text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-2xl flex-shrink-0">
                    👩‍👧
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-800">Ibu Sinta</div>
                    <div className="text-sm text-slate-600 mt-1">
                      "Anak saya jadi berani berekspresi. Gurunya sabar dan penuh kasih sayang! ⭐⭐⭐⭐⭐"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Activity Cards */}
        <div data-aos="fade-up" data-aos-delay="300" className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { 
                icon: '🎨', 
                title: 'Seni & Kriya', 
                desc: 'Cat, kertas, dan kreativitas tanpa batas',
                gradient: 'from-pink-100 to-rose-100',
                shadow: 'hover:shadow-pink-200/50'
              },
              { 
                icon: '🎵', 
                title: 'Musik & Lagu', 
                desc: 'Bernyanyi dan menari bersama teman',
                gradient: 'from-cyan-100 to-blue-100',
                shadow: 'hover:shadow-blue-200/50'
              },
              { 
                icon: '🤸', 
                title: 'Aktivitas Motorik', 
                desc: 'Permainan yang menstimulasi tubuh',
                gradient: 'from-emerald-100 to-green-100',
                shadow: 'hover:shadow-green-200/50'
              },
              { 
                icon: '📚', 
                title: 'Cerita & Bahasa', 
                desc: 'Mendongeng dengan penuh ekspresi',
                gradient: 'from-purple-100 to-violet-100',
                shadow: 'hover:shadow-purple-200/50'
              }
            ].map((card, i) => (
              <div 
                key={i}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl ${card.shadow} transition-all duration-300 hover:scale-105`}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl shadow-sm mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
