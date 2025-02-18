
"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SignInButton } from './sign-in-button'
import { SignOutButton } from './signout-button'
import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import { logout } from '@/lib/actions/auth'

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const profileRef = useRef<HTMLDivElement>(null)
    const { data: session, status } = useSession()

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleSignOut = () => {
        setIsProfileOpen(false);  // Close the profile dropdown
    };

    return (
        <nav className="bg-black shadow-lg px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo section */}
                <Link href="/" className="text-2xl font-bold text-indigo-300 flex-shrink-0">
                    Codefront
                </Link>

                {/* Navigation Links - Centered */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="space-x-8">
                        <Link
                            href="/problems"
                            className="text-white hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
                        >
                            Problems
                        </Link>
                        <Link
                            href="/learn"
                            className="text-white hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
                        >
                            Learn
                        </Link>
                        <Link
                            href="/discussion"
                            className="text-white hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
                        >
                            Discussion
                        </Link>
                    </div>
                </div>

                {status === 'authenticated' && session ? (
                    <div className="flex-shrink-0">
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-10 h-10 rounded-full bg-indigo-300 text-white flex items-center justify-center hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                            >
                                {session.user?.name?.[0] || 'U'}
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                                    <div className="px-4 py-2 border-b">
                                        <p className="text-sm font-medium text-gray-900">
                                            {session.user?.name || 'User'}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {session.user?.email || ''}
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
                                        onClick={logout}
                                        className="w-full flex items-center gap-2 cursor-pointer"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <SignInButton />
                )}
            </div>
        </nav>
    )
}

export default Navbar