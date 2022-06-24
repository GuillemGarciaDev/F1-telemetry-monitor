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

function parseParticipantsDataPacket(packet) {
    return {
        "allParticipantsData": packet.m_participants
    }
}

exports.parseCarStatusPacket = parseCarStatusPacket
exports.parseLapStatusPacket = parseLapStatusPacket
exports.parseParticipantsDataPacket = parseParticipantsDataPacket