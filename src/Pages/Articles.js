import React from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../data/articles';

const Articles = () => {
    const articles = getAllArticles();

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
                <p className="text-lg text-gray-600">
                    Insights on education, emotional intelligence, and personal growth.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {articles.map((article) => (
                    <Link
                        to={`/articles/${article.slug}`}
                        key={article.id}
                        className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                        {/* Image Placeholder/Container */}
                        <div className="aspect-video bg-gray-100 overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                <span>{article.date}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-gray-600 line-clamp-3 mb-4">
                                {article.content}
                            </p>
                            <span className="text-blue-600 font-semibold inline-flex items-center gap-1">
                                Baca Selengkapnya
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Articles;
