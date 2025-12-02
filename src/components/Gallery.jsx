import React from 'react';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596495578065-8e9d0f3a7d20?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529088748361-1f2e3f43bb56?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section id="galeri" className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-blue-50/30">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[8%] text-6xl opacity-8 animate-float">📸</div>
        <div className="absolute bottom-20 right-[10%] text-5xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🎨</div>
        <div className="absolute top-[50%] right-[5%] text-4xl opacity-8 animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-[2.5rem] blur-xl"></div>
            
            <div className="relative bg-white rounded-[2rem] px-8 sm:px-12 py-6 sm:py-8 shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl">📸</span>
                <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Galeri Kegiatan
                </h2>
                <span className="text-5xl">🎨</span>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-1.5 w-12 bg-blue-400/70 rounded-full"></div>
                <div className="h-1.5 w-12 bg-purple-400/70 rounded-full"></div>
                <div className="h-1.5 w-12 bg-pink-400/70 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Momen ceria anak-anak saat belajar dan bermain di Sanggar Anak Kucica ✨
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="zoom-in" 
              data-aos-delay={i * 50}
            >
              {/* Image */}
              <img 
                className="h-56 sm:h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={`Galeri ${i + 1}`} 
                src={src} 
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="font-bold text-sm">Kegiatan Seru</div>
                  <div className="text-xs mt-1 opacity-90">Anak-anak Kucica</div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ✨
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="inline-block bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">📷</span>
              <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Ingin Lihat Lebih Banyak?
              </h3>
            </div>
            <p className="text-slate-600 text-base sm:text-lg mb-6 font-medium">
              Follow Instagram kami untuk update kegiatan terbaru! 📱✨
            </p>
            <a 
              href="https://www.instagram.com/kucicasanggaranak" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-black">Follow Instagram</span>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">✨</span>
              </span>
            </a>
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
