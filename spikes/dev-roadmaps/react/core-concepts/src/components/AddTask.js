import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';
import { useNavigate } from 'react-router-dom';

function AddTask() {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            dispatch(
                addTask({ id: Date.now(), text: taskText.trim(), completed: false })
            );
            navigate('/tasks'); // Redirect to task list
        }
    };

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter a task"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTask;
