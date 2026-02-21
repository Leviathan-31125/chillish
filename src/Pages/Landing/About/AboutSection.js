import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const AboutSection = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left - Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gray-100 rounded-full opacity-50"></div>
                            <img
                                src="/img/ray.png"
                                alt="Ray Ilahude"
                                className="relative w-full h-full object-cover rounded-full shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right - Introduction */}
                    <div className="space-y-6">
                        <div className="bg-[#FFF0EC] p-8 rounded-2xl shadow-sm">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                Hei Teman <span className="text-4xl">👋</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Saya Ray Ilahude. Saya adalah pengajar, content creator, dan entrepreneur yang passionate tentang pendidikan digital.
                                <br /><br />
                                Sejak kecil, saya tumbuh dengan bahasa Inggris. Namun, yang membuat saya berbeda adalah komitmen saya untuk membantu orang Indonesia belajar dengan cara yang menyenangkan, bukan serius.
                                <br /><br />
                                Di sini, saya bagikan pengalaman, insights tentang pendidikan, emotional intelligence, dan personal growth. Semua di-update secara konsisten setiap minggu.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mt-24 pt-20 border-t border-gray-200">
                    {/* Left - Newsletter Info */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Gabung Komunitas <span className="block text-gray-900">Penggiat Pendidikan WhatsApp</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Bergabunglah dengan komunitas kami untuk diskusi dan update terbaru.
                            </p>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-sm">R</div>
                                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm">A</div>
                                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm">Y</div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-400">★★★★★</span>
                                </div>
                                <p className="text-sm text-gray-600 font-medium">200+ members</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Newsletter Form */}
                    <div className="bg-[#FFF0EC] rounded-2xl p-8 md:p-12">
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Dapatkan update terbaru seputar informasi kelas gratis dan pengetahuan dunia pendidikan langsung di WhatsApp Anda.
                        </p>

                        <button
                            type="button"
                            onClick={() => window.open('https://chat.whatsapp.com/YOUR_INVITE_LINK_HERE', '_blank', 'noopener,noreferrer')}
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                        >
                            <FaWhatsapp size={24} />
                            Gabung Grup WhatsApp
                        </button>

                        <p className="text-xs text-gray-600 mt-6 leading-relaxed">
                            Grup ini gratis dan terbuka untuk umum. Kami menjaga privasi nomor Anda.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;