import './globals.css'

export const metadata = {
  title: 'Calorie Calc AI',
  description: 'Upload an image of your food and get the calorie count',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
} 