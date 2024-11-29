import React, { useEffect, useState } from "react";

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [players, setPlayers] = useState({});
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket("ws://localhost:8080");
    setWs(socket);

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "WELCOME") {
        // Store player's ID when welcomed by the server
        console.log("Welcome Player ID:", message.playerId);
      } else if (message.type === "PLAYER_MOVEMENT") {
        setPlayers((prevPlayers) => ({
          ...prevPlayers,
          [message.playerId]: { x: message.x, y: message.y },
        }));
      } else if (message.type === "PLAYER_DISCONNECTED") {
        setPlayers((prevPlayers) => {
          const newPlayers = { ...prevPlayers };
          delete newPlayers[message.playerId];
          return newPlayers;
        });
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleMove = (x, y) => {
    setPlayerPosition({ x, y });
    ws.send(
      JSON.stringify({ type: "MOVE", x: playerPosition.x + x, y: playerPosition.y + y })
    );
  };

  return (
    <div>
      <h1>Multiplayer World</h1>
      <button onClick={() => handleMove(1, 0)}>Move Right</button>
      <button onClick={() => handleMove(-1, 0)}>Move Left</button>
      <button onClick={() => handleMove(0, 1)}>Move Down</button>
      <button onClick={() => handleMove(0, -1)}>Move Up</button>
      <div>
        <h2>Player Position</h2>
        <p>
          X: {playerPosition.x} Y: {playerPosition.y}
        </p>
      </div>
      <div>
        <h2>Other Players</h2>
        {Object.keys(players).map((id) => (
          <p key={id}>Player {id} is at X: {players[id].x}, Y: {players[id].y}</p>
        ))}
      </div>
    </div>
  );
};

export default Game;
