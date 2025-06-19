import { useRef } from 'react';
import { UploadCloud } from 'lucide-react';

export default function StepUpload({ setImage, next }) {
  const inputRef = useRef();

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      next();
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full h-full flex flex-col items-center justify-center border-4 border-dashed border-red-600 bg-neutral-800 rounded-2xl mx-4 p-6 text-center cursor-pointer hover:bg-neutral-700 transition-all"
      onClick={handleClick}
    >
      <UploadCloud className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold uppercase text-white">Carica Immagine</h2>
      <p className="text-sm text-neutral-400 mt-2">
        Trascina un file qui o clicca per selezionarlo
      </p>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={(e) => {
          if (e.target.files[0]) handleFile(e.target.files[0]);
        }}
      />
    </div>
  );
}
