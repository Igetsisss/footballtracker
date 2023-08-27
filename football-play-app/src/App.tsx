import React, { useState } from 'react';
import './App.css';

interface PlayData {
  down: string;
  distance: string;
  personnel: string;
  yardLine: string;
  formation: string;
  defensiveCall: string;
  playType: string;
  result: string;
}

const dataFields: (keyof PlayData)[] = [
  'down',
  'distance',
  'personnel',
  'yardLine',
  'formation',
  'defensiveCall',
  'playType',
  'result'
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [playData, setPlayData] = useState<PlayData>({
    down: '',
    distance: '',
    personnel: '',
    yardLine: '',
    formation: '',
    defensiveCall: '',
    playType: '',
    result: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPlayData(prevPlayData => ({
      ...prevPlayData,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < dataFields.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    // Here you can implement data submission, storage, and analysis logic
    console.log('Submitted Play:', playData);
    // Reset the form and go back to the first step
    setCurrentStep(0);
    setPlayData({
      down: '',
      distance: '',
      personnel: '',
      yardLine: '',
      formation: '',
      defensiveCall: '',
      playType: '',
      result: ''
    });
  };

  return (
    <div className="App">
      <h1 className='title'>Football Tracker</h1>
      {currentStep < dataFields.length && (
        <div className="rounded-lg bg-card h-80">
          <h2 className='step'>Step {currentStep + 1}: {dataFields[currentStep]}</h2>
          {currentStep === 0 && (
            <select
              id={dataFields[currentStep]}
              name={dataFields[currentStep]}
              onChange={handleInputChange}
              value={playData[dataFields[currentStep]]}
            >
              <option value="1">1st Down</option>
              <option value="2">2nd Down</option>
              <option value="3">3rd Down</option>
              <option value="4">4th Down</option>
            </select>
          )}
          {currentStep !== 0 && (
            <input
              type="text"
              id={dataFields[currentStep]}
              name={dataFields[currentStep]}
              value={playData[dataFields[currentStep]]}
              onChange={handleInputChange}
            />
          )}
          <br />
          {currentStep < dataFields.length - 1 && (
            <button onClick={handleNextStep}>Next</button>
          )}
          {currentStep === dataFields.length - 1 && (
            <button onClick={handleSubmit}>Submit Play</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;