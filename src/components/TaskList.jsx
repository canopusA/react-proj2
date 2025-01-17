import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter, searchQuery } = useSelector((state) => state);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'SHOW_COMPLETED') return task.completed;
    if (filter === 'SHOW_INCOMPLETE') return !task.completed;
    return true;
  }).filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <span>{task.title}</span>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          <Link to={`/${task.id}/edit`}><button>Edit</button></Link>
          <Link to={`/${task.id}`}><button>Details</button></Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;