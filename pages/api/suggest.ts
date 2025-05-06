import type { NextApiRequest, NextApiResponse } from 'next';
import type { Deal } from '../../types';

interface AIResponse {
  nextBestAction: string;
  emailLine: string;
  tokensUsed?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<AIResponse | { error: string }>) {
  const { deal } = req.body as { deal: Deal };

  const prompt = `
You are a smart assistant helping with B2B deal follow-ups.

Given the deal below, suggest the next best action and a one-line email follow-up.

Deal:
- Title: ${deal.title}
- Company: ${deal.company}
- Contact: ${deal.contact}
- Stage: ${deal.stage}
- Value: $${deal.value}
- Last Contacted: ${deal.lastContacted}
- Notes: ${deal.notes}

Respond in JSON format:
{
  "nextBestAction": "...",
  "emailLine": "..."
}
`;

  try {
    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await completion.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error('Unexpected OpenAI response:', JSON.stringify(data, null, 2));
      return res.status(500).json({ error: 'Invalid response from AI' });
    }

    const responseText = data.choices[0].message.content.trim();
    const parsed = JSON.parse(responseText);

    const tokensUsed = data.usage?.total_tokens;
    console.log(`✅ OpenAI API call successful. Tokens used: ${tokensUsed}`);

    res.status(200).json({ ...parsed, tokensUsed });
  } catch (error) {
    console.error('❌ Error calling OpenAI API:', error);
    res.status(500).json({ error: 'AI suggestion failed.' });
  }
}
