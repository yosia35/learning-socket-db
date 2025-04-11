const { SensorData } = require("./models/index.js")

class SensorController {
    static async getAllSensorData(req, res, next) {
        try {
            let data = await SensorData.findAll()

            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }
    static async addSensorData(req, res, next) {
        try {
            const { temperature, humidity } = req.body
            await SensorData.create({
                temperature,
                humidity
            })
            res.status(201).json("Success creating sensor data")
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = SensorController