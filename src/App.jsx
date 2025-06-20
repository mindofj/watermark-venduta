import { useState } from 'react';
import StepUpload from './components/StepUpload';
import StepSelectOption from './components/StepSelectOption';
import StepEditText from './components/StepEditText';
import StepLoading from './components/StepLoading';
import StepDownload from './components/StepDownload';
import StepFinal from './components/StepFinal';
import './index.css';

const steps = [
  'upload',
  'select',
  'editText',
  'loading',
  'download',
  'final',
];

export default function App() {
  const [currentStep, setCurrentStep] = useState('upload');
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [watermarkText, setWatermarkText] = useState('');
  const [finalImage, setFinalImage] = useState(null);
  const [textColor, setTextColor] = useState('red');

  const next = () => {
    const index = steps.indexOf(currentStep);
    if (index < steps.length - 1) setCurrentStep(steps[index + 1]);
  };

  const reset = () => {
    setCurrentStep('upload');
    setImage(null);
    setSelectedOption('');
    setWatermarkText('');
    setFinalImage(null);
    setTextColor('red');
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-neutral-900 text-white font-poppins">
      {currentStep === 'upload' && (
        <StepUpload setImage={setImage} next={next} />
      )}
      {currentStep === 'select' && (
        <StepSelectOption
          setSelectedOption={setSelectedOption}
          setWatermarkText={setWatermarkText}
          next={next}
        />
      )}
      {currentStep === 'editText' && (
        <StepEditText
          watermarkText={watermarkText}
          setWatermarkText={setWatermarkText}
          textColor={textColor}
          setTextColor={setTextColor}
          next={next}
          image={image}
        />
      )}
      {currentStep === 'loading' && (
        <StepLoading
          image={image}
          watermarkText={watermarkText}
          textColor={textColor}
          setFinalImage={setFinalImage}
          next={next}
        />
      )}
      {currentStep === 'download' && (
        <StepDownload finalImage={finalImage} next={next} />
      )}
      {currentStep === 'final' && <StepFinal reset={reset} />}
    </div>
  );
}
