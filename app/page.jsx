'use client'

import UploadOrScanImage from './components/UploadOrScanImage'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-4 py-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-4 border-indigo-200 h-full rounded-2xl transform -rotate-1"></div>
            <div className="absolute w-3/4 border-4 border-indigo-400 h-full rounded-2xl transform rotate-1"></div>
          </div>
          <h1 className="text-5xl font-bold text-center text-indigo-900 relative z-10 py-4">
            ✨ Calorie Calc AI ✨
          </h1>
        </div>
        <p className="text-xl text-center text-indigo-600 mb-12 max-w-2xl mx-auto">
          Upload an image of your food and get the calorie count instantly
        </p>
        <UploadOrScanImage />
      </div>
    </main>
  )
} 