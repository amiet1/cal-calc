import axios from 'axios';

export async function identifyFood(base64Image) {
  const apiKey = process.env.ROBOFLOW_API_KEY;

  if (!apiKey) {
    throw new Error('Roboflow API key is not configured');
  }

  try {
    const response = await axios.post(
      'https://serverless.roboflow.com/infer/workflows/foodidentifier-pzqkj/detect-and-classify',
      {
        api_key: apiKey,
        inputs: {
          image: {
            type: 'base64',
            value: base64Image.replace(/^data:image\/\w+;base64,/, ''), 
          },
        },
      },
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: 20000,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error identifying food:', error.response?.data || error.message);
    throw new Error('Failed to identify food');
  }
}


