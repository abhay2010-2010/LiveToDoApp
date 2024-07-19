let tasks = [];

class Task {
  constructor(id, title, description, status, userId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
  }

  static addTask(task) {
    tasks.push(task);
  }

  static getTasksByUserId(userId) {
    return tasks.filter(task => task.userId === userId);
  }

  static getTaskById(id) {
    return tasks.find(task => task.id === id);
  }

  static updateTask(updatedTask) {
    tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
  }

  static deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
  }

  static getAllTasks() {
    return tasks;
  }
}

module.exports=Task
