import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [value, setValue] = useState("");
  const [btnClass, setBtnClass] = useState(Array(9).fill("btn-space"));
  calculateWinner(squares);
  const handleClick = (index) => {
    if (calculateWinner(squares)) {
      const newSquares = Array(9).fill("");
      const newBtnClass = Array(9).fill("btn-space");
      setBtnClass([...newBtnClass]);
      setSquares([...newSquares]);
      console.log("test");
      return;
    }
    if (squares[index] === null) {
      squares[index] = "X";
      btnClass[index] = "btn-red";
    } else if (squares[index] === "X") {
      squares[index] = "O";
      btnClass[index] = "btn-blue";
    } else if (squares[index] === "O") {
      squares[index] = "";
      btnClass[index] = "btn-space";
    } else if (squares[index] === "") {
      squares[index] = "X";
      btnClass[index] = "btn-red";
    } else {
      return null;
    }

    setBtnClass([...btnClass]);
    setSquares([...squares]);
    setValue(squares[index]);
  };

  function calculateWinner(squares) {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winners.length; i++) {
      const [a, b, c] = winners[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        btnClass[a] =
          squares[a] === "X"
            ? "btn-win-red"
            : squares[a] === "O"
            ? "btn-win-blue"
            : "btn-space";
        btnClass[b] =
          squares[b] === "X"
            ? "btn-win-red"
            : squares[b] === "O"
            ? "btn-win-blue"
            : "btn-space";
        btnClass[c] =
          squares[c] === "X"
            ? "btn-win-red"
            : squares[c] === "O"
            ? "btn-win-blue"
            : "btn-space";
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="container">
      <div className="header">GAME TIME</div>
      <div className="board-row">
        <Square
          className={btnClass[0]}
          value={squares[0]}
          onClick={() => handleClick(0)}
        />
        <Square
          className={btnClass[1]}
          value={squares[1]}
          onClick={() => handleClick(1)}
        />
        <Square
          className={btnClass[2]}
          value={squares[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          className={btnClass[3]}
          value={squares[3]}
          onClick={() => handleClick(3)}
        />
        <Square
          className={btnClass[4]}
          value={squares[4]}
          onClick={() => handleClick(4)}
        />
        <Square
          className={btnClass[5]}
          value={squares[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          className={btnClass[6]}
          value={squares[6]}
          onClick={() => handleClick(6)}
        />
        <Square
          className={btnClass[7]}
          value={squares[7]}
          onClick={() => handleClick(7)}
        />
        <Square
          className={btnClass[8]}
          value={squares[8]}
          onClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
}

export default App;
