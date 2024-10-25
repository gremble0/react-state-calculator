import "./App.css";
import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [startNew, setStartNew] = useState(true);

  const handleNumber = (number) => {
    if (startNew || display === "0") {
      setDisplay(number);
      setStartNew(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + " " + operator + " ");
    setStartNew(true);
  };

  const handleEquals = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation("");
      setStartNew(true);
    } catch (error) {
      setDisplay("Error");
      setEquation("");
      setStartNew(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setStartNew(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl p-6 w-72">
        <div className="mb-4">
          <div className="text-gray-500 text-sm h-4">{equation}</div>
          <div className="text-3xl font-bold text-right overflow-hidden">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-500 text-white p-4 rounded hover:bg-red-600 active:bg-red-700"
          >
            AC
          </button>
          <button
            onClick={() => handleOperator("/")}
            className="bg-gray-200 p-4 rounded hover:bg-gray-300 active:bg-gray-400"
          >
            ÷
          </button>
          <button
            onClick={() => handleOperator("*")}
            className="bg-gray-200 p-4 rounded hover:bg-gray-300 active:bg-gray-400"
          >
            ×
          </button>

          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-gray-100 p-4 rounded hover:bg-gray-200 active:bg-gray-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator("-")}
            className="bg-gray-200 p-4 rounded hover:bg-gray-300 active:bg-gray-400"
          >
            -
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-gray-100 p-4 rounded hover:bg-gray-200 active:bg-gray-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator("+")}
            className="bg-gray-200 p-4 rounded hover:bg-gray-300 active:bg-gray-400"
          >
            +
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-gray-100 p-4 rounded hover:bg-gray-200 active:bg-gray-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEquals}
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 active:bg-blue-700"
          >
            =
          </button>

          <button
            onClick={() => handleNumber("0")}
            className="col-span-2 bg-gray-100 p-4 rounded hover:bg-gray-200 active:bg-gray-300"
          >
            0
          </button>
          <button
            onClick={() => handleNumber(".")}
            className="bg-gray-100 p-4 rounded hover:bg-gray-200 active:bg-gray-300"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
