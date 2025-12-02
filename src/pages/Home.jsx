import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FAQ from '../components/FAQ'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎨</span>
              <span className="text-xl font-bold text-slate-800">Sanggar Anak Kucica</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#program" className="text-slate-600 hover:text-purple-600 font-medium">Program</a>
              <a href="#faq" className="text-slate-600 hover:text-purple-600 font-medium">FAQ</a>
              <Link 
                to="/daftar"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transition-all"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-6">
                Tempat Terbaik untuk
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Tumbuh & Berkembang
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sanggar Anak Kucica menyediakan program pendidikan usia dini dan konsultasi psikologi 
                untuk membantu anak-anak mencapai potensi terbaik mereka.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/daftar"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Mulai Pendaftaran
                </Link>
                <a
                  href="#program"
                  className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all border-2 border-purple-200"
                >
                  Lihat Program
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="text-9xl animate-bounce">🎈</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-slate-600 font-medium">Anak Terdaftar</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-slate-600 font-medium">Guru Berpengalaman</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <div className="text-slate-600 font-medium">Tahun Pengalaman</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-slate-600 font-medium">Kepuasan Orang Tua</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
              Program Kami
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan anak Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PAUD Card */}
            <div data-aos="fade-up" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📚
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Program PAUD</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Pendidikan Anak Usia Dini dengan metode pembelajaran yang menyenangkan dan interaktif.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Kurikulum terstruktur
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Kelas kecil (max 15 anak)
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Fasilitas bermain lengkap
                </li>
              </ul>
              <Link
                to="/daftar"
                className="block w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-center rounded-xl hover:shadow-lg transition-all"
              >
                Daftar Program
              </Link>
            </div>

            {/* Psikolog Card */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🧠
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Konsultasi Psikolog</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Bimbingan profesional untuk perkembangan psikologis dan emosional anak dari ahli berpengalaman.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Psikolog bersertifikat
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Konsultasi personal
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Pendampingan orang tua
                </li>
              </ul>
              <Link
                to="/daftar"
                className="block w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center rounded-xl hover:shadow-lg transition-all"
              >
                Daftar Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Siap Memulai Perjalanan Belajar?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Daftarkan anak Anda sekarang dan berikan mereka kesempatan untuk berkembang optimal
          </p>
          <Link
            to="/daftar"
            className="inline-block px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sanggar Anak Kucica</h3>
              <p className="text-slate-400">
                Membentuk generasi cerdas dan bahagia melalui pendidikan berkualitas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Kontak</h4>
              <p className="text-slate-400">Email: info@sanggaranakkucica.com</p>
              <p className="text-slate-400">Telepon: (021) 1234-5678</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Alamat</h4>
              <p className="text-slate-400">Jl. Pendidikan No. 123</p>
              <p className="text-slate-400">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Sanggar Anak Kucica. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
