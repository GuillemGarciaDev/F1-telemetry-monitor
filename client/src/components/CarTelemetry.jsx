import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { ERS_DEPLOY_MODE, ERS_DEPLOY_MODE_COLOR } from '../parsers/ersDeployMode'
import { TYRES } from '../parsers/tyres'
import LapChart from './LapChart'
import TyreDamageChart from './TyreDamageChart'

const socket = io.connect('http://localhost:5050')

const CarTelemetry = ({selectedCar}) => {

    const [speed, setSpeed] = useState(null)
    const [throttle, setThrottle] = useState(0.5)
    const [brake, setBrake] = useState(0.2)
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

    const [tyresAgeLaps, setTyresAgeLaps] = useState(null)
    const [fuelRemainingLaps, setFuelRemainingLaps] = useState(null)
    const [ersDeployMode, setErsDeployMode] = useState(null)
    
    useEffect(() => {
        
        socket.on('carTelemetry', (data) => {
            setSpeed(data[selectedCar].speed)
            setThrottle(data[selectedCar].throttle)
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
        socket.on('carStatus', (data) => {
            setTyresAgeLaps(data[selectedCar].tyresAgeLaps)
            setFuelRemainingLaps(data[selectedCar].fuelRemainingLaps)
            setErsDeployMode(data[selectedCar].ersDeployMode)
        })
    }, [socket, selectedCar])

    return (
        <div class='flex flex-row w-full h-full border-solid border-4 border-white rounded-md'>
            <div class='h-full flex flex-col w-1/3 p-2'>
                <p class='text-lg my-2'>Driver status</p>
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
                            {Math.floor(lapTime /60000)}.{((lapTime % 60000)/1000).toFixed(0)}.{lapTime%1000}
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
                            Sector 1
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
                            Sector 2
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
                            Pit Stops
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {numPitStops}
                        </p>
                    </div>
                </div>
                <br/>
                </div>
            <div class='h-full flex flex-col w-1/3 p-2'>
                <p class='my-2 text-lg'>Car status</p>
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
                    <div class='flex flex-row w-1/2 items-center'>
                    <div class="w-full bg-[#4A4A53] rounded-full h-2.5">
                        <div class="bg-[#55FF52] h-2.5 rounded-full" style={{width: throttle*100 + '%'}}></div>
                    </div>
                    </div>
                </div>
                <div class='flex flex-row'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Brake
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2 items-center'>
                        <div class="w-full bg-[#4A4A53] rounded-full h-2.5">
                            <div class="bg-[#E10600] h-2.5 rounded-full" style={{width: brake*100 + '%'}}></div>
                        </div>
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
                            {engineRPM} rpm
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
                        <p class={drs == 0 ? 'text-[#E10600]' : 'text-[#55FF52]'}>
                            {drs == 0 ? 'Off' : 'Active'}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Tyres Age Lap
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {tyresAgeLaps}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Fuel Remaining Laps
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {fuelRemainingLaps?.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            ERS Deploy Mode
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p class={'text-[' + ERS_DEPLOY_MODE_COLOR[ersDeployMode] + ']'}>
                            {ERS_DEPLOY_MODE[ersDeployMode]}
                        </p>
                    </div>
                </div>
            </div>
            <div class='h-full flex flex-col w-1/3 p-2'>
                <p class='my-2 text-lg'>Lap time</p>
                <LapChart selectedCar={selectedCar}/>
                <p class='my-2 text-lg'>Tyre damage</p>
                <TyreDamageChart selectedCar={selectedCar}/>
            </div>
        </div>
    )
}

export default CarTelemetry