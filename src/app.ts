import express from 'express';
import websocket from 'express-ws';

const app = express();

websocket(app);

const api = express.Router();

api.ws('/', (socket) => {
    socket.on('connection', () => {
        console.log('Connection Established');
    });
    socket.on('message', (data) => {
        console.log(`Received: ${data}`);
        socket.send(`${data}`);
    });
    socket.on('close', (code, reason) => {
        console.log(`WebSocket Session closed with ${code} (${reason})`);
    });
});

app.use('/ws', api);

export default app;
