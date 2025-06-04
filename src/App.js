import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [reload, setReload] = useState(false);

  const triggerReload = () => {
    setReload(prev => !prev);
  };

  return (
    <div>
      <h1>TaskNest - Manage Your Tasks</h1>
      <TaskForm onTaskAdded={triggerReload} />
      <TaskList key={reload} />
    </div>
  );
}

export default App;

