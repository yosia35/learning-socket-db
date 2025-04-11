const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // sesuaikan dengan asal frontend kamu
        methods: ["GET", "POST"]
    }
});

app.set('io', io);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', sensorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));