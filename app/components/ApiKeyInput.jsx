'use client'

import { useState, useEffect } from 'react'

export default function ApiKeyInput({ onApiKeySet }) {
  const [apiKey, setApiKey] = useState('')
  const [isKeySet, setIsKeySet] = useState(false)

  useEffect(() => {
    // Check if API key exists in localStorage on component mount
    const storedApiKey = localStorage.getItem('openai_api_key')
    if (storedApiKey) {
      setIsKeySet(true)
      onApiKeySet(true)
    }
  }, [onApiKeySet])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (apiKey.trim().startsWith('sk-')) {
      localStorage.setItem('openai_api_key', apiKey.trim())
      setIsKeySet(true)
      onApiKeySet(true)
      setApiKey('') // Clear input after saving
    } else {
      alert('Please enter a valid OpenAI API key starting with "sk-"')
    }
  }

  const handleReset = () => {
    localStorage.removeItem('openai_api_key')
    setIsKeySet(false)
    onApiKeySet(false)
  }

  if (isKeySet) {
    return (
      <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
        <p className="text-green-700 font-medium mb-3">✓ API Key is set</p>
        <button
          onClick={handleReset}
          className="btn btn-sm glass bg-white/20 hover:bg-white/30"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
            Reset API Key
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-900 mb-4">Enter Your OpenAI API Key</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full px-4 py-2 rounded-lg border border-violet-200 focus:border-violet-400 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full btn glass bg-white/20 hover:bg-white/30"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">
            Save API Key
          </span>
        </button>
      </form>
      <p className="mt-4 text-sm text-indigo-900/70">
        Your API key will be stored securely in your browser and only used for food detection requests.
      </p>
    </div>
  )
} 