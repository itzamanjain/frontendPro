"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SignInButton } from './sign-in-button'
import { SignOutButton } from './signout-button'
import { useSession } from 'next-auth/react'

const Navbar = () => {
   
    
    const { data: session, status } = useSession()


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
                <div className='text-white'>
                {
                    status === 'authenticated' && session ? <SignOutButton /> : <SignInButton />
                }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
