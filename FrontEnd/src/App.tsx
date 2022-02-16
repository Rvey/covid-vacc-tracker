import { useState } from "react";
import VerificationForm from "./components/Forms/VerificationForm";
import Check from "./components/layout/Check";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div >
      {/* <VerificationForm /> */}
      <Check />
    </div>
  );
}

export default App;
