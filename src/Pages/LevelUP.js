import React from 'react';

const LevelUP = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                    New Community
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    LevelUP Your Life & Skills
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    A comprehensive ecosystem designed to help you master high-value skills
                    and organize your life with premium Notion templates.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Get Access Now
                    </button>
                    <button className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600 text-2xl">
                        🚀
                    </div>
                    <h3 className="text-xl font-bold mb-2">Skill Growth</h3>
                    <p className="text-gray-600">
                        Structured learning paths for modern digital skills, from coding to content creation.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 text-2xl">
                        ⚡
                    </div>
                    <h3 className="text-xl font-bold mb-2">LifeOS Templates</h3>
                    <p className="text-gray-600">
                        Premium Notion templates to organize your tasks, goals, and habits effortlessly.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600 text-2xl">
                        🤝
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-gray-600">
                        Join a network of ambitious individuals. Share progress, get feedback, and grow together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LevelUP;