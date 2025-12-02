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
    </div>
  )
}

export default Registration
