import React from 'react';
import logo from '../assets/Logopaudkucica.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between gap-8 flex-col sm:flex-row">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo PAUD anak kucica" 
                 className="w-14 h-14 rounded-2xl ring-2 ring-sky-300 object-cover bg-white shadow-lg" 
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                 }}
            />
            <div>
              <div className="font-black text-xl bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                PAUD anak kucica
              </div>
              <div className="text-sm text-slate-500 mt-1">Belajar dengan Cinta dan Ceria</div>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed">
            <strong>Alamat:</strong> Jl. Kemakmuran Raya No.2 Kav.45, Mekar Jaya, Sukmajaya, Depok City, West Java 1641<br/>
            <strong>Telp:</strong> nomor kucica
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} PAUD anak kucica. Semua hak dilindungi.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            {['Beranda', 'Tentang Kami', 'Program', 'Kontak'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 hover:text-sky-600">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
