import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar  from "@/components/navbar";

import { ThemeProvider } from "@/components/theme-provider"

import type { Viewport } from 'next'
import { Toaster } from "@/components/ui/toaster"


export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

export const runtime = 'edge';

let title = "Project Phoenix";
let description = "Wildfire tracking map for the state of California.";

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        url: "https://whereisvalleymetro.com",
        // @ts-ignore
        type: "website",
        locale: "en_US",
        siteName: title,
    },
    twitter: {
        card: 'summary',
        title: title,
        description: description,
        siteId: '1467726470533754880',
        creator: '@duckdoquack',
    },
    category: 'technology',
    keywords: [
        "wildfire",
        "california",
        "fire",
        "evacuation",
        "map",
        "tracking",
        "realtime",
        "live",
        "data",
        "firefighting",
        "firefighters",
        "firefight",
        "emergency",
        "disaster",
        "natural",
        "disaster",
        "climate",
        "change",
        "climate",
        "emergency",
        "response",
    ],
}


//@ts-ignore
export default function RootLayout({ children }) {
  return (
      <>
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
            enableColorScheme
            enableSystem
        >
            <Navbar />
          {children}

            <Toaster />
        </ThemeProvider>

        </body>
        </html>
      </>
  )
}

