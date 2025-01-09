// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >

import React, {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
    // State to track whether the checkbox is checked
    const [addTaskIsEnabled, setAddTaskIsEnabled] = useState(false);

    // Event handler for checkbox toggle
    const handleCheckboxChange = (event) => {
        setAddTaskIsEnabled(event.target.checked);
    };
  return (
      <div>
          <div>
              <h1>Checkbox with State</h1>
              <label>
                  <input
                      type="checkbox"
                      checked={addTaskIsEnabled}
                      onChange={handleCheckboxChange}
                  />
                  Enable add task functionality
              </label>
              <p>addTaskIsEnabled: {addTaskIsEnabled ? 'ON' : 'OFF'}.</p>
          </div>
          <div>
              <nav>
                  <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link> | {addTaskIsEnabled && <Link to="/add-task">Add Task</Link>}
              </nav>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/tasks" element={<TaskList/>}/>
              <Route path="/add-task" element={<AddTask/>}/>
          </Routes>
          </div>
      </div>
  );
}

export default App;
