// pages/api/chat-gemini.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    try {
      // Log the request body to ensure it's coming in correctly
      console.log('Received question:', question);

      const result = await model.generateContent(question);

      console.log(result.response.text());

      res.status(200).json( result.response.text() );
    } catch (error) {
      // Log the error for better debugging
      console.error('Error with OpenAI API:', error);

      // Send back a more descriptive error response
      res.status(500).json({
        error: 'We\'re sorry something went wrong!',
        details: error.message || 'Unknown error',
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
