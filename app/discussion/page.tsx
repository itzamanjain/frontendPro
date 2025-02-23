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

interface NewPostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: Omit<Post, 'id' | 'votes' | 'replies' | 'timestamp'>) => void;
}

const NewPostModal = ({ isOpen, onClose, onSubmit }: NewPostModalProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            title,
            content,
            author: 'Current User', // In a real app, this would come from auth
            tags: tags.split(',').map(tag => tag.trim()),
        });
        setTitle('');
        setContent('');
        setTags('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">Create New Post</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-1">
                            Tags (comma-separated)
                        </label>
                        <input
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="React, JavaScript, CSS"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default function DiscussionPage() {
    const [selectedTag, setSelectedTag] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([
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
    ]);

    const handleVote = (postId: number, increment: boolean) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    votes: post.votes + (increment ? 1 : -1)
                };
            }
            return post;
        }));
    };

    const handleNewPost = (newPost: Omit<Post, 'id' | 'votes' | 'replies' | 'timestamp'>) => {
        const post: Post = {
            ...newPost,
            id: posts.length + 1,
            votes: 0,
            replies: 0,
            timestamp: 'Just now'
        };
        setPosts([post, ...posts]);
    };

    const filteredPosts = posts
        .filter(post => selectedTag === 'all' || post.tags.some(tag => tag.toLowerCase() === selectedTag))
        .sort((a, b) => {
            switch (sortBy) {
                case 'popular':
                    return b.replies - a.replies;
                case 'votes':
                    return b.votes - a.votes;
                default: // recent
                    return 0; // In a real app, would compare actual timestamps
            }
        });

    return (
        <div className="min-h-screen bg-gray-950">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-white">
                        Discussion Forum
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                    >
                        New Post
                    </button>
                </div>

                <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex space-x-4">
                            <button
                                onClick={() => setSelectedTag('all')}
                                className={`px-4 py-2 rounded-md ${selectedTag === 'all'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                All Posts
                            </button>
                            <button
                                onClick={() => setSelectedTag('react')}
                                className={`px-4 py-2 rounded-md ${selectedTag === 'react'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                React
                            </button>
                            <button
                                onClick={() => setSelectedTag('css')}
                                className={`px-4 py-2 rounded-md ${selectedTag === 'css'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                CSS
                            </button>
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="popular">Most Popular</option>
                            <option value="votes">Most Votes</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start">
                                <div className="flex flex-col items-center mr-6">
                                    <button
                                        onClick={() => handleVote(post.id, true)}
                                        className="text-gray-400 hover:text-indigo-400"
                                    >
                                        ▲
                                    </button>
                                    <span className="text-lg font-semibold my-1 text-white">
                                        {post.votes}
                                    </span>
                                    <button
                                        onClick={() => handleVote(post.id, false)}
                                        className="text-gray-400 hover:text-indigo-400"
                                    >
                                        ▼
                                    </button>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-white mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        {post.content}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center space-x-4">
                                            <span>By {post.author}</span>
                                            <span>{post.timestamp}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>{post.replies} replies</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NewPostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleNewPost}
            />
        </div>
    );
}
