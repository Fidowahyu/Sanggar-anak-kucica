import React, { useState } from 'react';

export default function FAQ() {
const faqs = [
    { q: 'Kapan tahun ajaran dimulai?', a: 'Setiap Juli, namun pendaftaran dibuka sepanjang tahun selama kuota tersedia.' },
    { q: 'Apakah ada sesi trial?', a: 'Ada. Satu minggu pertama tersedia sesi trial gratis untuk penyesuaian anak.' },
    { q: 'Bagaimana sistem pembayaran?', a: 'Bulanan via transfer atau tunai di administrasi sekolah.' },
    { q: 'Apakah orang tua boleh mendampingi?', a: 'Pada masa adaptasi, orang tua dapat mendampingi sesuai arahan guru.' },
];

    const [open, setOpen] = useState(null);

return (
    <section id="faq" className="py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-slate-800">Pertanyaan yang Sering Diajukan</h2>
        <p className="mt-3 text-slate-600">Informasi ringkas seputar pendaftaran dan kegiatan.</p>
        </div>

        <div className="mt-8 grid gap-3 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
        {faqs.map((item, i) => {
                    const isOpen = open === i;
                    return (
                    <div key={i} className={`rounded-xl card-gradient ring-1 ring-slate-200/40 p-4 ${isOpen ? 'shadow-xl' : ''}`}>
                        <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between font-semibold text-slate-800 cursor-pointer"
                        >
                        <span>{item.q}</span>
                        <span className={`ml-2 text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                        </button>

                        <div className={`mt-2 text-slate-600 overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                        <div className="pt-2">
                            {item.a}
                        </div>
                        </div>
                    </div>
                    )
                })}
        </div>
    </div>
    </section>
);
}
