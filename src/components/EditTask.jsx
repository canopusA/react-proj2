import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../redux/actions';

const EditTask = () => {
  const { taskId } = useParams();
  const task = useSelector((state) => state.tasks.find((t) => t.id === parseInt(taskId, 10)));
  const dispatch = useDispatch();

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: task.id, title, description }));
    window.location.href = '/';
  };

  if (!task) return <div>Task not found</div>;

  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTask;