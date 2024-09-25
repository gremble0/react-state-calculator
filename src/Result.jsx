export default function Result({ result, setResult, firstNumber, operator, secondNumber }) {
  const calculate = () => {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      case "÷":
        return firstNumber / secondNumber;
    }
  }

  return (
    <div className="panel answer">
      <p>{result}</p>
      <div>
        <button onClick={() => setResult(calculate())}>=</button>
      </div>
    </div>
  )
}
