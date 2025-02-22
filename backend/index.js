const express = require('express');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');

const useruserRouter = require('./routes/User.Routes');
const taskuserRouter = require('./routes/Tasks.routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(cors());
app.use(express.json());


io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });


  socket.on('taskUpdate', (updatedTask) => {
    socket.broadcast.emit('taskUpdate', updatedTask);
  });
});


app.use('/api/users',useruserRouter);
app.use('/api/tasks', taskuserRouter);

const PORT =5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

