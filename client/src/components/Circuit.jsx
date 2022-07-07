import io from 'socket.io-client'
import {ReactComponent as Monaco} from '../../public/assets/tracks/usa.svg'

const socket = io.connect('http://localhost:5050')

const Circuit = () => {

    return (
        <div class='flex flex-col p-2 w-full h-full'>
            <p class='text-white font-f1Bold text-lg my-2'>
                Circuit
            </p>
            <div class='flex flex-col justify-center items-center w-full h-full  border-solid border-4 border-white rounded-md'>
                <div class='flex flex-row items-center w-1/2 my-4'>
                    <Monaco/>
                </div>
            </div>
        </div>
        
    )
}

export default Circuit