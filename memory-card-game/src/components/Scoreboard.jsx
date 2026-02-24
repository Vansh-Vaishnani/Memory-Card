function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <h3>Current Score</h3>
        <p className="score-value">{score}</p>
      </div>
      <div className="score-item">
        <h3>Best Score</h3>
        <p className="score-value">{bestScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;