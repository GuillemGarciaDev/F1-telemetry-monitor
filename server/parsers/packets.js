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

function parseSessionDataPacket(packet) {
    return {
        "sessionData": packet
    }
}

function parseCarTelemetryPacket(packet) {
    return {
        "allCarTelemetry": packet.m_carTelemetryData
    }
}

function parseCarDamagePacket(packet) {
    return {
        "carDamage": packet.m_carDamageData
    }
}

exports.parseCarStatusPacket = parseCarStatusPacket
exports.parseLapStatusPacket = parseLapStatusPacket
exports.parseParticipantsDataPacket = parseParticipantsDataPacket
exports.parseSessionDataPacket = parseSessionDataPacket
exports.parseCarTelemetryPacket = parseCarTelemetryPacket
exports.parseCarDamagePacket = parseCarDamagePacket