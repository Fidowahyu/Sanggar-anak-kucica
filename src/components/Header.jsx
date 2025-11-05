import React from 'react';
import logo from '../assets/Logopaudkucica.png';

export default function Header() {
return (
    <header className="sticky top-0 z-50 glass shadow-lg shadow-slate-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-3 group">
        <div className="relative">
            <img
            src={logo}
            alt="Logo PAUD anak kucica"
            className="w-12 h-12 rounded-2xl ring-2 ring-sky-400/50 object-cover bg-white shadow-lg group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'inline-flex';
            }}
            />
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 text-white font-bold shadow-lg" style={{ display: 'none' }}>
            PK
            </span>
        </div>
        <div className="leading-tight">
            <div className="text-xl font-extrabold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">PAUD anak kucica</div>
            <div className="text-xs text-slate-600 font-medium">Belajar dengan Cinta dan Ceria</div>
        </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {['Beranda', 'Tentang Kami', 'Program', 'Fasilitas', 'Biaya', 'Galeri', 'FAQ', 'Kontak'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className="text-slate-700 hover:text-sky-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-sky-600 after:transition-all">
            {item}
            </a>
        ))}
        </nav>
        
        <a href="#kontak" className="ml-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-sm font-bold px-6 py-3 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105">
        Daftar Sekarang
        </a>
    </div>
    </header>
);
}
