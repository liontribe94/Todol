import React from 'react';
import './index.css'; // The CSS file we'll use for animation

const WalkingMan = () => {
  return (
    <div className="walking-man">
      <div className="body">
        <div className="head"></div>
        <div className="legs"></div>
        <div className="arms"></div>
      </div>
    </div>
  );
};

export default WalkingMan;
