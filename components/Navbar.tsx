"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

  return (
    <div>
        <nav className="bg-white shadow-lg px-6 py-4" data-oid="m21yv__">
                <div className="flex items-center justify-between" data-oid="wl00qkc">
                    <div className="flex items-center space-x-4" data-oid="xsx.ia3">
                        <Link  href="/" className="text-2xl font-bold text-indigo-600" data-oid="fr0r5-b">
                            FrontendPro
                        </Link>
                        <div className="hidden md:flex space-x-4" data-oid="-t9nqra">
                            <Link
                                href="/problems"
                                className="text-gray-600 hover:text-indigo-600"
                                data-oid="oxag3nw"
                            >
                                Problems
                            </Link>
                            <Link
                                href="/learn"
                                className="text-gray-600 hover:text-indigo-600"
                                data-oid="5sdyath"
                            >
                                Learn
                            </Link>
                            <Link
                                href="/discussion"
                                className="text-gray-600 hover:text-indigo-600"
                                data-oid="z3vkl42"
                            >
                                Discussion
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4" data-oid="7pwa.ps">
                        <div className="relative" ref={profileRef} data-oid="k5qarcr">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 focus:outline-none"
                                data-oid="4zc0dj:"
                            >
                                JS
                            </button>

                            {isProfileOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border"
                                    data-oid="vp_33pj"
                                >
                                    <div className="px-4 py-2 border-b" data-oid="7nje_q4">
                                        <p
                                            className="text-sm font-medium text-gray-900"
                                            data-oid="8fed.dv"
                                        >
                                            John Smith
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="fsavppf">
                                            john@example.com
                                        </p>
                                    </div>
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        data-oid="n:nqs5w"
                                    >
                                        View Profile
                                    </Link>
                                    <div className="px-4 py-2 border-t" data-oid="bnn-bd3">
                                        <div
                                            className="flex justify-between text-sm text-gray-500"
                                            data-oid="1pbceim"
                                        >
                                            <span data-oid="ae9x9bm">Problems Solved:</span>
                                            <span data-oid="uap.wnv">42</span>
                                        </div>
                                        <div
                                            className="flex justify-between text-sm text-gray-500"
                                            data-oid="2zalj9y"
                                        >
                                            <span data-oid="g31vytj">Ranking:</span>
                                            <span data-oid="tpwwwzx">#1,234</span>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-t"
                                        data-oid="6:03gwx"
                                    >
                                        Sign Out
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

    </div>
  )
}

export default Navbar