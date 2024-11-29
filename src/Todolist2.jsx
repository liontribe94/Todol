import React, { useState } from 'react';

function Todolist2() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();

      setTask(t => [
        ...t,
        { task: newTask, date: date, time: time, completed: false }
      ]);
      setNewTask(""); 
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("taskIndex", index.toString()); // Ensure it's a string
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e, index) => {
    const draggedTaskIndex = parseInt(e.dataTransfer.getData("taskIndex"), 10);

    const updatedTasks = [...task];
    const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
    updatedTasks.splice(index, 0, draggedTask);

    setTask(updatedTasks);
  }

  function toggleTaskCompletion(index) {
    setTask(t =>
      t.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-gray-600 h-[100vh] w-[700px] p-[50px]'>
        <h1 className='text-3xl text-white p-3 flex justify-center'>To-Do-List</h1>
        <div className='gap-2 flex justify-center pb-2'>
          <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} className='h-[50px] w-[300px] border-none'/>
          <button onClick={addTask} className='bg-green-500 h-[50px] w-[60px] rounded-md flex items-center justify-center'>
            <img src="plus-white.svg" className=' h-[30px]' />
          </button>
        </div>
        <ol className='flex flex-col gap-2'>
          {task.map((task, index) => (
            <div 
              key={index} 
              draggable 
              onDragStart={(e) => handleDragStart(e, index)} 
              onDragOver={handleDragOver} 
              onDrop={(e) => handleDrop(e, index)} 
              className='justify-between flex w-full gap-10 cursor-grab active:cursor-grabbing'>
              <span className={`text-2xl ${task.completed ? "line-through text-gray-400" : "text-green-500"}`}>
                <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} className='h-[20px] w-[40px]' />
                {task.task} <br />{task.date} {task.time}
              </span>
              <div className='flex gap-2 items-center'>
                <button className='h-[50px] w-[60px] bg-green-600 rounded-md text-3xl' onClick={() => deleteTask(index)}>🗑</button>
              </div>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todolist2;
