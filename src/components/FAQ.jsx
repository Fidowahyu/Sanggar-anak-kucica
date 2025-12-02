import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Berapa usia minimal untuk mendaftar di PAUD Anak Kucica?',
      answer: 'Kami menerima anak mulai usia 2 tahun untuk kelas Playgroup. Untuk kelas TK A dimulai dari usia 4 tahun, dan TK B dari usia 5 tahun.',
      icon: '👶',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      question: 'Apa saja fasilitas yang tersedia di PAUD Anak Kucica?',
      answer: 'Kami menyediakan ruang kelas ber-AC, area bermain indoor & outdoor, perpustakaan mini, ruang seni, toilet khusus anak, dan sistem keamanan CCTV 24 jam.',
      icon: '🏫',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 3,
      question: 'Bagaimana sistem pembelajaran di PAUD Anak Kucica?',
      answer: 'Kami menggunakan metode pembelajaran berbasis bermain (play-based learning) yang disesuaikan dengan tahap perkembangan anak. Setiap aktivitas dirancang untuk mengembangkan aspek kognitif, motorik, sosial, dan emosional.',
      icon: '📚',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 4,
      question: 'Berapa jumlah siswa per kelas?',
      answer: 'Kami membatasi maksimal 15 siswa per kelas dengan 2 guru pendamping untuk memastikan setiap anak mendapat perhatian yang optimal.',
      icon: '👥',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      id: 5,
      question: 'Apakah ada program ekstrakurikuler?',
      answer: 'Ya! Kami menyediakan berbagai program ekstrakurikuler seperti seni (melukis, tari), musik, olahraga (renang, senam), dan bahasa Inggris. Semua disesuaikan dengan minat dan usia anak.',
      icon: '🎨',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200'
    },
    {
      id: 6,
      question: 'Bagaimana cara mendaftar dan berapa biayanya?',
      answer: 'Pendaftaran dapat dilakukan langsung di sekolah atau melalui WhatsApp. Untuk informasi detail mengenai biaya pendaftaran dan SPP bulanan, silakan hubungi kami untuk konsultasi gratis.',
      icon: '💰',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block relative">
            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-[4rem] blur-3xl opacity-60"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-7xl drop-shadow-2xl animate-bounce-slow">❓</span>
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  FAQ
                </h2>
                <span className="text-7xl drop-shadow-2xl animate-bounce-slow animation-delay-1000">💡</span>
              </div>
              <p className="text-xl sm:text-2xl text-slate-600 font-semibold mt-4">
                Pertanyaan yang Sering Ditanyakan
              </p>
              <div className="flex justify-center gap-2 mt-6">
                <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={faq.id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative"
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${faq.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                
                {/* FAQ Item */}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isOpen ? 'ring-2 ring-purple-300' : ''}`}>
                  {/* Question Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 sm:p-8 flex items-start gap-4 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 transition-all duration-300"
                  >
                    {/* Icon Badge */}
                    <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${faq.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-3xl sm:text-4xl">{faq.icon}</span>
                    </div>

                    {/* Question Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-2 pr-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {faq.question}
                      </h3>
                      {!isOpen && (
                        <p className="text-sm text-slate-500 font-medium">
                          Klik untuk melihat jawaban
                        </p>
                      )}
                    </div>

                    {/* Plus/Minus Button */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${faq.color} flex items-center justify-center text-white font-black text-2xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <span className="group-hover:scale-125 transition-transform duration-200">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`px-6 sm:px-8 pb-6 sm:pb-8 pt-0`}>
                      <div className={`p-6 rounded-2xl ${faq.bgColor} border-2 ${faq.borderColor}`}>
                        <p className="text-base text-slate-700 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  {isOpen && (
                    <div className={`h-1 bg-gradient-to-r ${faq.color}`}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-2xl px-12 py-8 shadow-2xl border-2 border-purple-100">
              <p className="text-xl font-bold text-slate-700 mb-2">
                Masih ada pertanyaan? 🤔
              </p>
              <p className="text-base text-slate-600 mb-6">
                Tim kami siap membantu Anda!
              </p>
              <a
                href="#kontak"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-black text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <span className="font-black">Hubungi Kami Sekarang</span>
                  <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">📞</span>
                </span>
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
