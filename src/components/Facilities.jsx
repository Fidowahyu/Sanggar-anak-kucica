import React from 'react';

export default function Facilities() {
  const facilities = [
    { 
      icon: '🏫', 
      title: 'Ruang Kelas Nyaman', 
      desc: 'Ventilasi baik, pencahayaan alami, meja-kursi cocok anak.', 
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-blue-50',
      accentColor: 'text-blue-600',
      tag: 'Terpercaya'
    },
    { 
      icon: '🤸‍♀️', 
      title: 'Area Bermain Aman', 
      desc: 'Outdoor & indoor dengan standar keselamatan.', 
      color: 'from-amber-500 via-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      accentColor: 'text-orange-600',
      tag: 'Seru'
    },
    { 
      icon: '📚', 
      title: 'Perpustakaan Mini', 
      desc: 'Buku cerita dan edukasi untuk anak-anak.', 
      color: 'from-purple-500 via-pink-500 to-rose-500',
      bgColor: 'bg-purple-50',
      accentColor: 'text-purple-600',
      tag: 'Edukatif'
    },
    { 
      icon: '🎨', 
      title: 'Ruang Seni', 
      desc: 'Cat, kertas, alat musik dan craft untuk eksplorasi.', 
      color: 'from-emerald-500 via-green-500 to-lime-500',
      bgColor: 'bg-emerald-50',
      accentColor: 'text-emerald-600',
      tag: 'Kreatif'
    },
    { 
      icon: '🚽', 
      title: 'Toilet Anak', 
      desc: 'Khusus anak dengan kebersihan dan kenyamanan.', 
      color: 'from-sky-500 via-blue-500 to-indigo-500',
      bgColor: 'bg-sky-50',
      accentColor: 'text-sky-600',
      tag: 'Bersih'
    },
    { 
      icon: '🔒', 
      title: 'Keamanan & Pengawasan', 
      desc: 'Kualitas keamanan tinggi selama jam operasional.', 
      color: 'from-rose-500 via-pink-500 to-fuchsia-500',
      bgColor: 'bg-rose-50',
      accentColor: 'text-rose-600',
      tag: 'Aman'
    },
  ];

  return (
    <section id="fasilitas" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-60 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block relative">
            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-[4rem] blur-3xl opacity-60"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-7xl drop-shadow-2xl animate-bounce-slow">🏢</span>
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Fasilitas Seru
                </h2>
                <span className="text-7xl drop-shadow-2xl animate-bounce-slow animation-delay-1000">🎈</span>
              </div>
              <p className="text-xl sm:text-2xl text-slate-600 font-semibold mt-4">
                Tempat bermain & belajar yang hangat, aman, dan penuh warna
              </p>
              <div className="flex justify-center gap-2 mt-6">
                <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative"
            >
              {/* Outer Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${facility.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Gradient Accent Bar */}
                <div className={`h-2 bg-gradient-to-r ${facility.color}`}></div>
                
                <div className="p-6">
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-5 -right-5 z-10">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white`}>
                      <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{facility.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    <h3 className={`text-2xl font-black ${facility.accentColor} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300`}>
                      {facility.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                      {facility.desc}
                    </p>

                    {/* Tags & Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${facility.color} text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                        <span className="text-base">✓</span>
                        <span>{facility.tag}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${facility.bgColor} animate-pulse`}></div>
                        <div className={`w-2 h-2 rounded-full ${facility.bgColor} animate-pulse animation-delay-200`}></div>
                        <div className={`w-2 h-2 rounded-full ${facility.bgColor} animate-pulse animation-delay-400`}></div>
                      </div>
                    </div>

                    {/* Info Badge */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full ${facility.bgColor} ${facility.accentColor} text-xs font-bold`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Aman & Bersih
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 opacity-5 pointer-events-none">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={`fill-current bg-gradient-to-r ${facility.color}`}></path>
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
                Ingin lihat fasilitas kami secara langsung? 🏫
              </p>
              <a
                href="#kontak"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-black text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Jadwalkan Kunjungan</span>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🗓️</span>
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
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
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
