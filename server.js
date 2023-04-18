import express from 'express';
import {
    Server
} from 'socket.io';
const expressApp = express();
expressApp.use(express.json())
expressApp.use('/', express.static('./'));
const httpServer = expressApp.listen(5050, () => {
    console.log(`http://localhost:5050/app`);
})
const io = new Server(httpServer, {
    path: '/real-time'
});
io.on('connection', (socket) => {
    socket.on('positions', (message) => {
        socket.broadcast.emit('display-positions', message);
    })
});