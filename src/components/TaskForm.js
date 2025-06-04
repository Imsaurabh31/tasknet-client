import React, { useState } from 'react';
import { addTask } from '../api/api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    const newTask = {
      title,
      due_date: dueDate,
      completed: false,
    };

    await addTask(newTask);
    onTaskAdded();
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

