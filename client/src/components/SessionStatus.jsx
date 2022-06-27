import React from 'react'

const SessionStatus = () => {

    return (
        <div class='flex flex-col p-2 font-f1Bold text-white'>
            <p class='text-lg my-2'>
                Session
            </p>
            <div class='flex flex-col items-center justify-center border-solid border-4 border-white rounded-md w-full p-2'>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-col w-1/2'>
                        <p>
                            TRACK<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2 h-6'>
                        <img src='/assets/flags/monaco.png' alt='flag' />
                        <p class='ml-2'>
                            Monaco
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Session Type<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Race
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Session Time<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            ---
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Safety Car Status<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Green Flag
                        </p>
                    </div>
                </div>
                <div class='flex flex-row w-full my-2'>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            Track Temperature<span class='font-f1Regular'>:</span>
                        </p>
                    </div>
                    <div class='flex flex-row w-1/2'>
                        <p>
                            35ºC
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SessionStatus