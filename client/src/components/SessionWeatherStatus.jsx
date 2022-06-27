import React from 'react'
import {BsFillSunFill} from 'react-icons/bs'

const SessionWeatherStatus = () => {

    return (
        <div class='flex flex-col p-2 font-f1Bold text-white'>
            <p class='text-lg my-2'>
                Session Weather
            </p>
            <div class='flex flex-col items-center justify-center border-solid border-4 border-white rounded-md w-full p-2'>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-col w-1/2'>
                        <p>
                        Current Weather<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <BsFillSunFill class='w-6 h-6 text-white mr-2'/>
                        <p>
                            Sunny
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <p>
                        Forecast
                        <span class='font-f1Regular'>:</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SessionWeatherStatus