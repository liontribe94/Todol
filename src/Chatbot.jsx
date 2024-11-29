import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setLoading(true);
    setInput(''); // Clear the input field

    try {
      // Make API call to OpenAI
      const response = await axios.post(
        'https://api.openai.com/',
        {
          model: 'text-davinci-003',
          prompt: generatePrompt(userMessage.text),
          max_tokens: 150,
          n: 1,
          stop: ['\n'],
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer YOUR_OPENAI_API_KEY_HERE`,
            'Content-Type': 'application/json',
          },
        }
      );

      const aiMessage = { sender: 'ai', text: response.data.choices[0].text.trim() };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: "Sorry, I couldn't understand that." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const generatePrompt = (userMessage) => {
    return `The following is a conversation between a helpful assistant and a user:\nUser: ${userMessage}\nAssistant:`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">AI Chatbot</h1>
        <div className="messages overflow-auto mb-4 h-64 p-3 bg-gray-50 rounded-md">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs p-3 rounded-lg text-white ${msg.sender === 'user' ? 'bg-blue-500' : 'bg-green-500'}`}
              >
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-xs p-3 rounded-lg text-white bg-gray-400">
                <span>Loading...</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
