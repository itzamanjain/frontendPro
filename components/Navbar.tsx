"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    return (
        <nav className="bg-black shadow-lg px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo section */}
                <Link href="/" className="text-2xl font-bold text-indigo-600 flex-shrink-0">
                    FrontendPro
                </Link>

                {/* Navigation Links - Centered */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="space-x-8">
                        <Link
                            href="/problems"
                            className="text-white hover:text-indigo-600 text-sm font-medium transition-colors duration-200"
                        >
                            Problems
                        </Link>
                        <Link
                            href="/learn"
                            className="text-white hover:text-indigo-600 text-sm font-medium transition-colors duration-200"
                        >
                            Learn
                        </Link>
                        <Link
                            href="/discussion"
                            className="text-white hover:text-indigo-600 text-sm font-medium transition-colors duration-200"
                        >
                            Discussion
                        </Link>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="flex-shrink-0">
                    <div className="relative" ref={profileRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            JS
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                                <div className="px-4 py-2 border-b">
                                    <p className="text-sm font-medium text-gray-900">
                                        John Smith
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        john@example.com
                                    </p>
                                </div>
                                <Link
                                    href="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    View Profile
                                </Link>
                                <div className="px-4 py-2 border-t">
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Problems Solved:</span>
                                        <span>42</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Ranking:</span>
                                        <span>#1,234</span>
                                    </div>
                                </div>
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-t"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar