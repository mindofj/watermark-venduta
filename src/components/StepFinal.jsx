export default function StepFinal({ reset }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4 p-4">
      <h2 className="text-3xl font-bold uppercase text-green-400">Fatto!</h2>
      <p className="text-neutral-400">Il tuo watermark è stato applicato con successo.</p>

      <button
        onClick={reset}
        className="mt-6 bg-red-700 hover:bg-red-600 transition-all px-6 py-3 rounded-xl uppercase font-bold"
      >
        Ricomincia
      </button>
    </div>
  );
}
