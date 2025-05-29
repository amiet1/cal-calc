import { identifyFood } from './IdentifyHandler';

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

    const base64Image = body.image.replace(/^data:image\/(jpeg|png|jpg);base64,/, '');

    const result = await identifyFood(base64Image);

    return new Response(
      JSON.stringify(result),
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




