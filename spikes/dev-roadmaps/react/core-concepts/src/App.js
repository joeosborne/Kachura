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

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link> | <Link to="/add-task">Add Task</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </div>
  );
}

export default App;
