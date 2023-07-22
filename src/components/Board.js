import React, { useState } from "react";

function Board(props) {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState([]);

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
                return [line, board[a]];
            }
        }

        if (!board.includes(null)) {
            return "Draw";
        }
    }

    function handleCellClick(e) {
        let index = e.target.getAttribute("id")
        if (board[index] === null && winner === null) {
            let newBoard = board;
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === "X" ? "O" : "X");
            let gameStatus = checkWinner();
            if (gameStatus === "Draw") {
                setWinner("It's a draw.");
                props.updateScore(gameStatus);
            } else if (gameStatus) {
                setWinner(`Winner is player ${gameStatus[1]}.`);
                setWinningLine(gameStatus[0]);
                props.updateScore(gameStatus[1]);
                //highlightWinningLine()
            }
        }
    }

    function handleResetClick() {
        setBoard(Array(9).fill(null));
        setPlayer("X");
        setWinner(null);
        setWinningLine([]);
    }

    return (
        <div className="board">
            <div className="grid-container">
                {board.map((square, index) => {
                    return (
                        <div
                            key={index}
                            id={index}
                            className={`grid-item ${winningLine.includes(index) ? "text-white" : null}`}
                            onClick={handleCellClick}>
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