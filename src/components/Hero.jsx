import React from 'react';
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden min-h-screen flex items-center" style={{background:'linear-gradient(180deg, rgba(59,130,246,0.06), rgba(255,210,63,0.04) 30%, rgba(59,130,246,0.03))'}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob a" />
        <div className="blob b" />
        <div className="blob c" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - playful intro */}
        <div className="md:col-span-1" data-aos="fade-up">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 pill-nav badge-yellow shadow-md">
              <span className="text-2xl">�</span>
              <span className="font-semibold">PAUD Ceria & Aman</span>
            </div>

            <div className="flex items-start gap-5 mt-6">
              <div className="mascot mascot-bob" aria-hidden style={{width:140, height:140}}>
                <svg width="110" height="110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#fff7e6" />
                  <circle cx="24" cy="26" r="4" fill="#1f2937" />
                  <circle cx="40" cy="26" r="4" fill="#1f2937" />
                  <path d="M22 38c3 4 10 6 20 0" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight" style={{lineHeight:1}}>
                  <span style={{background:'linear-gradient(90deg,var(--kucica-yellow), var(--kucica-blue))', WebkitBackgroundClip:'text', color:'transparent', display:'inline-block'}}>PAUD Anak Kucica</span>
                </h1>
                <p className="mt-2 text-lg sm:text-xl font-semibold text-slate-700">Belajar, Bermain, & Tumbuh Bersama</p>
                <p className="mt-3 text-base text-slate-600">Tempat yang hangat untuk si kecil — penuh warna, lagu, dan permainan.</p>

                <div className="mt-6 flex items-center gap-3">
                  <a href="#program" className="btn-cta py-3 px-5 text-lg">Lihat Program</a>
                  <Link
                    to="/daftar"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Daftar Sekarang
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    {e:'�',t:'Kriya'},
                    {e:'🎵',t:'Musik'},
                    {e:'🤸',t:'Gerak'}
                  ].map((it,i)=> (
                    <div key={i} className="card-gradient flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 shadow-sm text-center">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{background:'linear-gradient(90deg,var(--kucica-yellow),#FFD77A)'}}>{it.e}</div>
                      <div className="text-sm font-semibold">{it.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="card-gradient rounded-3xl p-4 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-200 flex items-center justify-center text-2xl">👩‍👧</div>
                <div>
                  <div className="font-bold">Ibu Sinta</div>
                  <div className="text-sm text-slate-600">"Anak saya jadi berani berekspresi. Gurunya sabar dan penuh kasih."</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - playful activity cards */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-xl">
              <div className="text-3xl">🎨</div>
              <div className="mt-3 font-bold text-lg">Seni & Kriya</div>
              <p className="mt-2 text-sm text-slate-600">Cat, kertas, dan kreativitas tanpa batas.</p>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-br from-sky-50 to-blue-50 shadow-xl">
              <div className="text-3xl">🎵</div>
              <div className="mt-3 font-bold text-lg">Musik & Lagu</div>
              <p className="mt-2 text-sm text-slate-600">Bernyanyi dan menari bersama teman-teman.</p>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-br from-emerald-50 to-green-50 shadow-xl">
              <div className="text-3xl">🤸</div>
              <div className="mt-3 font-bold text-lg">Aktivitas & Motorik</div>
              <p className="mt-2 text-sm text-slate-600">Permainan yang menstimulasi tubuh dan imajinasi.</p>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-br from-pink-50 to-rose-50 shadow-xl">
              <div className="text-3xl">📚</div>
              <div className="mt-3 font-bold text-lg">Cerita & Bahasa</div>
              <p className="mt-2 text-sm text-slate-600">Mendongeng dan membaca dengan penuh ekspresi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
