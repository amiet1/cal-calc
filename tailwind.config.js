/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6366F1',    // Indigo-500
          secondary: '#818CF8',  // Indigo-400
          accent: '#4F46E5',     // Indigo-600
        },
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          modern: {
            "primary": "#6366F1",
            "primary-focus": "#4F46E5",
            "primary-content": "#ffffff",
            "secondary": "#818CF8",
            "secondary-focus": "#6366F1",
            "secondary-content": "#ffffff",
            "accent": "#4F46E5",
            "neutral": "#2a2e37",
            "base-100": "#ffffff",
            "base-200": "#F9FAFB",
            "base-300": "#F3F4F6",
            "base-content": "#1f2937",
          },
        },
        "light"
      ],
    }
  };
  