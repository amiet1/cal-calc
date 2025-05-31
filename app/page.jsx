'use client'

import UploadOrScanImage from './components/UploadOrScanImage'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl transform rotate-1"></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-3xl transform -rotate-1"></div>
          </div>
          
          <div className="relative z-10 py-8 px-6 text-center">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-4 font-display">
              Calorie Calc AI
            </h1>
            <p className="text-xl text-indigo-900/80 font-medium max-w-2xl mx-auto">
              Snap a photo of your food and instantly get accurate calorie counts ✨
            </p>
          </div>
        </div>
        
        <UploadOrScanImage />
      </div>
    </main>
  )
} 