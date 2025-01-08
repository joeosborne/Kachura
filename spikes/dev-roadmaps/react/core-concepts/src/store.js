import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Redux App', completed: true },
    ],
    reducers: {
        addTask(state, action) {
            state.push(action.payload);
        },
        toggleTask(state, action) {
            const task = state.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { addTask, toggleTask } = tasksSlice.actions;

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});

export default store;
