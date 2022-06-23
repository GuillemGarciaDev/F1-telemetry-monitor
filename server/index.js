const express = require('express')
const F1TelemetryClient = require('f1-2021-udp')

/* Init server configuration */
const app = express()
const port = 5050

/* Init F1 Connection configuration */
const client = new F1TelemetryClient.F1TelemetryClient();

/* F1 Websocket connections */
client.on('lapData', (data) => {
    console.log(data)
})

client.on('carStatus', (data) => {
    console.log(data)
})

/* Start F1 Connection */
client.start()

/* Server Routes */
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/* Server Start */ 

app.listen(port, () => {
    console.log(`F1 Telemetry Client started listening on port ${port}`)
})

