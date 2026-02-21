import React from 'react';
import booksData from '../data/books.json';
import BookCard from '../components/BookCard';

const Books = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Buku & Produk</h1>
                <p className="text-lg text-gray-600">
                    Koleksi buku dan produk digital yang saya buat untuk membantu perjalanan Anda.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {booksData.map((item) => (
                    <BookCard
                        key={item.id}
                        type={item.type}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Books;