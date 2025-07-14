import React, { useState } from "react";

const players = [
  "Virat Kohli",
  "MS Dhoni",
  "AB de Villiers",
  "Chris Gayle",
  "Muttiah Muralitharan",
  "Jacques Kallis",
  "Lasith Malinga",
  "Ben Stokes",
  "Rashid Khan",
  "Babar Azam",
];

const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());

function App() {
  const [index, setIndex] = useState(0);
  const [rankings, setRankings] = useState(Array(10).fill(null));
  const [gameOver, setGameOver] = useState(false);

  const handleRank = (rank) => {
    const updated = [...rankings];
    if (updated[rank - 1] !== null) return;
    updated[rank - 1] = shuffledPlayers[index];
    setRankings(updated);
    if (index === 9) setGameOver(true);
    else setIndex(index + 1);
  };

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">🏏 Blind Ranking: Cricket Edition</h1>

      {!gameOver ? (
        <>
          <div className="bg-gray-800 w-full max-w-md mb-6 p-6 text-center text-xl rounded">
            Rank this Player: <br />
            <span className="text-2xl font-bold text-yellow-400">
              {shuffledPlayers[index]}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-4">
            {Array.from({ length: 10 }, (_, i) => (
              <button
                key={i}
                className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded"
                onClick={() => handleRank(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <p className="text-gray-400">Choose a rank between 1 (GOAT) and 10</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">🏆 Your Final Ranking</h2>
          <ul className="w-full max-w-md space-y-2 text-lg">
            {rankings.map((player, i) => (
              <li
                key={i}
                className="bg-gray-800 px-4 py-2 rounded shadow flex justify-between"
              >
                <span>#{i + 1}</span>
                <span>{player}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded"
            onClick={resetGame}
          >
            🔄 Play Again
          </button>
        </>
      )}
    </div>
  );
}

export default App;
