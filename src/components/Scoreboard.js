import React from "react";

function Scoreboard(props) {

    return (
        <div className="scoreboard">
            <p>Player X <span>{props.scoreX}</span></p>
            <p>Draw <span>{props.scoreDraw}</span></p>
            <p>Player O <span>{props.scoreO}</span></p>
        </div>
    )
}

export default Scoreboard;