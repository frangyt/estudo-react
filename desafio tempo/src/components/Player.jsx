import { useRef, useState } from "react";

export default function Player() {
  const inputPlayer = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function handleClick() {
    setPlayerName(inputPlayer.current.value);
    inputPlayer.current.value = "";
    inputPlayer.current.focus();
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputPlayer} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
