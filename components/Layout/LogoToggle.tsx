"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

export function LogoToggle() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-14 w-auto" />
    }

    return (
        <Link href="/" className="flex items-center">
            <img
                src={resolvedTheme === 'dark' ? "/navbar-logo-dark.svg" : "/navbar-logo-light.svg"}
                alt="Built with AI"
                className="h-14 w-auto"
                onError={(e) => console.log('Logo load error:', e)}
            />
        </Link>
    )
}
