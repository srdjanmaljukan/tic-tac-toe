import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import Scoreboard from "./Scoreboard";


function App() {

  let [scoreX, setScoreX] = useState(0);
  let [scoreO, setScoreO] = useState(0);
  let [scoreDraw, setScoreDraw] = useState(0);

  function updateScoreboard(data) {
    if (data === "X") {
      setScoreX(scoreX => scoreX + 1);
    } else if (data === "O") {
      setScoreO(scoreO => scoreO + 1);
    } else {
      setScoreDraw(scoreDraw => scoreDraw + 1);
    }
  }

  return (
    <div className="p-3 mb-2 bg-dark">
      <Header />
      <Scoreboard scoreX={scoreX} scoreO={scoreO} scoreDraw={scoreDraw} />
      <Board updateScore={updateScoreboard} />
      <Footer />
    </div>
  );
}

export default App;
