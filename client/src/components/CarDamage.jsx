import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5050')


const CarDamage = ({selectedCar}) => {

    const [tyresWear, setTyresWear] = useState(null)
    const [brakesDamage, setBrakesDamage] = useState(null)
    const [frontLeftWingDamage, setFrontLeftWingDamage] = useState(null)
    const [frontRightWingDamage, setFrontRightWingDamage]= useState(null)
    const [rearWingDamage, setRearWingDamage] = useState(null)
    const [floorDamage, setFloorDamage] = useState(null)
    const [diffuserDamage, setDiffuserDamage] = useState(null)
    const [gearBoxDamage, setGearBoxDamage] = useState(null)
    const [engineDamage, setEngineDamage] = useState(null)

    useEffect(() => {

        socket.on("carDamage", (data) => {
            setTyresWear(data[selectedCar].tyresWear)
            setBrakesDamage(data[selectedCar].brakesDamage)
            setFrontLeftWingDamage(data[selectedCar].frontLeftWingDamage)
            setFrontRightWingDamage(data[selectedCar].frontRightWingDamage)
            setRearWingDamage(data[selectedCar].rearWingDamage)
            setFloorDamage(data[selectedCar].floorDamage)
            setDiffuserDamage(data[selectedCar].diffuserDamage)
            setGearBoxDamage(data[selectedCar].GearBoxDamage)
            setEngineDamage(data[selectedCar].engineDamage)
        })

    }, [socket, selectedCar])

    return (
        <div class='flex flex-col w-full'>
            <p class='text-lg my-2'>
                Car Damage
            </p>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Tyres Wear<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {tyresWear}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Brakes<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {brakesDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Front Left Wing<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {frontLeftWingDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Front Right Wing<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {frontRightWingDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Rear Wing<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {rearWingDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Floor<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {floorDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Diffuser<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {diffuserDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Gear Box<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {gearBoxDamage}
                    </p>
                </div>
            </div>
            <div class='flex flex-row w-full'>
                <div class='flex flex-row w-1/2'>
                    <p>
                        Engine<span class='font-f1Regular'>:</span>
                    </p>
                </div>
                <div class='flex flex-row w-1/2'>
                    <p>
                        {engineDamage}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarDamage