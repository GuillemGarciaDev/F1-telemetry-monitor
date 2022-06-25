const express = require('express')
const F1TelemetryClient = require('f1-2021-udp')
const { Server } = require('socket.io')
const cors = require('cors')
const http = require('http')
const { PACKETS } = require('./constants/packets')
const { parseCarStatusPacket, parseLapStatusPacket, parseParticipantsDataPacket, parseSessionDataPacket } = require('./parsers/packets')
const { getTime } = require('./utils/log')

/* Init server configuration */
const app = express()
app.use(cors())
const PORT = 5050
const DEBUG = false
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(`[ ${getTime()} ] ✅ Client connected!`)
})
io.on('disconnect', () => {
    console.log(`[ ${getTime()} ] ❌ Client disconnected!`);
})

/* Init F1 Connection configuration */
const client = new F1TelemetryClient.F1TelemetryClient({address: '0.0.0.0'});


/* Client info send functions */
function sendPacket(type, packet) {
    let data = []
    switch (type) {
        case PACKETS.carStatus:
            packet.allCarStatus.map((el) => data.push({"tyreCompound": el.m_visualTyreCompound}))
            break
        case PACKETS.lapData:
            packet.allDriversLapData.map((el, index) => data.push({"position": el.m_carPosition, "lapTime": el.m_currentLapTimeInMS, "arrayIndex": index, "currentLapNum": el.m_currentLapNum}))
            break
        case PACKETS.participants:
            packet.allParticipantsData.map((el) => data.push({"driverId": el.m_driverId, "teamId": el.m_teamId}))
            break
        case PACKETS.session:
            data = {
                "totalLaps": packet.sessionData.m_totalLaps,
                "sessionTimeLeft": packet.sessionData.m_sessionTimeLeft
            }
        default:
            break
    }
    io.emit(type, data)
    console.log(`[ ${getTime()} ] 💬 Sending ${type} packet`)
}

/* F1 Websocket connections */
client.on(PACKETS.lapData, (data) => {
    if (DEBUG) console.log(data)
    let packet = parseLapStatusPacket(data)
    //console.log(packet)
    sendPacket(PACKETS.lapData, packet)
})

client.on(PACKETS.carStatus, (data) => {
    if (DEBUG) console.log(data)
    let packet = parseCarStatusPacket(data)
    //console.log(packet)
    sendPacket(PACKETS.carStatus, packet)
})

client.on(PACKETS.participants, (data) => {
    if (DEBUG) console.log(data)
    let packet = parseParticipantsDataPacket(data)
    //console.log(packet)
    sendPacket(PACKETS.participants, packet)
})

client.on(PACKETS.session, (data) => {
    if (DEBUG) console.log(data)
    let packet = parseSessionDataPacket(data)
    //console.log(packet)
    sendPacket(PACKETS.session, packet)
}) 

/* Start F1 Connection */
client.start()

/* Server Routes */
app.get('/', (req, res) => {
    res.send('Welcome to F1 telemetry Monitor')
})

/* Server Start */ 

server.listen(PORT, () => {
    console.log(`F1 Telemetry Client started listening on port ${PORT}`)
})

