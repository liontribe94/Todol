import React, { useState } from 'react';

function LoveDeterminer() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [loveScore, setLoveScore] = useState(null);
  const [message, setMessage] = useState('');

  const handleInputChange1 = (e) => {
    setName1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setName2(e.target.value);
  };

  const calculateLoveScore = () => {
    // Simple love score calculation based on the length of the names
    // You can modify this logic to make it more complex or fun

    const totalLength = name1.length + name2.length;
    const randomLoveScore = Math.floor(Math.random() * 100) + 1;

    const score = (totalLength + randomLoveScore) % 100;
    setLoveScore(score);

    const loveMessages = [
      "You're a perfect match!",
      "There's some chemistry here!",
      "It's complicated, but there's potential.",
      "You might be better off as friends!",
      "Love is in the air! 🌹",
      "Looks like a love story waiting to happen!",
      "Not the best match, but who knows? 🤷‍♂️",
    ];

    setMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)]);
  };

  return (
    <div className="love-detector bg-pink-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Love Determiner</h2>
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
          onClick={calculateLoveScore}
          className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-700 transition duration-300"
        >
          Calculate Love Score
        </button>

        {loveScore !== null && (
          <div className="result mt-4 text-center">
            <p className="text-2xl font-semibold">Love Score: {loveScore}%</p>
            <p className="mt-2 text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoveDeterminer;
