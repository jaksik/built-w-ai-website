"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ModeToggle } from "@/components/Layout/ModeToggle"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800"
        onClick={toggleMenu}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-24 z-50 mt-4 bg-white p-4 shadow-lg dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/tools"
              className={`text-lg flex items-center gap-3 font-semibold text-md font-inter ${pathname === "/tools" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" 
                />
              </svg>
              AI Tools
            </Link>
            <Link
              href="/news"
              className={`text-lg flex items-center gap-3 font-semibold text-md font-inter ${pathname === "/news" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" 
                />
              </svg>
              AI News
            </Link>
            <Link
              href="/glossary"
              className={`text-lg flex items-center gap-3 font-semibold text-md font-inter ${pathname === "/glossary" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                />
              </svg>
              Glossary
            </Link>
            <div className="pt-4">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}