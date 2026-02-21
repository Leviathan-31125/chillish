import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../data/articles';
import { FaArrowLeft } from 'react-icons/fa6';

const ArticleDetail = () => {
    // 1. Ambil slug dari URL (misal: "pentingnya-emotional-intelligence")
    const { slug } = useParams();

    // 2. Cari data artikel berdasarkan slug tersebut
    const article = getArticleBySlug(slug);

    // 3. Jika artikel tidak ditemukan (misal URL salah ketik)
    if (!article) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h2>
                <Link to="/articles" className="text-blue-600 hover:underline">Kembali ke Daftar Artikel</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-3xl">
            <Link to="/articles" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                <FaArrowLeft /> Kembali ke Artikel
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
            <div className="text-gray-500 mb-8 text-sm font-medium">{article.date} • {article.readTime}</div>

            {/* whitespace-pre-line membuat enter/baris baru di text terbaca */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {article.content}
            </div>
        </div>
    );
};

export default ArticleDetail;