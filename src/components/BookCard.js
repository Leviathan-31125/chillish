import React from 'react'

const BookCard = ({ type, title, description, link }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
            <span className="text-xs font-semibold tracking-wide uppercase text-blue-500">{type}</span>
            <h2 className="text-xl font-bold mt-2 mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                Lihat Detail &rarr;
            </a>
        </div>
    )
}

export default BookCard