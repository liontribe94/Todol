import React, { useState, useEffect } from "react";

// Helper functions to generate random creatures and trees with more complexity
const generateRandomEntity = (type) => {
  const types = {
    creature: ["Roaming", "Eating", "Sleeping", "Reproducing"],
    tree: ["Sapling", "Young Tree", "Mature Tree"],
  };

  const randomBehavior =
    type === "creature"
      ? types.creature[Math.floor(Math.random() * types.creature.length)]
      : types.tree[Math.floor(Math.random() * types.tree.length)];

  const randomColor = type === "creature" ? "#ff5733" : "#4CAF50"; // Red for creatures, Green for trees
  return {
    type,
    behavior: randomBehavior,
    color: randomColor,
    position: [Math.floor(Math.random() * 400), Math.floor(Math.random() * 400)], // Random position
    size: type === "creature" ? 20 : 40, // Different size for creatures and trees
    age: 0, // Age of entity (helps with evolution)
  };
};

// Main component
const Spec = () => {
  const [entities, setEntities] = useState([]);
  const [timeSpeed, setTimeSpeed] = useState(1000); // Control world evolution speed
  const [actionLog, setActionLog] = useState([]); // Track user actions

  // Generate initial entities
  useEffect(() => {
    let initialEntities = [];
    for (let i = 0; i < 5; i++) {
      initialEntities.push(generateRandomEntity("creature"));
      initialEntities.push(generateRandomEntity("tree"));
    }
    setEntities(initialEntities);

    const interval = setInterval(() => {
      setEntities((prevEntities) => {
        return prevEntities.map((entity) => {
          // Simulate aging and evolve behavior
          const newEntity = { ...entity, age: entity.age + 1 };

          if (newEntity.type === "creature") {
            newEntity.behavior = evolveCreatureBehavior(newEntity);
          } else if (newEntity.type === "tree") {
            newEntity.behavior = evolveTreeBehavior(newEntity);
          }

          return newEntity;
        });
      });
    }, timeSpeed);

    return () => clearInterval(interval);
  }, [timeSpeed]);

  // Handle evolving behaviors for creatures
  const evolveCreatureBehavior = (creature) => {
    if (creature.age > 10 && creature.behavior !== "Reproducing") {
      return "Reproducing";
    }
    if (creature.age > 5 && creature.behavior === "Eating") {
      return "Sleeping";
    }
    return creature.behavior;
  };

  // Handle tree growth and aging
  const evolveTreeBehavior = (tree) => {
    if (tree.age > 10 && tree.behavior === "Sapling") {
      return "Young Tree";
    }
    if (tree.age > 20 && tree.behavior === "Young Tree") {
      return "Mature Tree";
    }
    return tree.behavior;
  };

  // Handle user interaction for adding and clearing entities
  const handleUserAction = (action) => {
    if (action === "addEntity") {
      setEntities((prevEntities) => [
        ...prevEntities,
        generateRandomEntity("creature"),
        generateRandomEntity("tree"),
      ]);
      setActionLog((prevLog) => [...prevLog, "Added new creature and tree."]);
    } else if (action === "clearWorld") {
      setEntities([]);
      setActionLog((prevLog) => [...prevLog, "World has been cleared."]);
    }
  };

  return (
    <div className="Spec">
      <h1 className="text-center text-4xl mt-10">Self-Evolving World</h1>

      {/* User interaction buttons */}
      <div className="flex justify-center mt-5">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => handleUserAction("addEntity")}
        >
          Add Entity
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => handleUserAction("clearWorld")}
        >
          Clear World
        </button>
      </div>

      {/* Speed control for time */}
      <div className="flex justify-center mt-5">
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
          onClick={() => setTimeSpeed(500)}
        >
          Speed Up
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => setTimeSpeed(1000)}
        >
          Normal Speed
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() => setTimeSpeed(2000)}
        >
          Slow Down
        </button>
      </div>

      {/* Action Log */}
      <div className="text-center mt-5">
        <h2 className="text-xl">Action Log</h2>
        <ul className="text-sm">
          {actionLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>

      {/* The World */}
      <div className="relative mt-10 bg-gray-200 w-full h-96">
        {entities.map((entity, index) => (
          <div
            key={index}
            className={`absolute`}
            style={{
              left: `${entity.position[0]}px`,
              top: `${entity.position[1]}px`,
              width: `${entity.size}px`,
              height: `${entity.size}px`,
              backgroundColor: entity.color,
              borderRadius: entity.type === "creature" ? "50%" : "0%", // Round for creatures, square for trees
              transition: "all 0.5s ease-in-out",
            }}
          >
            <span className="text-xs text-white absolute bottom-0 left-0 p-1">
              {entity.type === "creature" ? entity.behavior : entity.behavior}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spec;
