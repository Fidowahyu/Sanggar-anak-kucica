import React from 'react';

export default function Programs() {
  const programs = [
    {
      id: 1,
      icon: '🎮',
      title: 'Kelas Playgroup',
      age: '2-4 tahun',
      description: 'Program untuk anak usia 2-4 tahun yang fokus pada pengenalan lingkungan, sosialisasi, dan motorik dasar melalui bermain.',
      features: ['Bermain Sensori', 'Musik & Gerak', 'Seni & Craft', 'Story Time'],
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
      highlight: 'Belajar sambil bermain! 🎨'
    },
    {
      id: 2,
      icon: '📚',
      title: 'Kelas TK A',
      age: '4-5 tahun',
      description: 'Program untuk anak usia 4-5 tahun yang mengembangkan kemampuan dasar akademik dan non-akademik melalui metode bermain yang terarah.',
      features: ['Literasi Dasar', 'Numerasi Fun', 'Sains Sederhana', 'Bahasa Inggris'],
      color: 'from-purple-500 via-pink-500 to-rose-500',
      bgPattern: 'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
      highlight: 'Siap masuk SD! 🎓'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Kelas TK B',
      age: '5-6 tahun',
      description: 'Program lanjutan untuk anak usia 5-6 tahun yang mempersiapkan anak memasuki jenjang pendidikan selanjutnya dengan bekal keterampilan dan pengetahuan dasar.',
      features: ['Calistung Asyik', 'Problem Solving', 'Karakter Building', 'Leadership'],
      color: 'from-emerald-500 via-green-500 to-lime-500',
      bgPattern: 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
      highlight: 'Percaya diri! 🌟'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Kelas Seni dan Kreativitas',
      age: 'Semua usia',
      description: 'Program ekstra kurikuler yang menumbuhkan bakat dan minat anak dalam seni rupa, musik, dan kreativitas lainnya.',
      features: ['Melukis & Mewarnai', 'Musik & Menyanyi', 'Tari & Drama', 'Kerajinan Tangan'],
      color: 'from-amber-500 via-orange-500 to-red-500',
      bgPattern: 'radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
      highlight: 'Ekspresikan diri! 🎭'
    }
  ];

  return (
    <section id="program" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block relative">
            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-[4rem] blur-3xl opacity-60"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-7xl drop-shadow-2xl animate-bounce-slow">✨</span>
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Program Kami
                </h2>
                <span className="text-7xl drop-shadow-2xl animate-bounce-slow animation-delay-1000">🎈</span>
              </div>
              <p className="text-xl sm:text-2xl text-slate-600 font-semibold mt-4">
                Kegiatan belajar yang dirancang khusus untuk anak usia dini
              </p>
              <div className="flex justify-center gap-2 mt-6">
                <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program, index) => (
            <div
              key={program.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Outer Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${program.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              
              {/* Card */}
              <div 
                className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
                style={{ background: `linear-gradient(135deg, white 0%, white 100%), ${program.bgPattern}` }}
              >
                {/* Gradient Accent Bar */}
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                
                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <span className="text-5xl">{program.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                          {program.title}
                        </h3>
                        <div className={`inline-flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${program.color} text-white text-sm font-bold shadow-md`}>
                          <span>👶</span>
                          <span>{program.age}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-slate-600 leading-relaxed mb-6 font-medium">
                    {program.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 group/item"
                      >
                        <span className="text-lg group-hover/item:scale-125 transition-transform duration-300">
                          {idx === 0 ? '📖' : idx === 1 ? '🎯' : idx === 2 ? '🎨' : '⭐'}
                        </span>
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${program.color} text-white font-black text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                      <span>{program.highlight}</span>
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href="#kontak"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-purple-200 text-purple-600 font-bold text-sm hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                    >
                      <span>Daftar</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-24 opacity-5">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={`fill-current text-gradient-to-r ${program.color}`}></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-2xl px-12 py-8 shadow-2xl border-2 border-purple-100">
              <p className="text-xl font-bold text-slate-700 mb-4">
                Belum menemukan program yang cocok? 🤔
              </p>
              <a
                href="https://wa.me/6281311279831"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Konsultasi via WhatsApp</span>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">💬</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
