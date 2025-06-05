import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Calorie Calc AI | Smart Food Calorie Detection',
  description: 'Calculate calories in your food instantly using AI. Take a photo or upload an image to get accurate calorie counts and nutritional information.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7C3AED'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-cyan-50">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
} 