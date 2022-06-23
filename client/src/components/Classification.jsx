import React from 'react'
import classification from '../data/classification.json' 
import ClassificationRow from './ClassificationRow'

const ClassificationTable = (props) => {

    const bestTime = classification[0].lapTime

    return (
        <div class="flex flex-col py-2 px-2">
            <p class='text-xl text-white font-bold my-2'>
                Classification
            </p>
            <div class="flex flex-col bg-[#252525] w-fit border-solid border-4 border-white rounded-md">
                {classification.map(el => <ClassificationRow bestTime={bestTime} position={el.position} teamId={el.teamId} driverId={el.driverId} lapTime={el.lapTime} tyreCompound={el.tyreCompound} />)}
            </div>
        </div>
        
    )
}

export default ClassificationTable