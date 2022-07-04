import React, { useEffect, useState } from 'react';
import lapStatus from '../data/race_status.json'
import classification from '../data/classification.json'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5050')


const LapTimeStatus = ({}) => {

    const [totalLap, setTotalLap] = useState(null)
    const [numLap, setNumLap] = useState(null)
    const [sessionType, setSessionType] = useState(null)
    const [sessionTimeLeft, setSessionTimeLeft] = useState(null)

    useEffect(() => {

        socket.on('session', (data) => {
            setSessionType(data.sessionType)
            if (data.sessionType == 10) {
                setTotalLap(data.totalLaps)
            } else {
                setSessionTimeLeft(data.sessionTimeLeft)
            }
        })
        socket.on('lapData', (data) => {
            setNumLap(data.filter(el => el.position == 1)[0].currentLapNum)
        })
    }, [socket])

    return (
        <div class='flex flex-col p-2'>
            <div class='flex flex-row items-center justify-center border-solid border-4 border-white rounded-md w-full h-20'>
                <p class='font-f1Bold text-white text-lg'>
                    {sessionType == 10 ? 
                        `${numLap}/${totalLap}` :
                        <span>{Math.trunc(sessionTimeLeft/60)}<span class='font-f1Regular'>:</span>{String(sessionTimeLeft%60).padStart(2, '0')}</span>
                    }
                </p>
            </div>
        </div>
        
    )
}

export default LapTimeStatus