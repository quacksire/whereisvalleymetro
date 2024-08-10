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

let title = "Where Is Valley Metro?";
let description = "A live map of Valley Metro trains.";

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
        "Valley Metro train tracker",
        "Real-time Valley Metro updates",
        "Phoenix train tracking",
        "Metro light rail status",
        "Live Valley Metro locations",
        "Valley Metro schedule",
        "Phoenix transit tracking",
        "Where is Valley Metro",
        "Valley Metro arrival times",
        "Metro rail live map",
        "Valley Metro train locations",
        "Metro light rail tracker",
        "Phoenix public transit updates",
        "Valley Metro real-time locations",
        "Metro train status Phoenix",
        "Track Valley Metro trains",
        "Valley Metro live tracking",
        "Phoenix light rail updates",
        "Metro train schedule Phoenix",
        "Valley Metro app"
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
            defaultTheme="light"
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

