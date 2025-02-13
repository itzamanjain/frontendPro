'use client';

import Link from 'next/link';

interface Course {
    id: number;
    title: string;
    description: string;
    level: string;
    duration: string;
    lessons: number;
    image: string;
    category: string;
}

export default function LearnPage() {
    const courses: Course[] = [
        {
            id: 1,
            title: 'HTML & CSS Fundamentals',
            description: 'Master the basics of web development with HTML5 and CSS3',
            level: 'Beginner',
            duration: '4 weeks',
            lessons: 24,
            image: '🎨',
            category: 'Frontend Basics',
        },
        {
            id: 2,
            title: 'JavaScript Essentials',
            description: 'Learn modern JavaScript from scratch to advanced concepts',
            level: 'Intermediate',
            duration: '6 weeks',
            lessons: 36,
            image: '📜',
            category: 'JavaScript',
        },
        {
            id: 3,
            title: 'React Development',
            description: 'Build modern web applications with React',
            level: 'Advanced',
            duration: '8 weeks',
            lessons: 48,
            image: '⚛️',
            category: 'Frameworks',
        },
    ];

    const categories = ['All', 'Frontend Basics', 'JavaScript', 'Frameworks', 'Backend'];

    return (
        <div className="min-h-screen bg-gray-950" data-oid="1r_bqj_">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8" data-oid="o9otyhk">
                <div className="flex justify-between items-center mb-8" data-oid="tm3svuu">
                    <h1 className="text-3xl font-bold text-white" data-oid="xjxmaue">
                        Learning Paths
                    </h1>
                    <div className="flex space-x-4" data-oid="s_y730x">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 rounded-md bg-white border hover:bg-gray-50"
                                data-oid="04q0xqm"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-oid="u:q0-c_"
                >
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            data-oid="_m9aqdg"
                        >
                            <div className="p-6" data-oid="792ujw5">
                                <div className="text-4xl mb-4" data-oid="kur5y6i">
                                    {course.image}
                                </div>
                                <h2
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="33-d6-_"
                                >
                                    {course.title}
                                </h2>
                                <p className="text-gray-600 mb-4" data-oid="5.:39-q">
                                    {course.description}
                                </p>
                                <div
                                    className="flex items-center justify-between mb-4"
                                    data-oid="b_i3jdu"
                                >
                                    <span
                                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                        data-oid="4tj85cy"
                                    >
                                        {course.level}
                                    </span>
                                    <span className="text-gray-500 text-sm" data-oid="6u0ak.d">
                                        {course.duration}
                                    </span>
                                </div>
                                <div
                                    className="flex items-center justify-between"
                                    data-oid=":p44cdn"
                                >
                                    <span className="text-gray-500" data-oid="1eei-qz">
                                        {course.lessons} lessons
                                    </span>
                                    <button
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                        data-oid="scot321"
                                    >
                                        Start Learning
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
