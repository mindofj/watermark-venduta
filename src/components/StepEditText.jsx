import { useEffect, useRef } from 'react';

export default function StepEditText({ watermarkText, setWatermarkText, next }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = imageRef.current;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      ctx.font = 'bold 48px Poppins';
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillText(watermarkText.toUpperCase(), canvas.width / 2, canvas.height / 2);
    };
  }, [watermarkText]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold uppercase">Modifica il testo</h2>
      <input
        type="text"
        value={watermarkText}
        onChange={(e) => setWatermarkText(e.target.value)}
        className="px-4 py-2 rounded-lg text-black w-full max-w-md"
      />

      <div className="relative max-w-[90vw] max-h-[60vh] overflow-auto bg-black p-2 rounded-xl">
        <canvas ref={canvasRef} className="rounded-lg" />
        {/* Hidden image used only for drawing */}
        <img ref={imageRef} src="" alt="hidden" style={{ display: 'none' }} />
      </div>

      <button
        onClick={next}
        className="mt-4 bg-red-700 hover:bg-red-600 transition-all px-6 py-3 rounded-xl uppercase font-bold"
      >
        Avanti
      </button>
    </div>
  );
}
