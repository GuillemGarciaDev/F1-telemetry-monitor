import React from 'react';
import lapStatus from '../data/race_status.json'
import classification from '../data/classification.json'

const LapTimeStatus = (props) => {

    return (
        <div class='flex flex-col p-2'>
            <div class='flex flex-row items-center justify-center border-solid border-4 border-white rounded-md w-full h-20'>
                <p class='font-f1Bold text-white text-lg'>
                    {lapStatus.sessionType == 10 ? 
                        `${classification.filter(el => el.position == 1)[0].currentLapNum}/${lapStatus.totalLaps}` :
                        <span>{Math.trunc(lapStatus.sessionTimeLeft/60)}<span class='font-f1Regular'>:</span>{String(lapStatus.sessionTimeLeft%60).padStart(2, '0')}</span>
                    }
                </p>
            </div>
        </div>
        
    )
}

export default LapTimeStatus