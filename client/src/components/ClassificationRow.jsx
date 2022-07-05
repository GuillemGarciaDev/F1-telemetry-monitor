import React from 'react'
import { TeamParser } from '../parsers/team'
import { DRIVERS } from '../parsers/driver'
import { TYRES } from '../parsers/tyres'

const tp = new TeamParser()

const ClassificationRow = (props) => {

    return (
        props.position > 0 ? 
        <div class="flex flex-row border-solid border-[#4A4A53] border-y-2 justify-center items-center">
            <div class="w-7 h-7 mx-1">
                <p class="text-white text-md  text-center font-f1Bold">
                    {props.position}
                </p>
            </div>
            <div class="w-7 h-7 mx-1">
                <img class="w-full h-full" src={tp.parseTeamIdWithImage(props.teamId)} alt='team photo' />
            </div>
            <div class="w-10 h-7 mx-2">
                <p class="text-white text-md text-center font-f1Bold">
                    {DRIVERS[props.driverId]?.abbreviation}
                </p>
            </div>
            {
                props.position != 1 ? props.lapTime != 0 ? 
                <div class="w-20 mx-3">
                    <p class="text-white text-sm font-f1Regular text-start">
                        {Math.floor(props.lapTime /60000)}.{((props.lapTime % 60000)/1000).toFixed(0)}.{props.lapTime%1000}
                    </p>
                </div> : 
                <div class="w-20 mx-3">
                    <p class="text-white text-sm font-f1Regular text-start">
                        No time
                    </p>
                </div>
                : 
                <div class="w-20 mx-3">
                    <p class="text-white text-sm font-f1Regular text-start">
                        Interval
                    </p>
                </div>
            }

            <div class="w-5 h-5 mx-2">
                <img class="w-full h-full" src={TYRES[props.tyreCompound]?.image} alt='tyre photo'/>
            </div>
        </div> : null
        
        
    )
}

export default ClassificationRow