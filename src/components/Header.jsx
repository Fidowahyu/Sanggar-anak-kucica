import React from 'react';
import logo from '../assets/Logopaudkucica.png';

export default function Header() {
    return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{background:'linear-gradient(90deg,var(--kucica-blue) 0%, rgba(59,130,246,0.95) 40%, rgba(255,210,63,0.08) 100%)', boxShadow:'0 6px 20px rgba(2,6,23,0.08)'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <a href="#beranda" className="flex items-center gap-3">
                    <div className="relative">
                                    <img
                                        src={logo}
                                        alt="Logo PAUD anak kucica"
                                        className="w-12 h-12 rounded-2xl object-cover image-ring"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.nextElementSibling;
                                if (fallback) fallback.style.display = 'inline-flex';
                            }}
                        />
                        <span className="inline-flex items-center justify-center w-12 h-12 sticker" style={{display:'none'}}>
                            🐾
                        </span>
                    </div>

                    <div className="leading-tight text-white">
                        <div className="text-lg font-extrabold">PAUD Anak Kucica</div>
                        <div className="text-xs opacity-90">Belajar dengan Cinta & Ceria</div>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-3">
                    {['Beranda', 'Tentang', 'Program', 'Fasilitas', 'Biaya', 'Galeri', 'FAQ', 'Kontak'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="pill-nav text-sm font-semibold text-white/90 hover:scale-105 hover:brightness-110">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a href="#kontak" className="btn-cta">
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </header>
    );
}
