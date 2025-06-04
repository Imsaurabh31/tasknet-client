import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await updateTask(task.id, { ...task, completed: !task.completed });
    fetchTasks();
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> | Due: {task.due_date} | 
            Status: {task.completed ? '✅ Done' : '❌ Not Done'} 
            <button onClick={() => toggleComplete(task)}>Toggle</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

