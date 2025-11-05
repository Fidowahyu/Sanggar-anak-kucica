import React from 'react';

export default function Facilities() {
  const facilities = [
    { icon: '🏫', title: 'Ruang Kelas Nyaman', desc: 'Ventilasi baik, pencahayaan alami, kursi-meja anak.', color: 'sky' },
    { icon: '🛝', title: 'Area Bermain Aman', desc: 'Outdoor dan indoor dengan standar keselamatan.', color: 'emerald' },
    { icon: '📚', title: 'Perpustakaan Mini', desc: 'Koleksi buku cerita anak dan edukasi.', color: 'amber' },
    { icon: '🎨', title: 'Ruang Seni', desc: 'Cat, kertas, alat musik dan craft untuk eksplorasi.', color: 'pink' },
    { icon: '🚻', title: 'Toilet Anak', desc: 'Khusus anak dengan kebersihan terjaga.', color: 'purple' },
    { icon: '📷', title: 'CCTV & Keamanan', desc: 'Pemantauan area sekolah selama aktivitas.', color: 'blue' },
  ];

  return (
    <section id="fasilitas" className="py-24 sm:py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Fasilitas</h2>
          <p className="mt-4 text-lg text-slate-600">Fasilitas nyaman dan aman untuk mendukung proses belajar.</p>
        </div>
        
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
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
  );
}
