import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className={inter.className}>
        <div className="antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
          <div className="max-w-4xl mx-auto py-10 pb-1 px-4 min-h-screen flex flex-col">
            <header className="mb-8">
              {/* Your header content */}
            </header>
            <main className="flex-grow">
              <Component {...pageProps} />
            </main>
            <footer className="mt-3 py-8 pb-0">
              {/* Your footer content */}
            </footer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
