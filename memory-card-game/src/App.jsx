import { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import Scoreboard from "./components/Scoreboard";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  // Shuffle function (defined before use)
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Fetch when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching Pokemon data...");
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12"
        );
        const data = await response.json();
        console.log("Initial data:", data);

        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();

            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
            };
          })
        );

        console.log("Pokemon data fetched:", pokemonData);
        setCards(shuffleArray(pokemonData));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle card click
  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards((prev) => [...prev, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      // Check for win condition
      if (newScore === cards.length) {
        setShowWinModal(true);
      }
    }

    setCards((prevCards) => shuffleArray(prevCards));
  };

  // Restart game
  const restartGame = () => {
    setScore(0);
    setClickedCards([]);
    setShowWinModal(false);
    setCards((prevCards) => shuffleArray(prevCards));
  };

  return (
    <>
      <div className="header">
        <h1>Pokemon Memory Card Game</h1>
        <button
          className="instructions-btn"
          onClick={() => setShowInstructions(true)}
        >
          How to Play
        </button>
      </div>

      <Scoreboard score={score} bestScore={bestScore} />
      {loading && <p>Loading Pokemon...</p>}
      <CardGrid cards={cards} onCardClick={handleCardClick} />

      <Modal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        title="How to Play"
      >
        <p>
          Test your memory by clicking on different Pokemon cards. The goal is
          to click each card only once!
        </p>
        <ul>
          <li>Click on a Pokemon card to earn points</li>
          <li>Cards will shuffle after each click</li>
          <li>Don't click the same card twice!</li>
          <li>If you click a card you've already clicked, your score resets to 0</li>
          <li>Win by clicking all {cards.length} cards without repeating</li>
        </ul>
      </Modal>

      <Modal
        isOpen={showWinModal}
        onClose={() => setShowWinModal(false)}
        title="Congratulations!"
      >
        <p className="win-message">
          You won! You successfully clicked all {cards.length} Pokemon cards
          without repeating!
        </p>
        <p>Your final score: {score}</p>
        <button className="restart-btn" onClick={restartGame}>
          Play Again
        </button>
      </Modal>
    </>
  );
}

export default App;