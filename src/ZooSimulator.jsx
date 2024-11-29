import React, { useState } from 'react';

function ZooSimulator() {
  const [animals, setAnimals] = useState([
    { name: 'Lion', species: 'Panthera leo', age: 5 },
    { name: 'Elephant', species: 'Loxodonta africana', age: 10 },
    { name: 'Giraffe', species: 'Giraffa camelopardalis', age: 7 },
  ]);
  const [newAnimal, setNewAnimal] = useState({ name: '', species: '', age: '' });
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your Zoo Bot! How can I assist you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal({ ...newAnimal, [name]: value });
  };

  const handleChatInput = (e) => {
    setUserMessage(e.target.value);
  };

  const addAnimal = () => {
    if (newAnimal.name && newAnimal.species && newAnimal.age) {
      setAnimals([...animals, { ...newAnimal, age: parseInt(newAnimal.age) }]);
      setNewAnimal({ name: '', species: '', age: '' }); // Reset form
    }
  };

  
  const removeAnimal = (index) => {
    setAnimals((prevAnimals) =>
      prevAnimals.filter((_, i) => i !== index)
    );
  };

  // Simulate AI Response (you can later replace this with OpenAI GPT API)
  const handleChatSubmit = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { sender: 'user', text: userMessage },
        { sender: 'bot', text: getBotResponse(userMessage) }
      ]);
      setUserMessage('');
    }
  };

  // Simple Bot Response Simulation (Can be replaced with GPT API)
  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('zoo')) {
      return 'I see you love animals! hii Do you want to add a new animal to the zoo?';
    } else if (lowerMessage.includes('animal')) {
      return 'Are you interested in any particular animal? I can help you add it!';
    } else {
      return 'I didn’t quite understand that, but I’m happy to help with anything zoo-related!';
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
      {/* Zoo Simulator */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">Zoo Simulator</h1>
        
        <h3 className="text-2xl text-gray-800 mb-4">Animals in the Zoo</h3>
        <ul className="space-y-4 mb-8">
          {animals.map((animal, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-all"
            >
              <span className="text-lg font-semibold text-gray-800">{animal.name} ({animal.species})</span>
              <span className="text-gray-500">{animal.age}1 years old</span>
              <button
                onClick={() => removeAnimal(index)}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                🗑
              </button>
            </li>
          ))}
        </ul>

        {/* Add New Animal Form */}
        <h3 className="text-2xl text-gray-800 mb-4">Add a New Animal</h3>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Animal Name"
            value={newAnimal.name}
            onChange={handleInputChange}
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="species"
            placeholder="Species"
            value={newAnimal.species}
            onChange={handleInputChange}
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newAnimal.age}
            onChange={handleInputChange}
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="text-center">
          <button
            onClick={addAnimal}
            className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all transform hover:scale-105"
          >
            Add Animal
          </button>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="bg-white p-6 w-full max-w-4xl rounded-lg shadow-lg mt-4">
        <h3 className="text-2xl text-gray-800 mb-4">Chat with the Zoo Bot</h3>
        <div className="overflow-y-auto h-[300px] mb-4 p-4 bg-gray-50 rounded-md shadow-inner">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <p
                className={`inline-block max-w-[70%] p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            value={userMessage}
            onChange={handleChatInput}
            placeholder="Type a message..."
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleChatSubmit}
            className="bg-green-500 text-white p-3 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ZooSimulator;
