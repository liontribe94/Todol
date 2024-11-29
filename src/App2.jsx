import React from "react";
import "./index.css";

const App2 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="cube-container perspective-[1200px]">
        <div className="cube animate-rotate">
          <div className="face bg-red-500 text-white text-2xl flex items-center justify-center absolute w-[200px] h-[200px] rotate-y-0 translate-z-[100px]">
            Front
          </div>
          <div className="face bg-blue-500 text-white text-2xl flex items-center justify-center absolute w-[200px] h-[200px] rotate-y-[180deg] translate-z-[100px]">
            Back
          </div>
          <div className="face bg-green-500 text-white text-2xl flex items-center justify-center absolute w-[200px] h-[200px] rotate-y-[-90deg] translate-z-[100px]">
            Left
          </div>
          <div className="face bg-yellow-500 text-white text-2xl flex items-center justify-center absolute w-[200px] h-[200px] rotate-y-[90deg] translate-z-[100px]">
            Right
          </div>
          <div className="face bg-purple-500 text-white text-2xl flex items-center justify-center absolute w-[200px] h-[200px] rotate-x-[90deg] translate-z-[100px]">
            Top
          </div>
          <div className="face bg-gray-500 text-white text-2xl flex items-center justify-center absolute w-[200px] h-[200px] rotate-x-[-90deg] translate-z-[100px]">
            Bottom
          </div>
        </div>
      </div>
    </div>
  );
};

export default App2;
