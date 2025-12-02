import React, { useState } from 'react';

export default function FAQ() {
  const faqs = [
    { 
      q: 'Kapan tahun ajaran dimulai?', 
      a: 'Setiap Juli, namun pendaftaran dibuka sepanjang tahun selama kuota tersedia.',
      icon: '📅',
      color: 'from-pink-100 to-pink-50'
    },
    { 
      q: 'Apakah ada sesi trial?', 
      a: 'Ada! Satu minggu pertama tersedia sesi trial gratis untuk penyesuaian anak.',
      icon: '🎯',
      color: 'from-blue-100 to-blue-50'
    },
    { 
      q: 'Bagaimana sistem pembayaran?', 
      a: 'Bulanan via transfer atau tunai di administrasi sekolah. Mudah dan fleksibel!',
      icon: '💳',
      color: 'from-yellow-100 to-yellow-50'
    },
    { 
      q: 'Apakah orang tua boleh mendampingi?', 
      a: 'Pada masa adaptasi, orang tua dapat mendampingi sesuai arahan guru kami.',
      icon: '👨‍👩‍👧',
      color: 'from-purple-100 to-purple-50'
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🎈</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">⭐</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>🎨</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>🌈</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with playful design */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl animate-bounce">❓</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Ada Pertanyaan?
              </h2>
              <span className="text-5xl animate-bounce" style={{ animationDelay: '0.3s' }}>💡</span>
            </div>
            <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Temukan jawabannya di sini! Klik pertanyaan untuk melihat penjelasannya 👇
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="mt-12 grid gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div 
                key={i} 
                className={`group relative rounded-3xl bg-gradient-to-br ${item.color} p-1 transition-all duration-300 ${
                  isOpen ? 'shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'
                }`}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                {/* Sparkle effect on hover */}
                <div className={`absolute -top-2 -right-2 text-3xl transition-all duration-300 ${
                  isOpen ? 'scale-150 rotate-12' : 'scale-0'
                }`}>
                  ✨
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 text-left cursor-pointer group"
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl sm:text-4xl transform transition-transform duration-300 ${
                      isOpen ? 'rotate-12 scale-110' : 'group-hover:scale-110 group-hover:rotate-6'
                    }`}>
                      {item.icon}
                    </div>

                    {/* Question */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                        {item.q}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl transform transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-gradient-to-br from-green-400 to-blue-400' : ''
                    }`}>
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  {/* Answer with smooth animation */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t-2 border-dashed border-purple-200">
                      <div className="flex gap-3">
                        <span className="text-2xl flex-shrink-0">💬</span>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-block bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🤔</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
                Masih Ada Pertanyaan Lain?
              </h3>
              <span className="text-4xl">💭</span>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              Tim kami siap membantu menjawab semua pertanyaan Anda!
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Hubungi Kami</span>
              <span className="text-2xl animate-bounce">📞</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
