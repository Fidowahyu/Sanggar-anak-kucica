import React from 'react';

export default function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-purple-50/40 to-blue-50/30">
      {/* Background Decoration - lebih subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[5%] text-7xl opacity-[0.06] animate-float">🎨</div>
        <div className="absolute bottom-20 right-[8%] text-6xl opacity-[0.08] animate-float" style={{ animationDelay: '1s' }}>📚</div>
        <div className="absolute top-[50%] right-[15%] text-5xl opacity-[0.06] animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - diperbesar dan lebih tegas */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block relative">
            {/* Glow effect lebih tegas */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200/60 via-pink-200/60 to-blue-200/60 rounded-[3rem] blur-2xl"></div>
            
            <div className="relative bg-white rounded-[2.5rem] px-10 sm:px-16 py-8 sm:py-12 shadow-2xl border border-purple-100/50">
              <div className="flex items-center justify-center gap-5 mb-4">
                <span className="text-6xl sm:text-7xl drop-shadow-lg">🏫</span>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Tentang Kami
                </h2>
                <span className="text-6xl sm:text-7xl drop-shadow-lg">✨</span>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <div className="h-2 w-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-md"></div>
                <div className="h-2 w-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-md"></div>
                <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid - diperkuat */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column - Visi & Misi */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Visi Card - lebih tegas */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-[2rem] opacity-20 group-hover:opacity-30 blur-lg transition duration-300"></div>
              <div className="relative bg-white rounded-[1.8rem] p-8 shadow-xl border-2 border-blue-100/50 hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-800">Visi</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  PAUD anak kucica berkomitmen menghadirkan <span className="font-bold text-blue-600">lingkungan belajar yang hangat, aman, dan menyenangkan</span>. Kami percaya setiap anak unik dan belajar terbaik melalui <span className="font-bold text-purple-600">permainan yang bermakna</span>.
                </p>
              </div>
            </div>

            {/* Misi Card - lebih tegas */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-[2rem] opacity-20 group-hover:opacity-30 blur-lg transition duration-300"></div>
              <div className="relative bg-white rounded-[1.8rem] p-8 shadow-xl border-2 border-purple-100/50 hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-800">Misi</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: '✅', text: 'Menciptakan lingkungan yang aman, ramah, dan inklusif', color: 'text-emerald-600' },
                    { icon: '🧠', text: 'Menstimulasi motorik, kognitif, bahasa, dan sosial emosional', color: 'text-blue-600' },
                    { icon: '🤝', text: 'Melibatkan orang tua sebagai mitra belajar', color: 'text-purple-600' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <span className="text-3xl flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">{item.icon}</span>
                      <span className={`text-lg font-bold ${item.color} leading-relaxed`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Profil Guru */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-[2rem] opacity-20 group-hover:opacity-30 blur-lg transition duration-300"></div>
              <div className="relative bg-white rounded-[1.8rem] p-8 shadow-xl border-2 border-emerald-100/50 hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">👩‍🏫</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-800">Profil Guru</h3>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { name: 'Bu Sari', cert: 'Bersertifikat', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
                    { name: 'Pak Budi', cert: 'Bersertifikat', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
                    { name: 'Bu Ani', cert: 'Bersertifikat', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }
                  ].map((guru, idx) => (
                    <div key={idx} className="group/card text-center">
                      <div className="relative mb-3">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-0 group-hover/card:opacity-40 blur transition duration-300"></div>
                        <img 
                          src={guru.img} 
                          alt={guru.name}
                          className="relative w-full aspect-square object-cover rounded-2xl shadow-lg group-hover/card:scale-105 transition-transform duration-300 border-3 border-white"
                        />
                      </div>
                      <div className="font-black text-base text-slate-800">{guru.name}</div>
                      <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg mt-1 inline-block">
                        {guru.cert}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
                  <p className="text-lg text-slate-700 leading-relaxed font-semibold text-center">
                    Tim pengajar kami terdiri dari <span className="text-emerald-700 font-black">pendidik bersertifikat dan berpengalaman</span> yang siap memberikan pembelajaran terbaik! 🌟
                  </p>
                </div>
              </div>
            </div>
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
