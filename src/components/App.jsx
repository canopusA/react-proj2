import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDetails from './TaskDetails';
import EditTask from './EditTask';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main">
          <h1>Task Manager</h1>
          <SearchBar />
          <FilterButtons />
          <TaskForm />
          <TaskList />
        </div>
        <div className="details">
          <Routes>
            <Route path="/:taskId" element={<TaskDetails />} />
            <Route path="/:taskId/edit" element={<EditTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;