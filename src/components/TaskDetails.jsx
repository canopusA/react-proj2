import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TaskDetails = () => {
  const { taskId } = useParams();
  const task = useSelector((state) => state.tasks.find((t) => t.id === parseInt(taskId, 10)));

  if (!task) return <div>Task not found</div>;

  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetails;