import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Registration.css'

function Registration() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    program: 'paud'
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:4001/api/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ parentName: '', childName: '', phone: '', program: 'paud' })
        }, 5000)
      } else {
        throw new Error('Pendaftaran gagal. Silakan coba lagi.')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const packages = [
    {
      id: 1,
      name: 'Playgroup',
      price: 'Rp250.000',
      period: '/bln',
      age: '2-4 tahun',
      frequency: '3x per minggu',
      features: [
        { icon: '🎯', text: 'Seragam 1 stel', included: true },
        { icon: '🎨', text: 'Kegiatan tematik', included: true },
        { icon: '📚', text: 'Buku panduan', included: true },
        { icon: '🎭', text: 'Ekstrakurikuler gratis', included: false }
      ],
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      recommended: false,
      icon: '🎮'
    },
    {
      id: 2,
      name: 'TK A',
      price: 'Rp300.000',
      period: '/bln',
      age: '4-5 tahun',
      frequency: '4x per minggu',
      features: [
        { icon: '🎯', text: 'Seragam 2 stel', included: true },
        { icon: '📖', text: 'Laporan perkembangan', included: true },
        { icon: '🎨', text: 'Field trip bulanan', included: true },
        { icon: '🎭', text: 'Ekstrakurikuler gratis', included: true }
      ],
      color: 'from-purple-500 via-pink-500 to-rose-500',
      recommended: true,
      icon: '📚'
    },
    {
      id: 3,
      name: 'TK B',
      price: 'Rp350.000',
      period: '/bln',
      age: '5-6 tahun',
      frequency: '5x per minggu',
      features: [
        { icon: '🎯', text: 'Seragam 2 stel', included: true },
        { icon: '📖', text: 'Persiapan SD lengkap', included: true },
        { icon: '🎨', text: 'Field trip & workshop', included: true },
        { icon: '🎭', text: 'Ekstrakurikuler premium', included: true }
      ],
      color: 'from-emerald-500 via-green-500 to-lime-500',
      recommended: false,
      icon: '🎯'
    }
  ];

  return (
    <div className="registration-page">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">🎨</span>
            <span className="logo-text">Sanggar Anak Kucica</span>
          </Link>
          <Link to="/" className="back-link">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"/>
            </svg>
            Kembali
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Left Section - Info */}
          <div className="info-section">
            <h1 className="main-title">Bergabung Bersama Kami</h1>
            <p className="main-description">
              Daftarkan anak Anda sekarang dan berikan mereka kesempatan untuk tumbuh dan berkembang di lingkungan yang positif dan menyenangkan.
            </p>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3>Proses Mudah & Cepat</h3>
                  <p>Formulir sederhana yang dapat diselesaikan dalam 3 menit</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <div>
                  <h3>Guru Berpengalaman</h3>
                  <p>Tim pengajar profesional dan bersertifikat</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3>Respon 24 Jam</h3>
                  <p>Tim kami akan menghubungi Anda dalam waktu 1x24 jam</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div>
                  <h3>Data Terjamin Aman</h3>
                  <p>Privasi dan keamanan data Anda adalah prioritas kami</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="form-section">
            {submitted ? (
              <div className="success-card">
                <div className="success-checkmark">
                  <svg viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="25" fill="none"/>
                    <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                </div>
                <h2>Pendaftaran Berhasil!</h2>
                <p>Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda untuk informasi lebih lanjut.</p>
                <Link to="/" className="btn-home">
                  Kembali ke Beranda
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-header">
                  <h2>Formulir Pendaftaran</h2>
                  <p>Lengkapi data berikut dengan benar</p>
                </div>

                {error && (
                  <div className="error-alert">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                    </svg>
                    {error}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="parentName">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Nama Orang Tua / Wali
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childName">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Nama Anak
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Contoh: Andi Santoso"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08123456789"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>
                    Pilih Program
                  </label>
                  <div className="program-choices">
                    <label className={`program-card ${formData.program === 'paud' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="program"
                        value="paud"
                        checked={formData.program === 'paud'}
                        onChange={handleChange}
                      />
                      <div className="card-content">
                        <div className="card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                          </svg>
                        </div>
                        <div>
                          <h4>Program PAUD</h4>
                          <p>Pendidikan Anak Usia Dini</p>
                        </div>
                      </div>
                    </label>

                    <label className={`program-card ${formData.program === 'psikolog' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="program"
                        value="psikolog"
                        checked={formData.program === 'psikolog'}
                        onChange={handleChange}
                      />
                      <div className="card-content">
                        <div className="card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                          </svg>
                        </div>
                        <div>
                          <h4>Konsultasi Psikolog</h4>
                          <p>Bimbingan Profesional</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pendaftaran
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* WhatsApp Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/6281311279831"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <span>Chat via WhatsApp</span>
          <span className="text-xl">💬</span>
        </a>
      </div>

      {/* Pricing Section - Biaya Pendidikan */}
      <section id="biaya" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40">
        {/* Animated Background Blobs */}
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
                  <span className="text-7xl drop-shadow-2xl animate-bounce-slow">💰</span>
                  <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Biaya Pendidikan
                  </h2>
                  <span className="text-7xl drop-shadow-2xl animate-bounce-slow animation-delay-1000">🎓</span>
                </div>
                <p className="text-xl sm:text-2xl text-slate-600 font-semibold mt-4">
                  Pilih paket sesuai kebutuhan anak
                </p>
                <div className="flex justify-center gap-2 mt-6">
                  <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative ${pkg.recommended ? 'md:-translate-y-4' : ''}`}
              >
                {/* Recommended Badge */}
                {pkg.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-75"></div>
                      <div className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-black rounded-full shadow-xl border-2 border-white flex items-center gap-2">
                        <span>⭐</span>
                        <span>Rekomendasi</span>
                        <span>⭐</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Outer Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${pkg.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                
                {/* Card */}
                <div className={`relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ${pkg.recommended ? 'ring-4 ring-purple-200' : ''}`}>
                  {/* Gradient Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${pkg.color} p-8 overflow-hidden`}>
                    {/* Icon Badge */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
                    
                    <div className="relative z-10">
                      <div className="text-6xl mb-4 drop-shadow-lg">{pkg.icon}</div>
                      <h3 className="text-3xl font-black text-white mb-2">{pkg.name}</h3>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold">
                        <span>👶</span>
                        <span>{pkg.age}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-end justify-center gap-1 mb-2">
                        <span className={`text-5xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                          {pkg.price}
                        </span>
                        <span className="text-2xl font-bold text-slate-400 mb-1">{pkg.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full text-slate-600 text-sm font-bold">
                        <span>📅</span>
                        <span>{pkg.frequency}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${
                            feature.included 
                              ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200' 
                              : 'bg-slate-50 border border-slate-200 opacity-60'
                          }`}
                        >
                          <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                          <div className="flex-1">
                            <span className={`text-sm font-bold ${feature.included ? 'text-slate-700' : 'text-slate-500 line-through'}`}>
                              {feature.text}
                            </span>
                          </div>
                          {feature.included ? (
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#kontak"
                      className={`group/btn relative block w-full py-4 px-6 bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-black text-center rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>Daftar {pkg.name}</span>
                        <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </a>
                  </div>

                  {/* Bottom Decorative Wave */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={`fill-current bg-gradient-to-r ${pkg.color}`}></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl px-12 py-8 shadow-2xl border-2 border-purple-100">
                <p className="text-lg text-slate-700 mb-4">
                  <span className="font-black text-purple-600">📝 Catatan:</span> Biaya pendaftaran dan kelengkapan perlengkapan awal diinformasikan saat konsultasi.
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
                  <span>Tanya Detail Biaya</span>
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
    </div>
  )
}

export default Registration
