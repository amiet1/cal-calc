import React from 'react'

export default function WorkoutGuide() {
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
              Workout Guide
            </h1>
            <p className="text-xl text-indigo-900/80 font-medium max-w-2xl mx-auto">
              Complete workout routines to help you stay fit and healthy 💪
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              Strength Training
            </h2>
            <p className="text-indigo-900/80 mb-6">
              Strength training is a type of exercise that helps you build muscle and improve your overall fitness. 
              It can be done with weights, machines, or your own body weight. Strength training is important for 
              improving your metabolism, bone density, and overall health.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Full-Body Strength Circuit</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Barbell Squats - 3 sets of 15 reps</li>
                  <li>• Glute bridge - 3 sets of 8 reps</li>
                  <li>• Pull-Ups - 3 sets of 10 reps</li>
                  <li>• Push-Ups - 3 sets of 15 reps</li>
                </ul>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Cardio Workout</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Mountain climbers - 3 sets of 15 reps</li>
                  <li>• Burpees - 3 sets of 10 reps</li>
                  <li>• High knees - 3 sets of 15 reps</li>
                  <li>• Skater jumps - 3 sets of 12 reps</li>
                  <li>• Stair Master - 20 - 30 minutes on level 6-8</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              Core & Lower Body
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Core Workout</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Planks - 3 sets of 30 seconds</li>
                  <li>• Russian twists - 3 sets of 15 reps</li>
                  <li>• Leg raises - 3 sets of 10 reps</li>
                  <li>• Bicycle crunches - 3 sets of 15 reps</li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Lower Body & Glutes</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Hip thrusts - 4 sets of 12 reps</li>
                  <li>• Bulgarian split squats - 3 sets of 12 each</li>
                  <li>• Step-ups - 3 sets of 15 each leg</li>
                  <li>• Sumo squats - 3 sets of 15 reps</li>
                  <li>• Glute bridges - 3 sets of 20 reps</li>
                  <li>• Curtsy lunges - 3 sets of 12 each</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              Cool Down & Recovery
            </h2>
            <p className="text-indigo-900/80 mb-6">
              Proper cool down and stretching are essential for recovery, reducing muscle soreness, and improving flexibility. 
              Take 5-10 minutes after your workout to perform these stretches.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Lower Body Stretches</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Hamstring stretch - 30 sec each</li>
                  <li>• Quad stretch - 30 sec each</li>
                  <li>• Calf stretch - 30 sec each</li>
                  <li>• Hip flexor stretch - 30 sec each</li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Upper Body Stretches</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Shoulder stretch - 30 sec each</li>
                  <li>• Neck stretch - 30 sec each side</li>
                  <li>• Chest stretch - 30 sec hold</li>
                  <li>• Triceps stretch - 30 sec each</li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-violet-600 mb-4">Cool Down Routine</h3>
                <ul className="space-y-3 text-indigo-900/80">
                  <li>• Light walking - 3-5 minutes</li>
                  <li>• Deep breathing - 5-10 breaths</li>
                  <li>• Child's pose - 1 minute</li>
                  <li>• Final relaxation - 2 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 