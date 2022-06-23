import React from 'react'
import classification from '../data/classification.json' 
import ClassificationRow from './ClassificationRow'

const ClassificationTable = (props) => {


    return (
        <div class="flex flex-col bg-[#252525]">
            {classification.map(el => <ClassificationRow position={el.position} teamId={el.teamId} driverId={el.driverId} lapTime={el.lapTime} tyreCompound={el.tyreCompound} />)}
        </div>
    )
}

export default ClassificationTable