import React from 'react';

export default function FAQ() {
const faqs = [
    { q: 'Kapan tahun ajaran dimulai?', a: 'Setiap Juli, namun pendaftaran dibuka sepanjang tahun selama kuota tersedia.' },
    { q: 'Apakah ada sesi trial?', a: 'Ada. Satu minggu pertama tersedia sesi trial gratis untuk penyesuaian anak.' },
    { q: 'Bagaimana sistem pembayaran?', a: 'Bulanan via transfer atau tunai di administrasi sekolah.' },
    { q: 'Apakah orang tua boleh mendampingi?', a: 'Pada masa adaptasi, orang tua dapat mendampingi sesuai arahan guru.' },
];

return (
    <section id="faq" className="py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-slate-800">Pertanyaan yang Sering Diajukan</h2>
        <p className="mt-3 text-slate-600">Informasi ringkas seputar pendaftaran dan kegiatan.</p>
        </div>

        <div className="mt-8 grid gap-3 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
        {faqs.map((item, i) => (
            <details key={i} className="group rounded-xl bg-white ring-1 ring-slate-200 p-4 open:ring-sky-200">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-800">
                {item.q}
                <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
            </summary>
            <p className="mt-2 text-slate-600">{item.a}</p>
            </details>
        ))}
        </div>
    </div>
    </section>
);
}
