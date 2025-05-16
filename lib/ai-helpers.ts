import openai from './openai';

export const getChatResponse = async (messages: any) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error in getChatResponse:', error);
    throw error;
  }
};
