import React from 'react'
import classification from '../data/classification.json' 
import ClassificationRow from './ClassificationRow'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5050')

const ClassificationTable = ({}) => {

    const bestTime = classification[0].lapTime

    const [carStatus, setCarStatus] = useState([])
    const [lapStatus, setLapStatus] = useState([])
    const [participantsStatus, setParticipantsStatus] = useState([])

    useEffect(() => {
        socket.on('carStatus', (data) => {
            setCarStatus(data)
        })
        socket.on('lapData', (data) => {
            data.sort((a, b) => {
                if (a.position < b.position) return -1
                else return 1
            })
            setLapStatus(data)
        }),
        socket.on('participants', (data) => {
            setParticipantsStatus(data)
        })
    }, [socket])

    return (
        <div class="flex flex-col py-2 px-2">
            <p class='text-lg text-white font-f1Bold my-2'>
                Classification
            </p>
            <div class="flex flex-col bg-[#252525] w-fit border-solid border-4 border-white rounded-md">
                {lapStatus.length > 0 ? lapStatus.map((el, index) => el.position != 0 ? <ClassificationRow key={index} bestTime={bestTime} position={el.position} teamId={participantsStatus[el.arrayIndex]?.teamId} driverId={participantsStatus[el.arrayIndex]?.driverId} lapTime={el.lapTime} tyreCompound={carStatus[el.arrayIndex]?.tyreCompound} /> : 
                null) : 
                <p class='text-lg text-white font-f1Bold text-center px-4 py-80'>
                    No available data to display
                </p>}
            </div>
        </div>
        
    )
}

export default ClassificationTable