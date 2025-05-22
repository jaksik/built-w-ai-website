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
import Script from 'next/script'; // Added for Google Analytics
import * as gtag from '../lib/gtag'; // Added for Google Analytics

const inter = Inter({ subsets: ["latin"] })

const navigationLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/news", label: "News" },
  { href: "/glossary", label: "Glossary" },
  // { href: "/labs", label: "Labs" },
]

// Declare gtag on the window object for TypeScript (for Google Analytics)
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      trackingIdOrAction: string | Date,
      config?: { page_path?: URL | string; event_category?: string; event_label?: string; value?: number } // Modified page_path to accept string
    ) => void;
    dataLayer?: unknown[];
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { resolvedTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // console.log('Theme state:', { // Optional: keep for debugging if needed
    //   resolvedTheme,
    //   theme,
    //   mounted
    // })
  }, [resolvedTheme, theme]) // Removed 'mounted' from dependencies as it causes re-renders and is set true once.

  // Google Analytics pageview tracking
  useEffect(() => {
    const handleRouteChange = (url: string) => { // Changed type to string as Next.js router.events.on provides string
      if (gtag.GA_TRACKING_ID) {
        gtag.pageview(new URL(url, window.location.origin)); // Construct URL object
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  if (!mounted) {
    // To prevent hydration mismatch, especially with theme,
    // it's common to return null or a basic loader until mounted.
    // However, for GA scripts, they can be outside this check if they don't depend on `mounted` state.
    // For simplicity and to ensure theme is ready, we keep it here.
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {/* Google Analytics Scripts */}
      {gtag.GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <div className={inter.className}>
        <div className="antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
          <div className="max-w-5xl mx-auto py-10 pb-1 px-4 min-h-screen flex flex-col">
            <header className="mb-8">
              <div className="flex items-center justify-between">

                <Link href="/" className="flex items-baseline logo-font">
                  <span className="text-2xl font-bold">Built with AI</span>
                </Link>

                <nav className="text-md font-medium space-x-8 hidden md:flex items-center">
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
            <main className="flex-grow max-w-[1200px] mx-auto w-full"> {/* Added w-full for better layout control of main content */}
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