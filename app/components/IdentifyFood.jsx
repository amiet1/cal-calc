const IdentifyFood = async (base64Image) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000); // 30 seconds timeout

  try {
    if (!base64Image) {
      throw new Error('No image provided');
    }
    console.log('Image size (base64 chars):', base64Image.length);


    const response = await fetch('/api/detectFood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64Image }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || errorData.error || 'Failed to analyze image');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeout);
    console.error("Error identifying food:", error);
    if (error.name === 'AbortError') {
      return { error: 'Request timed out. Please try again.' };
    }
    return { error: error.message || 'Failed to identify food' };
  }
};

export default IdentifyFood;
  

