import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const getInitialTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const changeTaskDoneById = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );

    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <h1>Listado de Compras</h1>

      <NewTaskForm addTask={addTask} />

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} changeTaskDoneById={changeTaskDoneById} />
      ) : (
        <p>No has has agregado nada todavía</p>
      )}
    </>
  );
}

export default App;
