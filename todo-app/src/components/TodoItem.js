import React from 'react';
import { Checkbox, Button } from '@carbon/react';

function TodoItem({task, index, toggleTask, deleteTask}) {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <Checkbox 
                id={`checkbox-${index}`}
                labelText={task.text}
                checked={task.completed}
                onChange={() => toggleTask(index)}
            />
            <Button kind='ghost' onClick={() => deleteTask(index)}>Delete task</Button>
        </li>
    );
}

export default TodoItem;