'use client'

import React, { useState, useRef } from 'react'
import IdentifyFood from './IdentifyFood'

export default function UploadOrScanImage() {
  const [showCamera, setShowCamera] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
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

      // Handle the workflow response
      if (result.outputs && result.outputs.length > 0) {
        const predictions = result.outputs[0].predictions || [];
        
        if (predictions.length > 0) {
          setAnalysis({
            foodItems: predictions.map(pred => ({
              name: pred.class || pred.predicted_class || 'Unknown',
              confidence: Math.round((pred.confidence || 0) * 100)
            }))
          });
        } else {
          setError('No food items detected. Please try a clearer image of food.');
        }
      } else {
        setError('No predictions found. Please try a different image.');
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
    try {
      // Check if mediaDevices is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported in your browser');
      }

      // Check if we're in a secure context (HTTPS or localhost)
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
    <div className="flex flex-col items-center gap-6">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {loading && (
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-gray-600">Analyzing image...</p>
        </div>
      )}

      {showCamera ? (
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            <button
              type="button"
              className="btn btn-error"
              onClick={stopCamera}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={capturePhoto}
            >
              Take Photo
            </button>
          </div>
        </div>
      ) : !imageUrl ? (
        <>
          <button 
            type="button" 
            className="btn btn-primary w-full max-w-xs text-lg font-medium rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            onClick={handleUploadClick}
          >
            Upload Image
          </button>
          <div className="divider text-gray-400">OR</div>
          <button 
            type="button" 
            className="btn btn-secondary w-full max-w-xs text-lg font-medium rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            onClick={startCamera}
          >
            Scan with Camera
          </button>
        </>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <img src={imageUrl} alt="Analyzed food" className="w-full rounded-lg mb-4" />
          {analysis && (
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Detected Foods:</h4>
              <ul className="space-y-2">
                {analysis.foodItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.confidence}% confidence</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            type="button"
            className="btn btn-primary w-full mt-4"
            onClick={() => {
              setImageUrl(null)
              setAnalysis(null)
            }}
          >
            Scan Another
          </button>
        </div>
      )}

      {error && (
        <div className="text-red-500 bg-red-100 p-4 rounded-lg">
          {error}
        </div>
      )}
    </div>
  )
}



//allow file upload 
//display review 
//send to analyzeImage.js - api call

//child component where the user selects an image, and the onResult callback is triggered to send the result back to the parent. 