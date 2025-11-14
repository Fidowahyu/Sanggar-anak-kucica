import React from 'react';

export default function Facilities() {
const facilities = [
    { icon: '🏫', title: 'Ruang Kelas Nyaman', desc: 'Ventilasi baik, pencahayaan alami, meja-kursi cocok anak.', color: 'kucica-blue' },
    { icon: '🤸‍♀️', title: 'Area Bermain Aman', desc: 'Outdoor & indoor dengan standar keselamatan.', color: 'kucica-yellow' },
    { icon: '📚', title: 'Perpustakaan Mini', desc: 'Buku cerita dan edukasi untuk anak-anak.', color: 'kucica-blue' },
    { icon: '🎨', title: 'Ruang Seni', desc: 'Cat, kertas, alat musik dan craft untuk eksplorasi.', color: 'kucica-yellow' },
    { icon: '🚽', title: 'Toilet Anak', desc: 'Khusus anak dengan kebersihan dan kenyamanan.', color: 'kucica-blue' },
    { icon: '🔒', title: 'Keamanan & Pengawasan', desc: 'Kualitas keamanan tinggi selama jam operasional.', color: 'kucica-yellow' },
];

return (
    <section id="fasilitas" className="py-24 sm:py-32 bg-gradient-to-b from-kucica-blue to-kucica-yellow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-kucica-yellow to-kucica-blue">Fasilitas Seru di PAUD Kucica</h2>
        <p className="mt-4 text-lg text-slate-700">Tempat bermain & belajar yang hangat, aman, dan penuh warna.</p>
        </div>
        
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 50}
                className="relative p-6 rounded-2xl shadow-xl flex items-start gap-4 group overflow-hidden card-gradient">

            {/* playful badge (emoji sticker) */}
            <span className="absolute -top-3 -right-3 rounded-full p-2 text-xl shadow-md sticker">{f.icon}</span>

            <div className={`flex-none w-16 h-16 rounded-xl flex items-center justify-center text-2xl shadow-md`} style={{background: f.color === 'kucica-yellow' ? 'rgba(255,210,63,0.18)' : 'rgba(59,130,246,0.12)'}}>
                <div className="text-2xl">{f.icon}</div>
            </div>

            <div className="text-left">
                <div className="font-bold text-lg text-slate-900">{f.title}</div>
                <div className="text-slate-800 text-sm mt-2 leading-relaxed">{f.desc}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold badge">Terpercaya</span>
                    <span className="text-xs text-slate-800">&middot; Aman & Bersih</span>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}
