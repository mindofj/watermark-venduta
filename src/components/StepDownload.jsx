import { useRef, useState } from 'react';

export default function StepDownload({ finalImage, next }) {
  const downloadLinkRef = useRef(null);
  const [filename, setFilename] = useState('watermarked-001.jpg');

  const handleDownload = () => {
    const link = downloadLinkRef.current;
    link.href = finalImage;
    link.download = filename || 'watermarked.jpg';
    link.click();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 text-center">
      <h2 className="text-2xl font-bold uppercase">Immagine pronta!</h2>

      <div className="max-w-[90vw] max-h-[60vh] overflow-auto bg-black p-2 rounded-xl">
        <img src={finalImage} alt="Watermarked" className="rounded-lg" />
      </div>

      <input
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        placeholder="Nome file (es. venduta.jpg)"
        className="px-4 py-2 rounded-lg text-black w-full max-w-sm"
      />

      <button
        onClick={handleDownload}
        className="bg-red-700 hover:bg-red-600 transition-all px-6 py-3 rounded-xl uppercase font-bold"
      >
        Scarica immagine
      </button>

      <a ref={downloadLinkRef} style={{ display: 'none' }}>Scarica</a>

      <button
        onClick={next}
        className="text-sm text-neutral-400 underline mt-4"
      >
        Avanti
      </button>
    </div>
  );
}
