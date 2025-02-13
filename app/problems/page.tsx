'use client';

import { useState } from 'react';
import { questions } from '@/lib/Question';
import { useRouter } from 'next/navigation';

interface Problem {
    id: string;
    title: string;
    difficulty?: string;
    expectedTime?: string;
    submissions?: number;
    successRate?: number;
    tags: string[];
}

export default function ProblemsPage() {
    const router = useRouter();
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const problems: Problem[] = questions;

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
            case 'Medium':
                return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
            case 'Hard':
                return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
            default:
                return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800';
        }
    };

    const filteredProblems = problems.filter((problem) => {
        const matchesDifficulty =
            selectedDifficulty === 'all' || (problem.difficulty ?? '').toLowerCase() === selectedDifficulty;
        const matchesSearch =
            problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            problem.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesDifficulty && matchesSearch;
    });

    const handleProblemClick = (id: string) => {
        router.push(`playground/${id}`);
    };

    return (
        <div className="min-h-screen bg-black transition-colors duration-200">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Filters and Search */}
                <div className="bg-black rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex space-x-4">
                            <button
                                onClick={() => setSelectedDifficulty('all')}
                                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                                    selectedDifficulty === 'all'
                                        ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                                        : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-200'
                                }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setSelectedDifficulty('easy')}
                                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                                    selectedDifficulty === 'easy'
                                        ? 'bg-green-600 text-white dark:bg-green-500'
                                        : 'bg-green-100 dark:bg-green-900 dark:text-green-200'
                                }`}
                            >
                                Easy
                            </button>
                            <button
                                onClick={() => setSelectedDifficulty('medium')}
                                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                                    selectedDifficulty === 'medium'
                                        ? 'bg-yellow-600 text-white dark:bg-yellow-500'
                                        : 'bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
                                }`}
                            >
                                Medium
                            </button>
                            <button
                                onClick={() => setSelectedDifficulty('hard')}
                                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                                    selectedDifficulty === 'hard'
                                        ? 'bg-red-600 text-white dark:bg-red-500'
                                        : 'bg-red-100 dark:bg-red-900 dark:text-red-200'
                                }`}
                            >
                                Hard
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search problems..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
                            />
                        </div>
                    </div>
                </div>

                {/* Problems List */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Problem
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Difficulty
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Expected Time
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Submissions
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Success Rate
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredProblems.map((problem) => (
                                <tr
                                    key={problem.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                                    onClick={() => handleProblemClick(problem.id)}
                                >
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                {problem.title}
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {problem.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(
                                                problem.difficulty ?? ''
                                            )}`}
                                        >
                                            {problem.difficulty}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {problem.expectedTime}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {(problem.submissions ?? 0).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {problem.successRate}%
                                            </span>
                                            <div className="ml-2 w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                                                <div
                                                    className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-all duration-200"
                                                    style={{ width: `${problem.successRate}%` }}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}