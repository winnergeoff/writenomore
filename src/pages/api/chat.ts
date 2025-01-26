// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    try {
      // Log the request body to ensure it's coming in correctly
      console.log('Received question:', question);

      // Send the request to OpenAI
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // Ensure this is the correct model
        messages: [{ role: 'user', content: question }],
      });

      // Log the response from OpenAI for debugging
      console.log('OpenAI response:', completion);

      const answer = completion.choices[0].message.content;

      res.status(200).json({ answer });
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
