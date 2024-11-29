import React, { useState } from 'react';
// import './App.css';  // If you want to add custom styles

const DragAndDropComponent = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleDragStart = (e) => {
    setDragging(true);
    e.dataTransfer.setData('text/plain', e.target.id); // Set data to transfer
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);

    // Get the position of the drop area relative to the window
    const dropZone = e.target.getBoundingClientRect();
    const offsetX = e.clientX - dropZone.left;
    const offsetY = e.clientY - dropZone.top;

    // Update the position of the dragged item
    setPosition({ top: offsetY - draggedElement.offsetHeight / 2, left: offsetX - draggedElement.offsetWidth / 2 });

    // Optional: If you want to show where the item is dropped, you can show an alert
    alert('Dropped at position: ' + JSON.stringify({ top: offsetY, left: offsetX }));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  return (
    <div
      className={`drop-zone ${dragging ? 'dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: '400px',
        height: '300px',
        border: '2px dashed #ccc',
        position: 'relative',
        marginTop: '50px',
        overflow: 'hidden',
      }}
    >
      <div
        id="drag-item"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          backgroundColor: 'skyblue',
          textAlign: 'center',
          lineHeight: '100px',
          cursor: 'move',
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        Drag me
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Drag and Drop Example</h1>
      <DragAndDropComponent />  {/* Drag and Drop Component */}
    </div>
  );
}

export default App;
