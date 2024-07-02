import React from 'react';
import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Header, HeaderName } from '@carbon/react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) =>{
    setTasks([...tasks, {text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className='container'>
      <Header aria-label="To-Do List App">
        <HeaderName prefix="To-Do List">
          App
        </HeaderName>
      </Header>
      <TodoInput addTask={addTask}/>
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
