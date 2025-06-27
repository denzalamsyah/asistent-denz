// src/components/ImageGenerator.jsx
import { useState } from "react";
import { generateImageFromPrompt } from "../../services/imageServices";

const ImageGenerator = ({ className }) => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setImages([]);

    try {
      const generatedImages = await generateImageFromPrompt(prompt, 2);
      setImages(generatedImages);
    } catch (error) {
      alert("Gagal generate gambar. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-start gap-4 bg-n-8/80 rounded-2xl p-4 w-full max-w-2xl mx-auto ${className}`}
    >
      <form onSubmit={handleGenerate} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Contoh: seekor naga di atas awan saat matahari terbenam"
          className="w-full p-3 rounded bg-gray-800 resize-none"
          rows={3}
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Membuat gambar..." : "Generate Gambar"}
        </button>
      </form>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gambar ${index + 1}`}
            className="w-full rounded max-h-[300px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
