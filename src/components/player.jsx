import { useState } from "react";

export default function Player({ initialName, symbol, isActivePlayer, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let btnText = isEditing ? "Save" : "Edit";
  let playerField = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }  
  }
  
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {playerField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnText}</button>
    </li>
  );
}
