export default function StepSelectOption({ setSelectedOption, setWatermarkText, next }) {
  const options = [
    { label: 'VENDUTA', value: 'VENDUTA' },
    { label: 'MOTORE VENDUTO', value: 'MOTORE VENDUTO' },
    { label: 'GRANDINATA', value: 'GRANDINATA' },
    { label: 'MOTORE FUSO', value: 'MOTORE FUSO' },
    { label: 'DEMOLITA', value: 'DEMOLITA' }, // Nuova opzione
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 text-center">
      <h2 className="text-2xl font-bold uppercase">Seleziona tipo di watermark</h2>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {options.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => {
              setSelectedOption(value);
              setWatermarkText(value);
              next();
            }}
            className="bg-red-700 hover:bg-red-600 transition-all px-6 py-3 rounded-xl uppercase font-bold"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
