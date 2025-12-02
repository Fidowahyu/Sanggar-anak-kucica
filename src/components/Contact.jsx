import React from 'react';
import logo from '../assets/Logopaudkucica.png';
import { KUCICA_ADDRESS } from '../constants/config';
import { openWhatsApp, openMap } from '../utils/helpers';

export default function Contact() {
return (
    <section id="kontak" className="py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-slate-800">Kontak & Pendaftaran</h2>
        <p className="mt-3 text-slate-600">Hubungi kami untuk informasi pendaftaran dan kunjungan.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: contact card */}
    <div data-aos="fade-up" className="p-8 rounded-3xl card-gradient ring-1 ring-slate-200/40 shadow-xl flex flex-col gap-6">
            <div className="flex items-start gap-4">
            <img src={logo} alt="PAUD anak kucica" className="w-16 h-16 rounded-xl ring-2 ring-sky-100 object-cover shadow-md" />
            <div>
                <h3 className="text-2xl font-extrabold text-slate-800">Kontak & Informasi Pendaftaran</h3>
                <p className="mt-1 text-sm text-slate-600">Pendaftaran melalui kontak langsung. Hubungi kami untuk jadwal kunjungan dan informasi lebih lanjut.</p>
            </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
            <div>
                <h4 className="text-sm font-semibold text-slate-700">Alamat</h4>
                <address className="not-italic mt-2 text-sm text-slate-600">{KUCICA_ADDRESS}</address>

                <h4 className="mt-4 text-sm font-semibold text-slate-700">Jam Operasional</h4>
                <div className="mt-1 text-sm text-slate-600">Senin - Jumat, 08:00 - 16:00</div>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-slate-700">Hubungi Kami</h4>
                <div className="mt-2 flex flex-col gap-2">
                <a href={`mailto:admin@paudkucica.sch.id`} className="inline-flex items-center gap-2 text-sm text-slate-700">📧 admin@paudkucica.sch.id</a>
                <a href="tel:+6281234567890" className="inline-flex items-center gap-2 text-sm text-slate-700">📞 Nomor Kucica</a>
                <div className="mt-2 text-xs text-slate-500"></div>
                </div>
            </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
            <button onClick={openWhatsApp} className="flex-1 inline-flex items-center justify-center gap-3 btn-cta" aria-label="Chat via WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .01 5.373.01 12.001c0 2.116.553 4.183 1.6 6.004L0 24l6.296-1.6A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.187-1.246-6.185-3.48-8.52zM12 21.5c-1.06 0-2.096-.216-3.058-.64l-.218-.09-3.745.953.99-3.64-.13-.233A9.38 9.38 0 0 1 2.5 12.001C2.5 6.753 6.753 2.5 12 2.5S21.5 6.753 21.5 12 17.247 21.5 12 21.5z"/><path d="M17.56 14.4c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15s-.73.94-.9 1.13c-.16.2-.32.22-.59.07-.27-.15-1.13-.42-2.15-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.57.12-.12.27-.32.4-.48.13-.16.17-.27.26-.44.09-.16.04-.32-.02-.46-.06-.12-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.46.06-.7.32-.24.26-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.76.13.18 1.87 2.86 4.53 3.9 2.66 1.04 2.66.69 3.14.65.48-.04 1.56-.63 1.78-1.24.22-.61.22-1.13.15-1.24-.07-.11-.26-.18-.55-.33z"/></svg>
                Chat via WhatsApp
            </button>
            <a href="tel:+6281234567890" className="inline-flex items-center gap-3 pill-nav border border-sky-200 text-sky-700 font-semibold px-5 py-3 shadow-sm hover:brightness-105">☎️ Telepon</a>

            <button onClick={openMap} className="inline-flex items-center gap-3 rounded-2xl bg-kucica-yellow text-kucica-blue font-semibold px-5 py-3 shadow-sm hover:brightness-95">📍 Arahkan ke Peta</button>
            </div>
            
            {/* Registration form - sends to backend */}
            <form id="registration-form" onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = {
                    parentName: form.parentName.value.trim(),
                    childName: form.childName.value.trim(),
                    phone: form.phone.value.trim(),
                    program: form.program.value
                };

                // basic validation
                if (!data.parentName || !data.childName || !data.phone) {
                    alert('Mohon lengkapi semua kolom pendaftaran.');
                    return;
                }

                fetch('http://localhost:4001/api/registrations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }).then(async (res) => {
                    if (!res.ok) throw new Error(await res.text());
                    const json = await res.json();
                    alert('Pendaftaran terkirim. ID: ' + json.id);
                    form.reset();
                }).catch((err) => {
                    console.error(err);
                    alert('Terjadi kesalahan saat mengirim pendaftaran.');
                });
            }} className="mt-6 p-4 rounded-xl bg-white/30 ring-1 ring-slate-200/30">
                <h4 className="text-sm font-semibold text-slate-700">Form Pendaftaran</h4>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    <input name="parentName" placeholder="Nama Orang Tua" className="px-3 py-2 rounded-lg border border-slate-200" />
                    <input name="childName" placeholder="Nama Anak" className="px-3 py-2 rounded-lg border border-slate-200" />
                    <input name="phone" placeholder="Nomor Telepon" className="px-3 py-2 rounded-lg border border-slate-200" />
                    <select name="program" defaultValue="paud" className="px-3 py-2 rounded-lg border border-slate-200">
                        <option value="paud">PAUD</option>
                        <option value="psikolog">Psikolog</option>
                    </select>
                </div>
                <div className="mt-3 flex items-center gap-3">
                    <button type="submit" className="btn-cta">Kirim Pendaftaran</button>
                    <button type="reset" className="pill-nav">Kosongkan</button>
                </div>
            </form>
        </div>

          {/* Right: map */}
        <div data-aos="fade-up" data-aos-delay="100" className="rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
            <div className="relative h-full min-h-[420px]">
            <button onClick={openMap} className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-kucica-yellow text-kucica-blue px-3 py-1 text-sm font-semibold shadow" aria-label="Buka di Maps">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                Buka di Maps
            </button>
            <iframe
                title="Lokasi PAUD anak kucica"
                src={`https://www.google.com/maps?q=${encodeURIComponent(KUCICA_ADDRESS)}&z=15&output=embed`}
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className="px-4 py-3 bg-kucica-blue-100 text-xs text-slate-700 rounded-md">Klik "Buka di Maps" untuk membuka di aplikasi peta di perangkat Anda.</div>
        </div>
        </div>
    </div>
    </section>
);
}
