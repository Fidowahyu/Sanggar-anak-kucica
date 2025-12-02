import React, { useState } from 'react';

export default function Daftar() {
  const [formData, setFormData] = useState({
    namaAnak: '',
    tanggalLahir: '',
    namaOrangTua: '',
    noTelepon: '',
    email: '',
    alamat: '',
    program: '',
    pesan: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const programs = [
    { value: 'menggambar', label: '🎨 Menggambar & Melukis', color: 'from-pink-400 to-rose-400' },
    { value: 'melukis', label: '🖌️ Seni Lukis', color: 'from-purple-400 to-violet-400' },
    { value: 'kerajinan', label: '✂️ Kerajinan Tangan', color: 'from-blue-400 to-cyan-400' },
    { value: 'musik', label: '🎵 Musik & Bernyanyi', color: 'from-yellow-400 to-amber-400' },
    { value: 'tari', label: '💃 Tari Kreasi', color: 'from-green-400 to-emerald-400' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        namaAnak: '',
        tanggalLahir: '',
        namaOrangTua: '',
        noTelepon: '',
        email: '',
        alamat: '',
        program: '',
        pesan: ''
      });
    }, 3000);
  };

  return (
    <section id="daftar" className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[8%] text-7xl opacity-20 animate-float">🎨</div>
        <div className="absolute top-32 right-[12%] text-6xl opacity-25 animate-float" style={{ animationDelay: '0.5s' }}>✏️</div>
        <div className="absolute bottom-20 left-[15%] text-8xl opacity-15 animate-float" style={{ animationDelay: '1s' }}>🎈</div>
        <div className="absolute top-[60%] left-[10%] text-5xl opacity-30 animate-spin-slow">⭐</div>
        <div className="absolute top-[40%] right-[8%] text-6xl opacity-20 animate-bounce-slow">🌈</div>
        <div className="absolute bottom-32 right-[20%] text-5xl opacity-25 animate-wiggle">🎭</div>
        <div className="absolute top-[50%] right-[5%] text-4xl opacity-30 animate-pulse-slow">💖</div>
        <div className="absolute bottom-[40%] left-[5%] text-5xl opacity-20 animate-wiggle" style={{ animationDelay: '0.8s' }}>🎪</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-[3rem] shadow-xl"></div>
            
            <div className="relative bg-white rounded-[2.5rem] px-8 sm:px-12 py-6 sm:py-8 shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-6xl animate-bounce">📝</span>
                <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Daftar Sekarang!
                </h2>
                <span className="text-6xl animate-bounce" style={{ animationDelay: '0.3s' }}>🎉</span>
              </div>
              <div className="flex justify-center gap-2">
                <div className="h-3 w-20 bg-pink-400 rounded-full"></div>
                <div className="h-3 w-20 bg-purple-400 rounded-full"></div>
                <div className="h-3 w-20 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-xl sm:text-2xl text-slate-700 max-w-2xl mx-auto font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Ayo bergabung dengan Sanggar Anak Kucica! 🚀<br/>
            <span className="text-purple-600">Isi formulir di bawah untuk mendaftar ✨</span>
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 text-6xl animate-bounce-slow">🎨</div>
            <div className="absolute -top-8 -right-8 text-6xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🎪</div>
            <div className="absolute -bottom-8 -left-8 text-6xl animate-wiggle">🌟</div>
            <div className="absolute -bottom-8 -right-8 text-6xl animate-wiggle" style={{ animationDelay: '0.5s' }}>⭐</div>

            {/* Form Card */}
            <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-2 rounded-[2.5rem] shadow-2xl">
              <div className="bg-white rounded-[2.3rem] p-8 sm:p-12">
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl border-4 border-green-400 animate-bounce" data-aos="zoom-in">
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-5xl">🎉</span>
                      <div>
                        <h3 className="text-2xl font-black text-green-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Pendaftaran Berhasil!
                        </h3>
                        <p className="text-green-600 font-semibold">Terima kasih! Kami akan segera menghubungi Anda 😊</p>
                      </div>
                      <span className="text-5xl">✨</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Data Anak Section */}
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 border-4 border-dashed border-pink-300">
                    <h3 className="text-2xl sm:text-3xl font-black text-pink-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      <span className="text-4xl">👶</span>
                      Data Anak
                      <span className="text-4xl">🎈</span>
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Nama Lengkap Anak *
                        </label>
                        <input
                          type="text"
                          name="namaAnak"
                          value={formData.namaAnak}
                          onChange={handleChange}
                          required
                          placeholder="Masukkan nama anak"
                          className="w-full px-6 py-4 rounded-2xl border-3 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 text-lg transition-all duration-300 font-semibold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Tanggal Lahir *
                        </label>
                        <input
                          type="date"
                          name="tanggalLahir"
                          value={formData.tanggalLahir}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border-3 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 text-lg transition-all duration-300 font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Data Orang Tua Section */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 border-4 border-dashed border-purple-300">
                    <h3 className="text-2xl sm:text-3xl font-black text-purple-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      <span className="text-4xl">👨‍👩‍👧</span>
                      Data Orang Tua
                      <span className="text-4xl">💖</span>
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Nama Orang Tua *
                        </label>
                        <input
                          type="text"
                          name="namaOrangTua"
                          value={formData.namaOrangTua}
                          onChange={handleChange}
                          required
                          placeholder="Nama Ayah/Ibu"
                          className="w-full px-6 py-4 rounded-2xl border-3 border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 text-lg transition-all duration-300 font-semibold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Nomor Telepon *
                        </label>
                        <input
                          type="tel"
                          name="noTelepon"
                          value={formData.noTelepon}
                          onChange={handleChange}
                          required
                          placeholder="08xxxxxxxxxx"
                          className="w-full px-6 py-4 rounded-2xl border-3 border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 text-lg transition-all duration-300 font-semibold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@example.com"
                          className="w-full px-6 py-4 rounded-2xl border-3 border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 text-lg transition-all duration-300 font-semibold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-lg font-bold text-slate-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Alamat *
                        </label>
                        <input
                          type="text"
                          name="alamat"
                          value={formData.alamat}
                          onChange={handleChange}
                          required
                          placeholder="Alamat lengkap"
                          className="w-full px-6 py-4 rounded-2xl border-3 border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 text-lg transition-all duration-300 font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Section */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border-4 border-dashed border-blue-300">
                    <h3 className="text-2xl sm:text-3xl font-black text-blue-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      <span className="text-4xl">🎯</span>
                      Pilih Program
                      <span className="text-4xl">🎨</span>
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {programs.map((program) => (
                        <label
                          key={program.value}
                          className={`relative cursor-pointer group`}
                        >
                          <input
                            type="radio"
                            name="program"
                            value={program.value}
                            checked={formData.program === program.value}
                            onChange={handleChange}
                            required
                            className="peer sr-only"
                          />
                          <div className={`p-5 rounded-2xl border-4 transition-all duration-300 ${
                            formData.program === program.value
                              ? `bg-gradient-to-r ${program.color} border-white shadow-xl scale-105`
                              : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-lg'
                          }`}>
                            <span className={`text-xl font-black ${
                              formData.program === program.value ? 'text-white' : 'text-slate-700'
                            }`} style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                              {program.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Pesan Section */}
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-6 border-4 border-dashed border-yellow-300">
                    <label className="block text-2xl font-black text-yellow-700 mb-4 flex items-center gap-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      <span className="text-4xl">💬</span>
                      Pesan Tambahan
                      <span className="text-4xl">✨</span>
                    </label>
                    <textarea
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Ada yang ingin Anda tanyakan atau sampaikan?"
                      className="w-full px-6 py-4 rounded-2xl border-3 border-yellow-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-200 text-lg transition-all duration-300 font-semibold resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-black text-2xl sm:text-3xl rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-4 border-white group"
                      style={{ fontFamily: 'Comic Sans MS, cursive' }}
                    >
                      <span className="text-4xl group-hover:animate-bounce">📝</span>
                      <span>Kirim Pendaftaran</span>
                      <span className="text-4xl group-hover:rotate-12 transition-transform">🎉</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-pink-200 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-3">⚡</div>
            <h4 className="text-xl font-black text-pink-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Proses Cepat
            </h4>
            <p className="text-slate-600 font-semibold">Pendaftaran diproses maksimal 2x24 jam</p>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-purple-200 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-3">🎁</div>
            <h4 className="text-xl font-black text-purple-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Trial Gratis
            </h4>
            <p className="text-slate-600 font-semibold">1 minggu trial tanpa biaya untuk anak baru</p>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-blue-200 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-3">💝</div>
            <h4 className="text-xl font-black text-blue-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Bonus Starter Kit
            </h4>
            <p className="text-slate-600 font-semibold">Dapatkan peralatan seni gratis saat daftar!</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(147, 51, 234, 0.5);
        }
      `}</style>
    </section>
  );
}
