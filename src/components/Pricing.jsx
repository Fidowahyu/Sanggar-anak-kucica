import React from 'react';

export default function Pricing() {
  const packages = [
    { name: 'Playgroup', price: 'Rp250.000/bln', features: ['3x per minggu', 'Seragam 1 stel', 'Kegiatan tematik'] },
    { name: 'TK A', price: 'Rp300.000/bln', features: ['4x per minggu', 'Seragam 2 stel', 'Laporan perkembangan'], highlight: true },
    { name: 'TK B', price: 'Rp350.000/bln', features: ['5x per minggu', 'Seragam 2 stel', 'Persiapan SD'] },
  ];

  return (
    <section id="biaya" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-slate-800">Biaya Pendidikan</h2>
          <p className="mt-3 text-slate-600">Pilih paket sesuai kebutuhan anak.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
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
  );
}
