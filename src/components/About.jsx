import React from 'react';

export default function About() {
  return (
  <section id="tentang" className="py-24 sm:py-32" style={{scrollMarginTop: '80px', background:'linear-gradient(180deg, rgba(59,130,246,0.04), rgba(255,210,63,0.03) 40%, rgba(59,130,246,0.02) 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="mascot-sm" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="#fff7e6" />
                <path d="M20 36c4-6 20-6 24 0" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent" style={{background:'linear-gradient(90deg,var(--kucica-blue), var(--kucica-yellow))'}}>Tentang Kami</h2>
          </div>
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
                <div key={i} className="hover-lift p-5 rounded-2xl card-gradient ring-1 ring-slate-200/40 text-center shadow-lg">
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
  );
}
