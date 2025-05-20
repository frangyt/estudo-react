import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const [inputPlayerName, setInputPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputPlayerName);
  }
  function handleChange(event) {
    setInputPlayerName(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" value={inputPlayerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
