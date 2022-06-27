import React from 'react'

const CarTelemetryStatus = () => {

    return (
        <div class='flex flex-col p-2 w-full text-white font-f1Bold py-2 px-2'>
            <p class='my-2 text-lg'>
                Car Telemetry
            </p>
            <div class='w-full h-full border-solid border-4 border-white rounded-md'>
                <div class='h-full flex flex-col items-center justify-center'>
                    <p>
                        Selected Car Telemetry
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarTelemetryStatus