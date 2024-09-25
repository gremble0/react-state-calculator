import { useState } from "react";
import NumberSelection from "./NumberSelection";
import OperatorSelection from "./OperatorSelection";
import Result from "./Result";
import "./App.css"

export default function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="calculator">
      <NumberSelection
        selectedNumber={firstNumber}
        onSelectionChange={setFirstNumber}
      />
      <OperatorSelection
        operator={operator}
        setOperator={setOperator}
      />
      <NumberSelection
        selectedNumber={secondNumber}
        onSelectionChange={setSecondNumber}
      />
      <Result
        result={result}
        setResult={setResult}
        firstNumber={firstNumber}
        operator={operator}
        secondNumber={secondNumber}
      />
    </div>
  )
}
