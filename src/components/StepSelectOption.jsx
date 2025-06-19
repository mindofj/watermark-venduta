const options = [
  'VENDUTA',
  'MOTORE VENDUTO',
  'GRANDINATA',
  'MOTORE FUSO',
];

export default function StepSelectOption({ setSelectedOption, setWatermarkText, next }) {
  const handleSelect = (value) => {
    setSelectedOption(value);
    setWatermarkText(value);
    next();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold uppercase mb-6">Seleziona un'opzione</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className="bg-red-700 hover:bg-red-600 active:scale-95 transition-all rounded-xl py-6 px-4 text-lg font-bold uppercase shadow-md border-2 border-red-900"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
