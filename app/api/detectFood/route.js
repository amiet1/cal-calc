import OpenAI from "openai";
const client = new OpenAI();


export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.image) {
      return new Response(
        JSON.stringify({ error: 'No image data provided' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get the API key from the request headers
    const apiKey = request.headers.get('x-api-key');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key is required' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const base64Image = body.image.replace(/^data:image\/(jpeg|png|jpg);base64,/, '');

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4-turbo",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image_url",
                  image_url: {
                    url: `data:image/jpeg;base64,${base64Image}`,
                  },
                },
                {
                  type: "text",
                  text: "What food do you see in this image? give me the name of the food and the calories.",
                },
              ],
            },
          ],
          max_tokens: 500,
        }),
      });
      
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to analyze image');
    }

    const json = await response.json();
    return new Response(
      JSON.stringify(json),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in /api/identify:', error);

    const statusCode = error.response?.status || 500;
    const errorMessage = error.response?.data?.error || error.message;

    return new Response(
      JSON.stringify({
        error: 'Failed to identify food',
        details: errorMessage,
        status: statusCode,
      }),
      {
        status: statusCode,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}