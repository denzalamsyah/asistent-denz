import { useState } from "react";
import { loading } from "../assets";

// Langsung pakai API KEY dari environment
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const askGemini = async (promptText) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
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

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "Gagal dapat jawaban"
    );
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat menghubungi AI.";
  }
};

const Generating = ({ className }) => {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoadingState(true);
    setReply("");

    try {
      const response = await askGemini(prompt); // Panggil API Gemini
      setReply(response);
      setPrompt(""); // << CLEAR textarea di sini
    } catch (error) {
      console.error("Gagal meminta jawaban:", error);
      setReply("Maaf, terjadi kesalahan saat meminta jawaban.");
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-start gap-4 bg-n-8/80 rounded-2xl p-4 w-full max-w-2xl mx-auto ${className}`}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <textarea
          placeholder="Tulis pertanyaanmu ke AI di sini..."
          className="w-full p-3 bg-transparent text-sm border border-white/20 rounded-md text-white resize-none"
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-md w-full hover:bg-white/20 transition"
          disabled={loadingState}
        >
          {loadingState ? "Mengirim..." : "Kirim"}
        </button>
      </form>

      {loadingState && (
        <div className="flex items-center gap-2 mt-2 text-white text-sm">
          <img className="w-5 h-5 animate-spin" src={loading} alt="Loading" />
          <span>AI sedang menjawab...</span>
        </div>
      )}

      {reply && (
        <div className="mt-4 p-4 bg-black/40 rounded-lg text-white text-sm w-full max-h-[300px] overflow-y-auto">
          <strong className="block mb-1">Jawaban:</strong>
          <p className="whitespace-pre-wrap">{reply}</p>
        </div>
      )}
    </div>
  );
};

export default Generating;
