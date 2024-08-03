"use client"
import React from 'react'
import Navbar from './(components)/Navbar';

const LayoutWrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className={`flex flex-row bg-stone-300 dark:bg-stone-800 text-stone-600 dark:text-stone-200 w-full min-h-screen`}>
        <main></main>

        <main className={`flex flex-col w-full h-full px-8 md:px-12`}>
            <Navbar />
            {children}
        </main>
        {/* Sidebar */}
    </div>
  )
}

export default LayoutWrapper;