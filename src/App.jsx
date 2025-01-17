import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';

const App = () => {
  console.log('Rendering App component'); // Проверка загрузки компонента App
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