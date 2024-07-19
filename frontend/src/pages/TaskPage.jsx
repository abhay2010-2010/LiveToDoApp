import React, { useEffect, useState } from 'react';
import { addTask, deleteTask, getTasks, updateTask } from '../services/api';
import TaskForm from '../components/TaskForm';
// import TaskForm from '../components/TaskForm';
 import TaskList from '../components/TaskList';
// import { getTasks, addTask, updateTask, deleteTask } from '../services';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const addedTask = await addTask(newTask);
      setTasks([...tasks, addedTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleUpdateTask = async (taskId, updatedTaskData) => {
    try {
      const updatedTask = await updateTask(taskId, updatedTaskData);
      const updatedTasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      const remainingTasks = tasks.filter(task => task.id !== taskId);
      setTasks(remainingTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
