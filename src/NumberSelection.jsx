export default function NumberSelection({ selectedNumber, onSelectionChange }) {
  return (
    <div className="panel">
      <p>{selectedNumber}</p>
      <div className="numbers">
        <button onClick={() => onSelectionChange(1)}>1</button>
        <button onClick={() => onSelectionChange(3)}>2</button>
        <button onClick={() => onSelectionChange(4)}>3</button>
        <button onClick={() => onSelectionChange(5)}>4</button>
        <button onClick={() => onSelectionChange(5)}>5</button>
        <button onClick={() => onSelectionChange(6)}>6</button>
        <button onClick={() => onSelectionChange(7)}>7</button>
        <button onClick={() => onSelectionChange(8)}>8</button>
        <button onClick={() => onSelectionChange(9)}>9</button>
        <button onClick={() => onSelectionChange(0)}>0</button>
        <button onClick={() => onSelectionChange(null)}>Clear</button>
      </div>
    </div>
  )
}
