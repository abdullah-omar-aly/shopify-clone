import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { Inter as FontSans , Lemon , Montserrat ,Oswald} from "next/font/google"
// import { cn } from '@/utils/helpers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
// export const lemon = Lemon({
//   subsets: ['latin'],
//   // variable: '--font-lol',
//   weight: '400'
// })
// export const montserrat = Oswald({
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body> */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
