function parseCarStatusPacket(packet) {
    return {
        "allCarStatus": packet.m_carStatusData
    }
}

function parseLapStatusPacket(packet) {
    return {
        "allDriversLapData": packet.m_lapData
    }
}

exports.parseCarStatusPacket = parseCarStatusPacket
exports.parseLapStatusPacket = parseLapStatusPacket