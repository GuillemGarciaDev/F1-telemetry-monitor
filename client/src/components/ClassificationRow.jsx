import React from 'react'
import { TeamParser } from '../parsers/team'
import { DRIVERS } from '../parsers/driver'
import { TYRES } from '../parsers/tyres'

const tp = new TeamParser()

const ClassificationRow = ({position, teamId, driverId, lapTime, tyreCompound}) => {

    return (
        <div class="flex flex-row">
            <p class="text-white text-lg font-bold">
                {position}
            </p>
            <img class="w-7 h-7" src={tp.parseTeamIdWithImage(teamId)} alt='team photo' />
            <p class="text-white text-lg font-bold">
                {DRIVERS[driverId].abbreviation}
            </p>
            <p class="text-white text-lg font-normal">
                {Math.floor(lapTime /60000)}:{((lapTime % 60000)/1000).toFixed(0)}:{lapTime%1000}
            </p>
            <img class="w-7 h-7" src={TYRES[tyreCompound].image} alt='tyre photo'/>
        </div>
    )
}

export default ClassificationRow