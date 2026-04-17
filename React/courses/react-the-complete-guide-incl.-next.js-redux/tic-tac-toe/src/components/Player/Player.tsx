import { useState } from "react";
import type { PlayerProps } from "./types";

export const Player = ({
  name,
  symbol,
}: PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditButton = () => {
    if(isEditing) {
      // todo: set name using input value
    }

    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};