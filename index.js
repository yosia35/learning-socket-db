const express = require('express');
const socketIo = require('socket.io');
const cors = require('cors')
const http = require('http');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server, {
    transports: ['websocket'],
    cors: {
        origin: "http://localhost:5173", // sesuaikan dengan asal frontend kamu
        methods: ["GET", "POST"]
    }
});

app.set('io', io);

app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', sensorRoutes);

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));