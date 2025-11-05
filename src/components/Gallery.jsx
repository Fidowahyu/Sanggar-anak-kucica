import React from 'react';

export default function Gallery() {
const images = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596495578065-8e9d0f3a7d20?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529088748361-1f2e3f43bb56?q=80&w=800&auto=format&fit=crop'
];

return (
    <section id="galeri" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/40 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-slate-800">Galeri Kegiatan</h2>
        <p className="mt-3 text-slate-600">Momen ceria anak-anak saat belajar dan bermain.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
            <img key={i} data-aos="zoom-in" data-aos-delay={i * 50}
                className="rounded-2xl h-44 w-full object-cover ring-1 ring-slate-200" 
                alt={`Galeri ${i + 1}`} src={src} />
        ))}
        </div>
    </div>
    </section>
);
}
