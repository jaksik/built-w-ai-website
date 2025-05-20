import "@/styles/globals.css"
import Link from "next/link"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/Layout/ThemeProvider"
import { ModeToggle } from "@/components/Layout/ModeToggle"
// import { LogoToggle } from "@/components/Layout/LogoToggle"

import { MobileNav } from "@/components/Layout/MobileNav"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const inter = Inter({ subsets: ["latin"] })

const navigationLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/news", label: "News" },
  { href: "/glossary", label: "Glossary" },
  // { href: "/labs", label: "Labs" },
]

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { resolvedTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('Theme state:', {
      resolvedTheme,
      theme,
      mounted
    })
  }, [resolvedTheme, theme, mounted])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className={inter.className}>
        <div className="antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
          <div className="max-w-7xl mx-auto py-10 pb-1 px-4 min-h-screen flex flex-col">
            <header className="mb-8">
              <div className="flex items-center justify-between">

                <Link href="/" className="flex items-baseline logo-font">
                  <span className="text-4xl font-bold">Built</span>
                  <span className="text-3xl font-semibold mx-2">with</span>
                  <span className="text-4xl font-bold">AI</span>
                </Link>

                <nav className="text-lg font-medium space-x-8 hidden md:flex items-center">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`
                        text-gray-600 dark:text-gray-300
                        hover:text-gray-800 dark:hover:text-gray-100 
                        transition-colors
                        ${router.pathname === link.href
                          ? "underline decoration-2 underline-offset-8 decoration-gray-600 dark:decoration-gray-300"
                          : ""
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="ml-8 pr-4">
                    <ModeToggle />
                  </div>
                </nav>
                <div className="md:hidden">
                  <MobileNav />
                </div>
              </div>
            </header>
            <main className="flex-grow max-w-[1200px] mx-auto">
              <Component {...pageProps} />
            </main>
            <footer className="mt-3 py-8 pb-0">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  © {new Date().getFullYear()} Built with AI | Austin, TX 🇺🇸
                </p>
                <div className="flex gap-4 text-xs text-slate-600 dark:text-slate-400">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
