import { useState } from "react";
import Header from "./components/Header.jsx";
import InputValues from "./components/InputValues.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const isValid = inputValues.duration > 0;

  function handleChange(name, value) {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: +value,
    }));
  }

  return (
    <>
      <Header />
      <InputValues inputValues={inputValues} onChangeValue={handleChange} />
      {isValid ? 
        <Results inputValues={inputValues} /> : 
        <h2>
          Insira uma duração maior que 0
        </h2>
      }
    </>
  );
}

export default App;
