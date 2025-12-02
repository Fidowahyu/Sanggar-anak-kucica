import React from 'react';
import logo from '../assets/Logopaudkucica.png';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-blue-50/20 to-slate-100">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-[5%] text-6xl opacity-5 animate-float">🎨</div>
                <div className="absolute bottom-10 right-[8%] text-5xl opacity-8 animate-float" style={{ animationDelay: '1s' }}>🎈</div>
                <div className="absolute top-[50%] right-[15%] text-4xl opacity-6 animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-12">
                    {/* Logo & Brand */}
                    <div className="md:col-span-1" data-aos="fade-up">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="flex-shrink-0">
                                <img 
                                    src={logo} 
                                    alt="Logo PAUD Anak Kucica" 
                                    className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white" 
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div>
                                <div className="font-black text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                                    PAUD Anak Kucica
                                </div>
                                <div className="text-sm text-slate-600 mt-1 font-medium">
                                    Belajar dengan Cinta dan Ceria
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Tempat terbaik untuk tumbuh kembang si kecil dengan pendekatan yang penuh kasih sayang dan edukatif.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📍</span>
                            Hubungi Kami
                        </h3>
                        <div className="space-y-3 text-sm text-slate-600">
                            <div className="flex items-start gap-3">
                                <span className="text-xl flex-shrink-0">🏢</span>
                                <div>
                                    <strong className="text-slate-700">Alamat:</strong><br/>
                                    Jl. Kemakmuran Raya No.2 Kav.45, Mekar Jaya, Sukmajaya, Depok City, West Java 16411
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <div>
                                    <strong className="text-slate-700">Telp:</strong> 0813-1127-9831
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📧</span>
                                <div>
                                    <strong className="text-slate-700">Email:</strong> info@paudkucica.sch.id
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🔗</span>
                            Menu Cepat
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { name: 'Beranda', href: '#beranda', icon: '🏠' },
                                { name: 'Tentang', href: '#tentang', icon: '📖' },
                                { name: 'Program', href: '#program', icon: '🎯' },
                                { name: 'Galeri', href: '#galeri', icon: '📸' },
                                { name: 'FAQ', href: '#faq', icon: '❓' },
                                { name: 'Kontak', href: '#contact', icon: '📞' }
                            ].map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-200 group"
                                >
                                    <span className="text-lg group-hover:scale-125 transition-transform duration-200">
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="font-bold text-lg text-slate-800 mb-4 text-center flex items-center justify-center gap-2">
                            <span className="text-2xl">📱</span>
                            Ikuti Kami
                        </h3>
                        <div className="flex justify-center gap-4">
                            {[
                                { 
                                    name: 'Facebook', 
                                    icon: (
                                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    ), 
                                    color: 'from-blue-500 to-blue-600', 
                                    hoverColor: 'hover:from-blue-600 hover:to-blue-700',
                                    url: 'https://www.facebook.com/share/1BvYU1qVwf/?mibextid=wwXIfr' 
                                },
                                { 
                                    name: 'Instagram', 
                                    icon: (
                                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    ), 
                                    color: 'from-pink-500 to-purple-500', 
                                    hoverColor: 'hover:from-pink-600 hover:to-purple-600',
                                    url: 'https://www.instagram.com/kucicasanggaranak' 
                                },
                                { 
                                    name: 'WhatsApp', 
                                    icon: (
                                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                    ), 
                                    color: 'from-green-500 to-emerald-500', 
                                    hoverColor: 'hover:from-green-600 hover:to-emerald-600',
                                    url: 'https://wa.me/6281311279831' 
                                },
                                { 
                                    name: 'YouTube', 
                                    icon: (
                                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                    ), 
                                    color: 'from-red-500 to-rose-500', 
                                    hoverColor: 'hover:from-red-600 hover:to-rose-600',
                                    url: 'https://www.youtube.com/@kucicasanggaranak3250' 
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} ${social.hoverColor} flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300`}
                                    aria-label={social.name}
                                >
                                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </span>
                                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200" data-aos="fade-up" data-aos-delay="400">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-slate-600 font-medium text-center sm:text-left">
                            © {new Date().getFullYear()} <span className="font-bold text-slate-700">PAUD Anak Kucica</span>. Semua hak dilindungi.
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>Dibuat dengan</span>
                            <span className="text-xl animate-pulse">💖</span>
                            <span>untuk anak-anak Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(3deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
}
