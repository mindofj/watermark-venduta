import { useEffect, useRef } from 'react';

export default function StepLoading({ image, watermarkText, textColor, setFinalImage, next }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = image;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        let fontSize = 10;
        const text = watermarkText.toUpperCase();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = textColor;

        // Calcola dimensione font fino al 70% larghezza canvas
        do {
          fontSize += 2;
          ctx.font = `bold ${fontSize}px Arial Black, Arial, sans-serif`;
        } while (ctx.measureText(text).width < canvas.width * 0.7);

        // Per "DEMOLITA" aumento il font del 15%
        if (watermarkText === 'DEMOLITA') {
          fontSize = Math.floor(fontSize * 1.15);
        }
        ctx.font = `bold ${fontSize}px Arial Black, Arial, sans-serif`;

        if (watermarkText === 'DEMOLITA') {
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate(-0.3);
          ctx.fillText(text, 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        }

        const final = canvas.toDataURL('image/jpeg');
        setFinalImage(final);
        next();
      };
    }, 1500);

    return () => clearTimeout(timer);
  }, [image, watermarkText, textColor, setFinalImage, next]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 text-center">
      <h2 className="text-2xl font-bold uppercase animate-pulse">
        Sto applicando il watermark...
      </h2>
      <div className="w-12 h-12 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
