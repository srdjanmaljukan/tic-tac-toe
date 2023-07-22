import React from "react";

function Scoreboard(props) {

    return (
        <div className="scoreboard">
            <p>Player X <span>{props.scoreX}</span></p>
            <p><span>{props.scoreO}</span> Player O</p>
        </div>
    )
}

export default Scoreboard;