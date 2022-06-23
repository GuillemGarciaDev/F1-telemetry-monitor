const express = require('express')
const F1TelemetryClient = require('f1-2021-udp')
const { Server } = require('socket.io')
const cors = require('cors')
const http = require('http')
const { PACKETS } = require('./constants/packets')
const { parseCarStatusPacket, parseLapStatusPacket } = require('./parsers/packets')

/* Init server configuration */
const app = express()
app.use(cors())
const PORT = 5050
const DEBUG = true
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(`[ ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} : ${ new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ] ✅ Client connected!`)
})
io.on('disconnect', () => {
    console.log(`[ ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} : ${ new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ] ❌ Client disconnected!`);
})

/* Init F1 Connection configuration */
const client = new F1TelemetryClient.F1TelemetryClient();


/* Client info send functions */
function sendPacket(type, packet) {
    io.emit(type, packet)
}

/* F1 Websocket connections */
client.on(PACKETS.lapData, (data) => {
    if (DEBUG) console.log(data)
    let packet = parseLapStatusPacket(data)
    console.log(packet);
    sendPacket(PACKETS.lapData, packet)
})

client.on(PACKETS.carStatus, (data) => {
    if (DEBUG) console.log(data)
    let packet = parseCarStatusPacket(data)
    console.log(packet);
    sendPacket(PACKETS.carStatus, packet)
})

/* Start F1 Connection */
client.start()

/* Server Routes */
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/* Server Start */ 

server.listen(PORT, () => {
    console.log(`F1 Telemetry Client started listening on port ${PORT}`)
})

