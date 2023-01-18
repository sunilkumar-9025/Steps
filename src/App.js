import React, { useState } from "react";
import StepNavigation from "./stepNavigation";
import "./App.css";

function App() {
  const labelArray = [
    "Formulation",
    "Testing & Claims",
    "Manufacturing",
    "Packaging",
    "Launch",
  ];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <div className="App">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>
      <p>Selected Step: {currentStep}</p>
      <button
        className="primaryButton"
        disabled={currentStep === 1}
        onClick={() => updateStep(currentStep - 1)}
      >
        Previous Step
      </button>
      <button
        className="primaryButton"
        disabled={currentStep === labelArray.length}
        onClick={() => updateStep(currentStep + 1)}
      >
        Next Step
      </button>
    </div>
  );
}

export default App;
