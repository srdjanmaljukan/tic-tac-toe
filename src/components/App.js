import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import Scoreboard from "./Scoreboard";


function App() {

  let [scoreX, setScoreX] = useState(0);
  let [scoreO, setScoreO] = useState(0);

  function updateScoreboard(data) {
    if (data === "X") {
      setScoreX(scoreX + 1);
    } else if (data === "O") {
      setScoreO(scoreO + 1);
    }
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard scoreX={scoreX} scoreO={scoreO} />
      <Board updateScore={updateScoreboard} />
      <Footer />
    </div>
  );
}

export default App;
