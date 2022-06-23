export function parseCarStatusPacket(packet) {
    return {
        "allCarStatus": packet.m_carStatusData
    }
}

export function parseLapStatusPacket(packet) {
    return {
        "allDriversLapData": packet.m_lapData
    }
}
