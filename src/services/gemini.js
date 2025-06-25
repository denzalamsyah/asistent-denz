// services/gemini.js

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const askGemini = async (promptText) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: promptText }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "Gagal dapat jawaban"
    );
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi Gemini API.";
  }
};
