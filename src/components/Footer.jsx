import React from 'react';
import logo from '../assets/Logopaudkucica.png';

export default function Footer() {
    return (
        <footer className="border-t border-transparent" style={{background: 'linear-gradient(180deg, rgba(59,130,246,0.06), rgba(255,210,63,0.03))'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between gap-8 flex-col sm:flex-row">
        <div className="flex items-center gap-4">
            <img src={logo} alt="Logo PAUD anak kucica" 
                                className="w-14 h-14 rounded-2xl object-cover image-ring" 
                onError={(e) => {
                e.currentTarget.style.display = 'none';
                }}
            />
            <div>
                            <div className="font-black text-xl text-white">PAUD anak kucica</div>
                            <div className="text-sm text-white/90 mt-1">Belajar dengan Cinta dan Ceria</div>
            </div>
        </div>
                <div className="text-sm text-white/90 leading-relaxed">
                    <strong>Alamat:</strong> Jl. Kemakmuran Raya No.2 Kav.45, Mekar Jaya, Sukmajaya, Depok City, West Java 1641<br/>
                    <strong>Telp:</strong> nomor kucica
                </div>
        </div>
        
                <div className="mt-8 pt-8 border-t border-transparent flex items-center justify-between flex-col sm:flex-row gap-4">
                    <div className="text-sm text-white/90">© {new Date().getFullYear()} PAUD anak kucica. Semua hak dilindungi.</div>
                    <div className="flex items-center gap-6 text-sm font-medium">
                        {['Beranda', 'Tentang', 'Program', 'Kontak'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/90 hover:text-yellow-200">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
