import React, { useState } from 'react';
import './index.css';  // Add custom styles here

const planetsData = [
  { name: 'Mercury', color: '#B5B5B5', size: 20, distance: 50, info: 'Mercury is the smallest planet in the Solar System.' },
  { name: 'Venus', color: '#E0C29E', size: 30, distance: 80, info: 'Venus has a thick atmosphere and is the hottest planet.' },
  { name: 'Earth', color: '#4A90E2', size: 40, distance: 110, info: 'Earth is the only known planet to support life.' },
  { name: 'Mars', color: '#E2574C', size: 35, distance: 150, info: 'Mars is known as the Red Planet.' },
  { name: 'Jupiter', color: '#F1A23B', size: 70, distance: 210, info: 'Jupiter is the largest planet in the Solar System.' },
  { name: 'Saturn', color: '#C9B98F', size: 60, distance: 270, info: 'Saturn is known for its beautiful rings.' },
  { name: 'Uranus', color: '#78C0E0', size: 50, distance: 330, info: 'Uranus has a tilted rotation and is an ice giant.' },
  { name: 'Neptune', color: '#4F6D8C', size: 50, distance: 400, info: 'Neptune is known for its strong winds and dark blue color.' },
];

const Solar = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="solar-system-container">
        <div className="sun bg-yellow-400 rounded-full w-24 h-24 absolute z-10"></div>

        {planetsData.map((planet, index) => (
          <div
            key={index}
            className="planet"
            style={{
              backgroundColor: planet.color,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              transform: `rotate(${(index + 1) * 45}deg) translateX(${planet.distance}px) rotate(-${(index + 1) * 45}deg)`,
            }}
            onClick={() => setSelectedPlanet(planet)}
          >
            <div className="planet-inner bg-gray-800 rounded-full w-full h-full"></div>
          </div>
        ))}
      </div>

      {selectedPlanet && (
        <div className="planet-info absolute bottom-10 left-10 p-5 bg-white text-black rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{selectedPlanet.name}</h3>
          <p>{selectedPlanet.info}</p>
        </div>
      )}
    </div>
  );
};

export default Solar;
