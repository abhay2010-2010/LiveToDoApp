const express = require('express');
const Task = require('../models/Tasks');
const taskuRouter = express.Router();


let nextTaskId = 1; // Simulating auto-increment

// Get all tasks
taskuRouter.get('/', (req, res) => {
  const tasks = Task.getAllTasks();
  res.json(tasks);
});

// Add a task
taskuRouter.post('/', (req, res) => {
  const { title, description, status, userId } = req.body;
  const newTask = new Task(nextTaskId++, title, description, status, userId);
  Task.addTask(newTask);
  res.json(newTask);
});

// Update a task
taskuRouter.put('/:id', (req, res) => {
  const { title, description, status } = req.body;
  const taskId = parseInt(req.params.id);
  const taskToUpdate = Task.getTaskById(taskId);
  if (!taskToUpdate) {
    return res.status(404).json({ msg: 'Task not found' });
  }
  taskToUpdate.title = title || taskToUpdate.title;
  taskToUpdate.description = description || taskToUpdate.description;
  taskToUpdate.status = status || taskToUpdate.status;
  Task.updateTask(taskToUpdate);
  res.json(taskToUpdate);
});

// Delete a task
taskuRouter.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskToDelete = Task.getTaskById(taskId);
  if (!taskToDelete) {
    return res.status(404).json({ msg: 'Task not found' });
  }
  Task.deleteTask(taskId);
  res.json({ msg: 'Task removed' });
});

module.exports = taskuRouter;
