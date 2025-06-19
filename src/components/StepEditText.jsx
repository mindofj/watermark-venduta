import { useEffect, useRef } from 'react';

export default function StepEditText({ watermarkText, setWatermarkText, textColor, setTextColor, image, next }) {

  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const colors = ['red', 'white', 'black', 'green'];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      let fontSize = 10;
      const text = watermarkText.toUpperCase();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = textColor;

      do {
        fontSize += 2;
        ctx.font = `bold ${fontSize}px Arial Black, Arial, sans-serif`;
      } while (ctx.measureText(text).width < canvas.width * 0.7);

      fontSize -= 2;
      ctx.font = `bold ${fontSize}px Arial Black, Arial, sans-serif`;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };
  }, [watermarkText, textColor]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold uppercase">Modifica il testo</h2>
      {image && (
  <div className="max-w-xs max-h-48 mx-auto mb-4 overflow-hidden rounded-lg border border-neutral-700">
    <img src={image} alt="Anteprima immagine" className="object-contain w-full h-full" />
  </div>
)}
      <input
        type="text"
        value={watermarkText}
        onChange={(e) => setWatermarkText(e.target.value)}
        className="px-4 py-2 rounded-lg text-black w-full max-w-md"
      />
      <div className="flex gap-2 mt-2">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setTextColor(c)}
            className={`w-8 h-8 rounded-full border-2 ${textColor === c ? 'ring-2 ring-white' : ''}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="relative max-w-[90vw] max-h-[60vh] overflow-auto bg-black p-2 rounded-xl">
        <canvas ref={canvasRef} className="rounded-lg" />
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
