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
          {/* <div className="mb-4 flex items-center border-b border-slate-200 pb-4 dark:border-slate-800">
            <Link
              href="/"
              className="text-lg font-bold"
              onClick={toggleMenu}
            >
              Built With AI
            </Link>
          </div> */}
          <nav className="flex flex-col space-y-4">
            {/* <Link
              href="/"
              className={`text-lg ${pathname === "/" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              Home
            </Link> */}
  <Link
              href="/resources"
              className={`text-lg ${pathname === "/about" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              Start Here
            </Link>
            <Link
              href="/tools"
              className={`text-lg ${pathname === "/blog" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              AI Tools
            </Link>
          
            {/* <Link
              href="/community"
              className={`text-lg ${pathname === "/tools" ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}
              onClick={toggleMenu}
            >
              Community
            </Link> */}
            <div className="pt-4">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}