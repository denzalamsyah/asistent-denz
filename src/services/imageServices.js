// src/services/imagenService.js
import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateImageFromPrompt = async (
  promptText,
  numberOfImages = 2
) => {
  try {
    const genAI = new GoogleGenAI({ apiKey: API_KEY });

    const model = genAI.getGenerativeModel({
      model: "imagen-3.0-generate-002",
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: promptText }],
        },
      ],
      generationConfig: {
        numberOfImages,
      },
    });

    const base64Images =
      result?.response?.candidates?.[0]?.content?.parts
        ?.filter((part) => part.inlineData?.mimeType?.startsWith("image/"))
        ?.map(
          (part) =>
            `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
        ) || [];

    return base64Images;
  } catch (error) {
    console.error("Gagal generate gambar:", error);
    throw error;
  }
};
