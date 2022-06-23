import React from 'react'
import { TeamParser } from '../parsers/team'
import { DRIVERS } from '../parsers/driver'
import { TYRES } from '../parsers/tyres'

const tp = new TeamParser()

const ClassificationRow = ({position, teamId, driverId, lapTime, tyreCompound, bestTime}) => {



    return (
        <div class="flex flex-row border-solid border-[#4A4A53] border-y-2 justify-center items-center">
            <div class="w-7 h-7 mx-1">
                <p class="text-white text-md  text-center font-f1Bold">
                    {position}
                </p>
            </div>
            <div class="w-7 h-7 mx-1">
                <img class="w-full h-full" src={tp.parseTeamIdWithImage(teamId)} alt='team photo' />
            </div>
            <div class="w-10 h-7 mx-2">
                <p class="text-white text-md text-center font-f1Bold">
                    {DRIVERS[driverId].abbreviation}
                </p>
            </div>
            {position == 1 ? <div class="w-20 mx-3">
                <p class="text-white text-sm font-f1Regular text-start">
                    {Math.floor(lapTime /60000)}.{((lapTime % 60000)/1000).toFixed(0)}.{lapTime%1000}
                </p>
            </div> : 
            <div class="w-20 mx-3">
                <p class="text-white text-sm font-f1Regular text-start">
                    +{(((lapTime - bestTime) % 60000)/1000).toFixed(0)}.{(lapTime - bestTime)%1000}
                </p>
            </div>
            
            }
            <div class="w-5 h-5 mx-2">
                <img class="w-full h-full" src={TYRES[tyreCompound].image} alt='tyre photo'/>
            </div>
        </div>
    )
}

export default ClassificationRow