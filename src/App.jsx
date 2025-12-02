import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useInjectStyles from './hooks/useInjectStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import Registration from './pages/Registration';
import './App.css';

export default function App() {
  useInjectStyles();

  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    program: 'paud'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        }, 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden text-slate-900" style={{paddingTop: '72px', background: 'linear-gradient(180deg, rgba(59,130,246,0.14) 0%, rgba(255,210,63,0.12) 40%, rgba(59,130,246,0.06) 100%)'}}>
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><About /><Programs /><Facilities /><Pricing /><Gallery /><FAQ /><Contact /></>} />
          <Route path="/registration" element={
            <section className="registration">
              <div className="registration-container">
                <h2 className="section-title">Daftar Sekarang! 📝</h2>
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">🎉</div>
                    <h3>Yeay! Pendaftaran Berhasil!</h3>
                    <p>Kami akan segera menghubungi Anda 😊</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                      <label>👤 Nama Orang Tua</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Masukkan nama orang tua"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>👶 Nama Anak</label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="Masukkan nama anak"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>📱 Nomor Telepon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="08xx xxxx xxxx"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>🎯 Pilih Program</label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="program"
                            value="paud"
                            checked={formData.program === 'paud'}
                            onChange={handleChange}
                          />
                          <span className="radio-custom">🎨 Program PAUD</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="program"
                            value="psikolog"
                            checked={formData.program === 'psikolog'}
                            onChange={handleChange}
                          />
                          <span className="radio-custom">🧠 Konsultasi Psikolog</span>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="submit-button">
                      ✨ Daftar Sekarang!
                    </button>
                  </form>
                )}
              </div>
            </section>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}