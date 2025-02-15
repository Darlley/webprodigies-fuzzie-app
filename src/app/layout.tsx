import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/sonner'
import { ClerkProvider } from '@clerk/nextjs'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuzzie.',
  description: 'Automate Your Work With Fuzzie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
              <ModalProvider>
                {children}
                <Toaster />
              </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
