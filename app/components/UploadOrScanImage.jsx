'use client'

import React, { useState, useRef } from 'react'
import IdentifyFood from './IdentifyFood'
import ApiKeyInput from './ApiKeyInput'

export default function UploadOrScanImage() {
  const [showCamera, setShowCamera] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [analysis, setAnalysis] = useState({
    calories: null,
    description: null,
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isApiKeySet, setIsApiKeySet] = useState(false)
  const fileInputRef = useRef(null)
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  const analyzeImage = async (base64Image) => {
    setImageUrl(base64Image)
    setAnalysis(null)
    setError(null)
    setLoading(true)

    try {
      const result = await IdentifyFood(base64Image);
      
      if (result.error) {
        throw new Error(result.error);
      }

      // Handle the GPT-4 response this is what the json response looks like
      if (result.choices?.[0]?.message?.content) {
        const response = result.choices[0].message.content;
        // Extract calories using regex
        const caloriesMatch = response.match(/(\d+)\s*calories/i);
        const calories = caloriesMatch ? caloriesMatch[1] : null;
        
        setAnalysis({
          description: response,
          calories: calories
        });
      } else {
        console.log('GPT Response:', result);
        setError('No food analysis found. Please try a clearer image of food.');
      }

    } catch (err) {
      console.error('Error processing result:', err);
      setError(err.message || 'Error identifying food. Please try again.');
    }

    setLoading(false);
  }

  const processImage = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        // Create a canvas with desired dimensions
        const canvas = document.createElement('canvas')
        // Reduce max size to 512x512 for faster processing
        const MAX_SIZE = 512
        let width = img.width
        let height = img.height
        
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width
            width = MAX_SIZE
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height
            height = MAX_SIZE
          }
        }
        
        canvas.width = width
        canvas.height = height
        
        // Draw and convert to JPEG with lower quality
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, width, height)
        
        // Convert to JPEG format with lower quality (0.8)
        const jpegData = canvas.toDataURL('image/jpeg', 0.8)
        resolve(jpegData)
      }
      img.onerror = reject
      img.src = URL.createObjectURL(file)
    })
  }

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      const processedImage = await processImage(file)
      await analyzeImage(processedImage)
    } catch (err) {
      console.error('Error processing image:', err)
      setError('Error processing image')
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const startCamera = async () => {
    console.log('startCamera clicked'); 
    try {
      
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported in your browser');
      }

      
      if (!window.isSecureContext) {
        throw new Error('Camera access requires a secure connection (HTTPS)');
      }

      // Try to get camera access with fallbacks
      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      };

      try {
        // First try environment camera (back camera on phones)
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setShowCamera(true);
          };
        }
      } catch (envError) {
        console.log('Failed to access environment camera, trying default:', envError);
        // If environment camera fails, try default camera
        const defaultStream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        streamRef.current = defaultStream;
        if (videoRef.current) {
          videoRef.current.srcObject = defaultStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setShowCamera(true);
          };
        }
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError(err.message || 'Could not access the camera. Please make sure you have granted camera permissions.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => {
        track.stop();
        streamRef.current?.removeTrack(track);
      });
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setShowCamera(false);
  };

  const capturePhoto = async () => {
    const video = videoRef.current
    if (!videoRef.current) return
  
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const MAX_SIZE = 512
   
  
    if (width > height && width > MAX_SIZE) {
      height *= MAX_SIZE / width
      width = MAX_SIZE
    } else if (height > MAX_SIZE) {
      width *= MAX_SIZE / height
      height = MAX_SIZE
    }
  
  
    // Convert canvas to Blob
    canvas.toBlob(async (blob) => {
      if (!blob) {
        setError('Failed to capture image.')
        return
      }
  
      // Read the blob as Data URL (base64) for analysis
      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64data = String(reader.result)
        stopCamera()
        await analyzeImage(base64data)
      }
      reader.readAsDataURL(blob)
    }, 'image/jpeg', 0.8)
  }
  

  return (
    <div className="flex flex-col items-center gap-8">
      <ApiKeyInput onApiKeySet={setIsApiKeySet} />
      
      {isApiKeySet ? (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {loading && (
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg">
              <div className="loading loading-spinner loading-lg text-violet-600"></div>
              <p className="mt-4 text-indigo-900/80 font-medium">Analyzing your food...</p>
            </div>
          )}

          {showCamera ? (
            <div className="relative w-full max-w-2xl aspect-square rounded-3xl overflow-hidden bg-black/5 backdrop-blur-sm border border-white/20 shadow-xl">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                <button
                  type="button"
                  className="btn glass bg-white/20 hover:bg-white/30 px-8"
                  onClick={stopCamera}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">
                    Cancel
                  </span>
                </button>
                <button
                  type="button"
                  className="btn glass bg-white/20 hover:bg-white/30 px-8"
                  onClick={capturePhoto}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">
                    Take Photo
                  </span>
                </button>
              </div>
            </div>
          ) : !imageUrl ? (
            <div className="w-full max-w-md space-y-6">
              <button 
                type="button" 
                className="w-full btn btn-lg glass bg-white/20 hover:bg-white/30 font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={handleUploadClick}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">
                  Upload Image
                </span>
              </button>
              <div className="divider text-indigo-900/60 font-medium">OR</div>
              <button 
                type="button" 
                className="w-full btn btn-lg glass bg-white/20 hover:bg-white/30 font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={startCamera}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">
                  Scan with Camera
                </span>
              </button>
            </div>
          ) : (
            <div className="w-full max-w-xl bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img src={imageUrl} alt="Analyzed food" className="w-full" />
              </div>
              
              {analysis && (
                <div className="space-y-6">
                  <div className="bg-violet-50/80 backdrop-blur-sm rounded-2xl p-6 border border-violet-100/80">
                    <h4 className="font-semibold text-violet-900 mb-3">Food Analysis:</h4>
                    <p className="text-lg text-violet-800">
                      {analysis.description}
                    </p>
                  </div>
                  
                  {analysis.calories && (
                    <div className="bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100/80 text-center">
                      <h4 className="font-semibold text-emerald-900 mb-2">Calories:</h4>
                      <div className="text-5xl font-black text-emerald-800">
                        {analysis.calories}
                        <span className="text-3xl ml-2 font-bold text-emerald-700">cal</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <button
                type="button"
                className="btn btn-lg glass bg-white/20 hover:bg-white/30 w-full mt-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => {
                  setImageUrl(null)
                  setAnalysis(null)
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">
                  Scan Another
                </span>
              </button>
            </div>
          )}

          {error && (
            <div className="bg-red-50/80 backdrop-blur-sm text-red-800 p-6 rounded-2xl border border-red-100/80 shadow-lg max-w-md">
              {error}
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-indigo-900/80">
          Please enter your OpenAI API key to start analyzing food images.
        </div>
      )}
    </div>
  )
}



//allow file upload 
//display review 
//send to analyzeImage.js - api call

//child component where the user selects an image, and the onResult callback is triggered to send the result back to the parent. 