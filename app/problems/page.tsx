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
                return 'text-green-400 bg-green-900';
            case 'Medium':
                return 'text-yellow-400 bg-yellow-900';
            case 'Hard':
                return 'text-red-400 bg-red-900';
            default:
                return 'text-gray-400 bg-gray-800';
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

    return (
        <div className="min-h-screen bg-gray-950 text-white transition-colors duration-200">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Filters and Search */}
                <div className=" rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex space-x-4">
                            {['all', 'easy', 'medium', 'hard'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedDifficulty(level)}
                                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${selectedDifficulty === level
                                            ? 'bg-indigo-500 text-white'
                                            : 'bg-gray-700 text-gray-300'
                                        }`}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search problems..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-64 px-4 py-2 border rounded-md bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Problems List */}
                <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-900">
                            <tr>
                                {['Problem', 'Difficulty', 'Expected Time', 'Submissions', 'Success Rate'].map((heading) => (
                                    <th
                                        key={heading}
                                        className="px-6 py-3 text-left text-xs font-normal text-gray-400 uppercase tracking-wider"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {filteredProblems.map((problem) => (
                                <tr
                                    key={problem.id}
                                    className="hover:bg-gray-700 cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <a href={`/playground/${problem.id}`} className="text-white font-normal">
                                            {problem.title}
                                        </a>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {problem.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-indigo-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty ?? '')}`}>
                                            {problem.difficulty}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{problem.expectedTime}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{(problem.submissions ?? 0).toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-400">{problem.successRate}%</span>
                                            <div className="ml-2 w-16 h-2 bg-gray-700 rounded-full">
                                                <div
                                                    className="h-full bg-green-400 rounded-full"
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
