import React, { useState } from 'react';

function SexDeterminer() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange1 = (e) => {
    setName1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setName2(e.target.value);
  };

  const generatePrediction = () => {
    // Simple logic for "sex determination"
    // You can modify this to be more complex if you wish

    const totalLength = name1.length + name2.length;
    const randomPrediction = Math.random() < 0.5 ? "💋 Compatible!" : "🚫 Not Compatible!";

    const messages = [
      "You're a match made in heaven! 🔥",
      "Seems like a fun duo! 🎉",
      "Maybe just friends? 👯‍♂️",
      "You two are like fire and water! 💧🔥",
      "Best friends forever! 👫",
      "A wild love story awaits! 💖",
    ];

    setPrediction(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <div className="sex-detector bg-indigo-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Sex Determiner</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter first name"
          value={name1}
          onChange={handleInputChange1}
          className="p-3 rounded-lg border border-gray-300"
        />
        <input
          type="text"
          placeholder="Enter second name"
          value={name2}
          onChange={handleInputChange2}
          className="p-3 rounded-lg border border-gray-300"
        />
        <button
          onClick={generatePrediction}
          className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Determine Sex Compatibility
        </button>

        {prediction && (
          <div className="result mt-4 text-center">
            <p className="text-2xl font-semibold">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SexDeterminer;
