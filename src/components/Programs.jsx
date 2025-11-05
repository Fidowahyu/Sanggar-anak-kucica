import React from 'react';

export default function Programs() {
  const programs = [
    { title: 'Kelas Playgroup', desc: 'Program untuk anak usia 2-4 tahun yang fokus pada pengenalan lingkungan, sosialisasi, dan motorik dasar melalui bermain.', gradient: 'from-pink-500 to-rose-500' },
    { title: 'Kelas TK A', desc: 'Program untuk anak usia 4-5 tahun yang mengembangkan kemampuan dasar akademik dan non-akademik melalui metode bermain yang terarah.', gradient: 'from-sky-500 to-blue-500' },
    { title: 'Kelas TK B', desc: 'Program lanjutan untuk anak usia 5-6 tahun yang mempersiapkan anak memasuki jenjang pendidikan selanjutnya dengan bekal keterampilan dan pengetahuan dasar.', gradient: 'from-emerald-500 to-green-500' },
    { title: 'Kelas Seni dan Kreativitas', desc: 'Program ekstra kurikuler yang menumbuhkan bakat dan minat anak dalam seni rupa, musik, dan kreativitas lainnya.', gradient: 'from-amber-500 to-orange-500' }
  ];

  return (
    <section id="program" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Program Kami</h2>
          <p className="mt-4 text-lg text-slate-600">Kegiatan belajar yang dirancang khusus untuk anak usia dini.</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          {programs.map((program, i) => (
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
  );
}
