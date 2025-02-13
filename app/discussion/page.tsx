'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    tags: string[];
    votes: number;
    replies: number;
    timestamp: string;
}

export default function DiscussionPage() {
    const [selectedTag, setSelectedTag] = useState('all');
    const [sortBy, setSortBy] = useState('recent');

    const posts: Post[] = [
        {
            id: 1,
            title: 'How to handle state in large React applications?',
            author: 'John Smith',
            content:
                "I'm working on a large React application and wondering about the best practices for state management...",
            tags: ['React', 'State Management'],
            votes: 42,
            replies: 15,
            timestamp: '2 hours ago',
        },
        {
            id: 2,
            title: 'CSS Grid vs Flexbox - When to use what?',
            author: 'Sarah Johnson',
            content:
                "I'm confused about when to use CSS Grid versus Flexbox. Can someone explain the key differences...",
            tags: ['CSS', 'Layout'],
            votes: 38,
            replies: 23,
            timestamp: '4 hours ago',
        },
        {
            id: 3,
            title: 'Best practices for API error handling',
            author: 'Mike Brown',
            content:
                'What are the recommended ways to handle API errors in a frontend application...',
            tags: ['API', 'Error Handling'],
            votes: 25,
            replies: 8,
            timestamp: '1 day ago',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-950" data-oid="c0rxxb8">
            

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8" data-oid="j_qzobs">
                <div className="flex justify-between items-center mb-6" data-oid="5pqimpo">
                    <h1 className="text-3xl font-bold text-white" data-oid="lcsc33v">
                        Discussion Forum
                    </h1>
                    <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        data-oid="89gic59"
                    >
                        New Post
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6" data-oid="cr3hzhv">
                    <div
                        className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
                        data-oid="h4b3afh"
                    >
                        <div className="flex space-x-4" data-oid="enk7:bo">
                            <button
                                onClick={() => setSelectedTag('all')}
                                className={`px-4 py-2 rounded-md ${
                                    selectedTag === 'all'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100'
                                }`}
                                data-oid="y0nxlfx"
                            >
                                All Posts
                            </button>
                            <button
                                onClick={() => setSelectedTag('react')}
                                className={`px-4 py-2 rounded-md ${
                                    selectedTag === 'react'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100'
                                }`}
                                data-oid="k-9z-p9"
                            >
                                React
                            </button>
                            <button
                                onClick={() => setSelectedTag('css')}
                                className={`px-4 py-2 rounded-md ${
                                    selectedTag === 'css'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100'
                                }`}
                                data-oid="vj03as0"
                            >
                                CSS
                            </button>
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            data-oid="gbjh6e1"
                        >
                            <option value="recent" data-oid="ptti2h6">
                                Most Recent
                            </option>
                            <option value="popular" data-oid="a::2dzt">
                                Most Popular
                            </option>
                            <option value="votes" data-oid="8ad51i.">
                                Most Votes
                            </option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4" data-oid="h9x.er4">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            data-oid="jgu.na_"
                        >
                            <div className="flex items-start" data-oid="jk:dmo2">
                                <div className="flex flex-col items-center mr-6" data-oid="_.b9zh_">
                                    <button
                                        className="text-gray-500 hover:text-indigo-600"
                                        data-oid="m--g0kb"
                                    >
                                        ▲
                                    </button>
                                    <span className="text-lg font-semibold my-1" data-oid="g:pe6qb">
                                        {post.votes}
                                    </span>
                                    <button
                                        className="text-gray-500 hover:text-indigo-600"
                                        data-oid="5as.42i"
                                    >
                                        ▼
                                    </button>
                                </div>
                                <div className="flex-1" data-oid="s7:l6:4">
                                    <h2
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                        data-oid="vbzowb:"
                                    >
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4" data-oid="2j0q1qo">
                                        {post.content}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="qz4v4lr">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                                                data-oid="i174_da"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div
                                        className="flex items-center justify-between text-sm text-gray-500"
                                        data-oid="0921caw"
                                    >
                                        <div
                                            className="flex items-center space-x-4"
                                            data-oid="xdyih_s"
                                        >
                                            <span data-oid="js1_vfm">By {post.author}</span>
                                            <span data-oid="ah.:4gx">{post.timestamp}</span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2"
                                            data-oid="kmk_llp"
                                        >
                                            <span data-oid="mg6d5r.">{post.replies} replies</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
