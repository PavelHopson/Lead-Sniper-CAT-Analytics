import { GoogleGenAI } from "@google/genai";
import { Company } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API Key not found");
  return new GoogleGenAI({ apiKey });
};

export const analyzeData = async (companies: Company[], prompt: string) => {
  try {
    const ai = getClient();
    
    // Convert data to a minimal string representation to save tokens
    const dataContext = companies.map(c => 
      `- ${c.name} (${c.catProduct}): ${c.revenue / 1000000}M RUB, Employees: ${c.employees}`
    ).join('\n');

    const fullPrompt = `
      Ты — Senior Data Analyst в компании Lead Sniper. 
      Проанализируй следующий набор данных по переводческим агентствам России:
      
      ${dataContext}
      
      Запрос пользователя: ${prompt}
      
      Предоставь краткое, профессиональное резюме на русском языке. Подсвети тренды, доминирование определенных инструментов (CAT Tools) и корреляцию с выручкой.
      Используй Markdown для форматирования. Делай акцент на цифрах и фактах.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ошибка генерации инсайтов. Пожалуйста, проверьте конфигурацию API ключа.";
  }
};