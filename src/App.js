import React, { useState } from 'react';
import './App.css';

const players = [
  "Virat Kohli", "MS Dhoni", "Rohit Sharma", "AB de Villiers", "Suresh Raina", "David Warner", 
  "Chris Gayle", "Lasith Malinga", "Rashid Khan", "Andre Russell",
  "Sachin Tendulkar", "Brian Lara", "Jacques Kallis", "Joe Root", "Steve Smith",
  "Ben Stokes", "Shakib Al Hasan", "Glenn McGrath", "Kane Williamson", "Yuvraj Singh",
  "Babar Azam", "Sanath Jayasuriya", "Anil Kumble", "Wasim Akram", "Brett Lee",
  "Ricky Ponting", "Muttiah Muralitharan", "Saqlain Mushtaq", "Sunil Gavaskar", "Mohammad Nabi",
  "KL Rahul", "Hardik Pandya", "Imran Tahir", "Faf du Plessis", "Shaheen Afridi",
  "Trent Boult", "Jasprit Bumrah", "Zaheer Khan", "Rahul Dravid", "Virender Sehwag",
  "Matthew Hayden", "Adam Gilchrist", "Michael Hussey", "Michael Clarke", "AB de Villiers",
  "Andre Russell", "Ravindra Jadeja", "Ravichandran Ashwin", "Harbhajan Singh", "Mohammed Shami",
  "Dwayne Bravo", "Kieron Pollard", "Shane Watson", "Shane Warne", "Pat Cummins",
  "Josh Hazlewood", "Quinton de Kock", "Martin Guptill", "Tamim Iqbal", "Litton Das",
  "Shreyas Iyer", "Ruturaj Gaikwad", "Tilak Varma", "Prithvi Shaw", "Shubman Gill",
  "Devdutt Padikkal", "Yashasvi Jaiswal", "Ishan Kishan", "Sanju Samson", "Mayank Agarwal",
  "Rishabh Pant", "Deepak Chahar", "Navdeep Saini", "T Natarajan", "Umran Malik",
  "Mohammed Siraj", "Varun Chakravarthy", "Rahul Chahar", "Kuldeep Yadav", "Axar Patel",
  "Washington Sundar", "Arshdeep Singh", "Bhuvneshwar Kumar", "Dinesh Karthik", "Parthiv Patel",
  "Manish Pandey", "Ajinkya Rahane", "Cheteshwar Pujara", "Alastair Cook", "James Anderson",
  "Stuart Broad", "Graeme Swann", "Kevin Pietersen", "Andrew Flintoff", "Ian Bell",
  "Hashim Amla", "Dale Steyn", "AB de Villiers", "David Miller", "Aaron Finch"
];

function App() {
  const [selected, setSelected] = useState([]);
  const [remaining, setRemaining] = useState(players);

  const handleSelect = (player) => {
    setSelected([...selected, player]);
    setRemaining(remaining.filter(p => p !== player));
  };

  return (
    <div className="App">
      <h1>Cricket Blind Ranking Game</h1>
      <div className="players-grid">
        {remaining.map((player, index) => (
          <button key={index} onClick={() => handleSelect(player)}>
            {player}
          </button>
        ))}
      </div>
      <div className="selected-list">
        <h2>Your Ranking:</h2>
        <ol>
          {selected.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
