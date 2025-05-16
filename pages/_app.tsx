import "@/styles/globals.css"
import Link from "next/link"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { ModeToggle } from "@/components/ModeToggle"
import { MobileNav } from "@/components/MobileNav"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className={inter.className}>
        <div className="antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
          <div className="max-w-4xl mx-auto py-10 pb-1 px-4 min-h-screen flex flex-col">
            <header className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold">
                    Built with AI
                  </Link>
                </div>
                <nav className="text-base font-medium space-x-6 hidden md:flex items-center">
                <Link href="/resources">Start Here</Link>
                  <Link href="/tools">AI Tools</Link>
                  
                  <Link href="/news">News</Link>

                  <div className="ml-6">
                    <ModeToggle />
                  </div>
                </nav>
                <div className="md:hidden">
                  <MobileNav />
                </div>
              </div>
            </header>
            <main className="flex-grow">
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
