import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

function TodoList({tasks, toggleTask, deleteTask}) {
    return (
        <ul className='tasks-list'>
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task}
                    index={index}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask} 
                />
            ))}
        </ul>
    );
}

export default TodoList;