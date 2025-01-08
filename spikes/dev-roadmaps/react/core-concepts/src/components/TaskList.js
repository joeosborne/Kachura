import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from '../store';

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    // Lifecycle Hook
    useEffect(() => {
        console.log('TaskList Mounted');
    }, []);

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
                        <button onClick={() => dispatch(toggleTask(task.id))}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
