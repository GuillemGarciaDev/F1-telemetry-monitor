import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5050')

const CarTelemetry = ({selectedCar}) => {

    const [speed, setSpeed] = useState(null)
    const [throttle, setThrottle] = useState(null)
    const [steer, setSteer] = useState(null)
    const [brake, setBrake] = useState(null)
    const [gear, setGear] = useState(null)
    const [engineRPM, setEngineRPM] = useState(null)
    const [drs, setDrs] = useState(null)

    const [position, setPosition] = useState(null)
    const [lapTime, setLapTime] = useState(null)
    const [sector1Time, setSector1Time] = useState(null)
    const [sector2Time, setSector2Time] = useState(null)
    const [penalties, setPenalties] = useState(null)
    const [warnings, setWarnings] = useState(null)
    const [sector, setSector] = useState(null)
    const [numPitStops, setNumPitStops] = useState(null)
    
    useEffect(() => {
        socket.on('carTelemetry', (data) => {
            console.log(data[0])
            setSpeed(data[selectedCar].speed)
            setThrottle(data[selectedCar].throttle)
            setSteer(data[selectedCar].steer)
            setBrake(data[selectedCar].brake)
            setGear(data[selectedCar].gear)
            setEngineRPM(data[selectedCar].engineRPM)
            setDrs(data[selectedCar].drs)
        })
        socket.on('lapData', (data) => {
            setPosition(data[selectedCar].position)
            setLapTime(data[selectedCar].lapTime)
            setSector1Time(data[selectedCar].sector1Time)
            setSector2Time(data[selectedCar].sector2Time)
            setPenalties(data[selectedCar].penalties)
            setWarnings(data[selectedCar].warnings)
            setSector(data[selectedCar].sector)
            setNumPitStops(data[selectedCar].numPitStops)
        })
    }, [socket, selectedCar])

    return (
        <div class='w-full h-full border-solid border-4 border-white rounded-md'>
                <div class='h-full flex flex-col'>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Speed
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {speed} KPH
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Throttle
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {throttle}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Steer
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {steer}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Brake
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {brake}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Gear
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {gear}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Engine RPM
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {engineRPM}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                DRS
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {drs}
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Position
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {position}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Lap Time
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {lapTime}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Sector 1 Time
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {sector1Time}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Sector 2 Time
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {sector2Time}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Penalties
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {penalties}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Warnings
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {warnings}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Current Sector
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {sector}
                            </p>
                        </div>
                    </div>
                    <div class='flex flex-row'>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                Number of Pit Stops
                            </p>
                        </div>
                        <div class='flex flex-row w-1/2'>
                            <p>
                                {numPitStops}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CarTelemetry