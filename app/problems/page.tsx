'use client';

import { useState } from 'react';
import { questions } from '@/lib/Question';
import { useRouter } from 'next/navigation';

interface Problem {
    id: number;
    title: string;
    difficulty?: 'Easy' | 'Medium' | 'Hard';
    expectedTime?: string;
    submissions?: number;
    successRate?: number;
    tags: string[];
}



export default function ProblemsPage() {
    const router = useRouter();

    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const problems: Problem[] = questions

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return 'text-green-600 bg-green-100';
            case 'Medium':
                return 'text-yellow-600 bg-yellow-100';
            case 'Hard':
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
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
    
    // on click of a problem open it in playground and show the desc and code editor 
    const handleProblemClick = (id:Number) => {
        router.push(`playground/${id}`)
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="j:x.dll">
            {/* Navbar */}
            

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8" data-oid="k2dzuqm">
                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow p-6 mb-6" data-oid="8m6wcfa">
                    <div
                        className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
                        data-oid="-qcxwt_"
                    >
                        <div className="flex space-x-4" data-oid="fa2t6f8">
                            <button
                                onClick={() => setSelectedDifficulty('all')}
                                className={`px-4 py-2 rounded-md ${selectedDifficulty === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
                                data-oid="-336r7p"
                            >
                                All
                            </button>
                            <button
                                onClick={() => setSelectedDifficulty('easy')}
                                className={`px-4 py-2 rounded-md ${selectedDifficulty === 'easy' ? 'bg-green-600 text-white' : 'bg-green-100'}`}
                                data-oid="0b-6ffp"
                            >
                                Easy
                            </button>
                            <button
                                onClick={() => setSelectedDifficulty('medium')}
                                className={`px-4 py-2 rounded-md ${selectedDifficulty === 'medium' ? 'bg-yellow-600 text-white' : 'bg-yellow-100'}`}
                                data-oid="nivwrry"
                            >
                                Medium
                            </button>
                            <button
                                onClick={() => setSelectedDifficulty('hard')}
                                className={`px-4 py-2 rounded-md ${selectedDifficulty === 'hard' ? 'bg-red-600 text-white' : 'bg-red-100'}`}
                                data-oid="q41s_ja"
                            >
                                Hard
                            </button>
                        </div>
                        <div className="relative" data-oid="cdt-i5o">
                            <input
                                type="text"
                                placeholder="Search problems..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                data-oid="ur_hqqn"
                            />
                        </div>
                    </div>
                </div>

                {/* Problems List */}
                <div className="bg-white rounded-lg shadow overflow-hidden" data-oid="iht7rt.">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="mdwwrzb">
                        <thead className="bg-gray-50" data-oid="bj_qjnp">
                            <tr data-oid="y9zqtu4">
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="3f5zm67"
                                >
                                    Problem
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="ksxwsg-"
                                >
                                    Difficulty
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="vbvozp2"
                                >
                                    Expected Time
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="hv6x6x2"
                                >
                                    Submissions
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="kbgdrgn"
                                >
                                    Success Rate
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="ljys6_l">
                            {filteredProblems.map((problem) => (
                                <tr
                                    key={problem.id}
                                    className="hover:bg-gray-50  cursor-pointer"
                                    data-oid="d21pi9h"
                                    onClick={() => handleProblemClick(problem.id)}
                                >
                                    <td className="px-6  py-4" data-oid="xxr_ail">
                                        <div data-oid="lavcq-5">
                                            <div
                                                className="text-sm font-medium text-gray-900"
                                                data-oid="mkiwm-7"
                                            >
                                                {problem.title}
                                            </div>
                                            <div
                                                className="flex flex-wrap gap-2 mt-1"
                                                data-oid="h3cbwo8"
                                            >
                                                {problem.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                                        data-oid="j7qt0z:"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4" data-oid="rjip9je">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty ?? '')}`}
                                            data-oid="a_1msa_"
                                        >
                                            {problem.difficulty}
                                        </span>
                                    </td>
                                    <td
                                        className="px-6 py-4 text-sm text-gray-500"
                                        data-oid="4siago2"
                                    >
                                        {problem.expectedTime}
                                    </td>
                                    <td
                                        className="px-6 py-4 text-sm text-gray-500"
                                        data-oid="mzbm84d"
                                    >
                                        {(problem.submissions ?? 0).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4" data-oid="vkq48ig">
                                        <div className="flex items-center" data-oid="vdym-h8">
                                            <span
                                                className="text-sm text-gray-500"
                                                data-oid="8ooim2q"
                                            >
                                                {problem.successRate}%
                                            </span>
                                            <div
                                                className="ml-2 w-16 h-2 bg-gray-200 rounded-full"
                                                data-oid="fahuy29"
                                            >
                                                <div
                                                    className="h-full bg-green-500 rounded-full"
                                                    style={{ width: `${problem.successRate}%` }}
                                                    data-oid="mcte5_y"
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
