import { WEATHER } from 'f1-2021-udp/build/src/constants'
import React, { useEffect, useState } from 'react'
import {BsFillSunFill, BsFillCloudSunFill, BsFillCloudFill, BsFillCloudRainFill, BsFillCloudRainHeavyFill, BsFillCloudLightningRainFill} from 'react-icons/bs'
import io from 'socket.io-client'


const icons = [<BsFillSunFill class='w-6 h-6 text-white mr-2'/>, <BsFillCloudSunFill class='w-6 h-6 text-white mr-2'/>, <BsFillCloudFill class='w-6 h-6 text-white mr-2'/>, <BsFillCloudRainFill class='w-6 h-6 text-white mr-2'/>, <BsFillCloudRainHeavyFill class='w-6 h-6 text-white mr-2'/> , <BsFillCloudLightningRainFill class='w-6 h-6 text-white mr-2'/>]
const socket = io.connect('http://localhost:5050')

const SessionWeatherStatus = () => {

    const [weather, setWeather] = useState(null)
    const [forecastAccuracy, setForecastAccuracy] = useState(null)

    useEffect(() => {

        socket.on('session', (data) => {
            setWeather(data.weather)
            setForecastAccuracy(data.forecastAccuracy)
        })
    }, [socket])

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
                        {icons[weather]}
                        <p>
                            {WEATHER[weather]}
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Forecast
                            <span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            {forecastAccuracy == 0 ? 'Perfect' : 'Approximate'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SessionWeatherStatus