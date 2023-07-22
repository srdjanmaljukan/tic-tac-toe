import React, { useState } from "react";

function Board(props) {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [highlight, setHighlight] = useState(null);

    function checkWinner() {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let line of winningLines) {
            let [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (!board.includes(null)) {
            return "It's a tie.";
        }
    }

    function handleCellClick(index) {
        if (board[index] === null && winner === null) {
            let newBoard = board;
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === "X" ? "O" : "X");
            let status = checkWinner();
            if (status === "X" || status === "O") {
                props.updateScore(status);
                setWinner(`Winner is player ${status}.`);
            } else if (status) {
                setWinner(status);
            }
        } else {
            return
        }
    }

    function handleResetClick() {
        setBoard(Array(9).fill(null));
        setPlayer("X");
        setWinner(null);
    }

    return (
        <div className="board">
            <div className="grid-container">
                {board.map((square, index) => {
                    return (
                        <div
                            key={index}
                            id={index}
                            className="grid-item"
                            onClick={() => { handleCellClick(index) }}>
                            {board[index]}
                        </div>
                    )
                })}
            </div>
            {winner ? <p className="winner">{winner}</p> : null}
            <div className="reset">
                <button className="btn btn-outline-light text-dark" onClick={handleResetClick}>Reset Game</button>
            </div>
        </div>
    )
}

export default Board;