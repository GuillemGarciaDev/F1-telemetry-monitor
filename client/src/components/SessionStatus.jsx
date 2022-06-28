import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { SAFETY_CAR_STATUSES } from '../parsers/safetyCarStatuses'
import { SESSION_TYPES } from '../parsers/sessionType'
import {TRACKS} from '../parsers/track'
const socket = io.connect('http://localhost:5050')

const SessionStatus = () => {

    const [trackId, setTrackId] = useState(null)
    const [sessionType, setSessionType] = useState(null)
    const [safetyCarStatus, setSafetyCarStatus] = useState(null)
    const [sessionDuration, setSessionDuration] = useState(null)
    const [trackTemperature, setTrackTemperature] = useState(null)
    
    useEffect(() => {

        socket.on('session', (data) => {
            setTrackId(data.trackId)
            setSessionType(data.sessionType)
            setSafetyCarStatus(data.safetyCarStatus)
            setSessionDuration(data.sessionDuration)
            setTrackTemperature(data.trackTemperature)
        })
    }, [socket])

    return (
        <div class='flex flex-col p-2 font-f1Bold text-white'>
            <p class='text-lg my-2'>
                Session
            </p>
            <div class='flex flex-col items-center justify-center border-solid border-4 border-white rounded-md w-full p-2'>
                {trackId == null && sessionType == null && safetyCarStatus == null && sessionDuration == null && trackTemperature == null ? 
                <div class='flex flex-col items-center justify-center h-60 '>
                    <p>
                        No available data to display
                    </p> 
                </div>
                :
                <><div class='flex flex-row w-full my-2'>
                    <div class='flex flex-col w-1/2'>
                        <p>
                            TRACK<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2 h-6'>
                        <img src={TRACKS[trackId]?.flag} alt='flag' />
                        <p class='ml-2'>
                            {TRACKS[trackId]?.name}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Session Type<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {SESSION_TYPES[sessionType]}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Session Time<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                        {Math.trunc(sessionDuration/60)}<span class='font-f1Regular'>:</span>{String(sessionDuration%60).padStart(2, '0')}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Safety Car Status<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {SAFETY_CAR_STATUSES[safetyCarStatus]}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Track Temperature<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {trackTemperature}ºC
                        </p>
                    </div>
                </div></>}
            </div>
        </div>
    )
}

export default SessionStatus