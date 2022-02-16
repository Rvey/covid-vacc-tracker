import { useState } from "react";
import VerificationForm from "./components/Forms/VerificationForm";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex justify-center">
      <VerificationForm />

      <div>
        {/* <h1>container</h1>
        {step == 1 ? (
          <div>step 1</div>
        ) : step == 2 ? (
          <div>step 2</div>
        ) : step == 3 ? (
          <div>step 3</div>
        ) : null}
        {step < 3 && (
          <button onClick={() => setStep(step + 1)} className="p-3">
            go
          </button>
        )}
        {step <= 3 && (
          <button onClick={() => setStep(step - 1)} className="p-3">
            back
          </button>
        )} */}
      </div>
    </div>
  );
}

export default App;
