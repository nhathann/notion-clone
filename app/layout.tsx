import './globals.css'
import { Toaster } from "sonner"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { EdgeStoreProvider } from '@/lib/edgestore'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { ModalProvider } from "@/components/providers/modal-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion Clone',
  description: 'A landscape of mindful thoughts. A place where magic happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./logo.svg",
        href: "./logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./logo-dark.svg",
        href: "./logo-dark.svg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
