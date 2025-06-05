import React from 'react'

export default function NutritionGuide() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl transform rotate-1"></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-3xl transform -rotate-1"></div>
          </div>
          
          <div className="relative z-10 py-8 px-6 text-center">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-4 font-display">
              Nutrition Guide
            </h1>
            <p className="text-xl text-indigo-900/80 font-medium max-w-2xl mx-auto">
              Get the best nutrition tips to help you stay fit and healthy 🥗
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              Healthy Eating Basics
            </h2>
            <p className="text-indigo-900/80 mb-6">
              A balanced diet is crucial for maintaining good health and achieving your fitness goals. 
              Focus on whole foods, proper portion sizes, and staying hydrated throughout the day.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Nutrition Fundamentals</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Aim for a balanced calorie intake</li>
                  <li>• Focus on whole, unprocessed foods</li>
                  <li>• Include protein with every meal</li>
                  <li>• Eat plenty of vegetables and fruits</li>
                </ul>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Meal Planning Tips</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Prep meals in advance</li>
                  <li>• Keep healthy snacks available</li>
                  <li>• Drink water throughout the day</li>
                  <li>• Control portion sizes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              Consistency & Progress
            </h2>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-violet-600 mb-4">Success Habits</h3>
              <ul className="space-y-3 text-indigo-900/80">
                <li>• 3–5 days/week of balanced meals is better than strict dieting</li>
                <li>• Get 7–9 hours of sleep to balance hormones</li>
                <li>• Track your progress and adjust as needed</li>
                <li>• Be patient - sustainable results take time!</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              Macronutrients Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Proteins</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Lean meats</li>
                  <li>• Fish</li>
                  <li>• Eggs</li>
                  <li>• Legumes</li>
                </ul>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Carbohydrates</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Whole grains</li>
                  <li>• Fruits</li>
                  <li>• Vegetables</li>
                  <li>• Sweet potatoes</li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Healthy Fats</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Avocados</li>
                  <li>• Nuts & seeds</li>
                  <li>• Olive oil</li>
                  <li>• Fatty fish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
