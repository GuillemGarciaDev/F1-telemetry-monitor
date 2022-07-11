import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import {ReactComponent as Monaco} from '../../public/assets/tracks/abudhabi.svg'
import {ReactComponent as Australia} from '../../public/assets/tracks/australia.svg'
import {ReactComponent as France} from '../../public/assets/tracks/france.svg'
import {ReactComponent as China} from '../../public/assets/tracks/china.svg'
import {ReactComponent as Bahrain} from '../../public/assets/tracks/bahrain.svg'
import {ReactComponent as Spain} from '../../public/assets/tracks/spain.svg'
import {ReactComponent as Canada} from '../../public/assets/tracks/canada.svg'
import {ReactComponent as GreatBritain} from '../../public/assets/tracks/greatbritain.svg'
import {ReactComponent as Hungary} from '../../public/assets/tracks/hungary.svg'
import {ReactComponent as Belgium} from '../../public/assets/tracks/belgium.svg'
import {ReactComponent as Japan} from '../../public/assets/tracks/japan.svg'
import {ReactComponent as Abudhabi} from '../../public/assets/tracks/abudhabi.svg'
import {ReactComponent as Usa} from '../../public/assets/tracks/usa.svg'
import {ReactComponent as Brazil} from '../../public/assets/tracks/brazil.svg'
import {ReactComponent as Austria} from '../../public/assets/tracks/austria.svg'
import {ReactComponent as Russia} from '../../public/assets/tracks/russia.svg'
import {ReactComponent as Vietnam} from '../../public/assets/tracks/vietnam.svg'
import {ReactComponent as Italy} from '../../public/assets/tracks/italy.svg'
import {ReactComponent as NetherLands} from '../../public/assets/tracks/netherlands.svg'
import {ReactComponent as Singapore} from '../../public/assets/tracks/singapore.svg'
import {ReactComponent as Mexico} from '../../public/assets/tracks/mexico.svg'
import {ReactComponent as Azerbaijan} from '../../public/assets/tracks/azerbaijan.svg'


const socket = io.connect('http://localhost:5050')

const DRAWS = [
    <Australia />,
    <France />,
    <China />,
    <Bahrain/>,
    <Spain/>,
    <Monaco/>,
    <Canada/>,
    <GreatBritain/>,
    null,
    <Hungary/>,
    <Belgium/>,
    <Italy/>,
    <Singapore/>,
    <Japan/>,
    <Abudhabi/>,
    <Usa/>,
    <Brazil/>,
    <Austria/>,
    <Russia/>,
    <Mexico/>,
    <Azerbaijan/>,
    null,
    null,
    null,
    null,
    <Vietnam/>,
    <NetherLands/>,
    null,
    null,
    null,
  ];

const Circuit = () => {

    const [trackId, setTrackId] = useState(null)

    useEffect(() => {

        socket.on('session', (data) => {
            setTrackId(data.trackId)
        })
    }, [socket])

    return (
        <div class='flex flex-col p-2 w-full h-full'>
            <p class='text-white font-f1Bold text-lg my-2'>
                Circuit
            </p>
            <div class='flex flex-col justify-center items-center w-full h-full  border-solid border-4 border-white rounded-md'>
                <div class='flex flex-row justify-center items-center w-1/2  my-4'>
                    {DRAWS[trackId] == null ? 
                    <p class='text-white text-center font-f1Bold text-lg my-2'>
                        No circuit available
                    </p> : 
                    DRAWS[trackId]  
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Circuit