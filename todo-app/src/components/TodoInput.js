import React from 'react';
import { useState } from 'react';
import { Button, TextInput, FluidForm } from '@carbon/react';



function TodoInput({ addTask }) {
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if(input.trim()) {
            addTask(input);
            setInput('');
        }
    };

    return  (
        <div className='task-input'>
            <FluidForm className='task-input'>
                <TextInput 
                id="task-input" 
                type="text" 
                value={input}
                labelText='New task'
                onChange={(e) => setInput(e.target.value)}
                />
            </FluidForm>
            <Button className='task-btn' onClick={handleAddTask}>Add Task</Button>
        </div>
    );
}

export default TodoInput;