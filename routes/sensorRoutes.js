const express = require('express');
const router = express.Router();
const SensorController = require('../controllers/sensor-controller');

router.get('/sensors', SensorController.getAllSensorData);
router.post('/sensors', SensorController.addSensorData);
router.delete('/sensors', SensorController.deleteAllSensor)

module.exports = router;