
import './App.css'
import CarTelemetryStatus from './components/CarTelemetryStatus'
import ClassificationTable from './components/Classification'
import LapTimeStatus from './components/LapTimeStatus'
import Logo from './components/Logo'
import SessionStatus from './components/SessionStatus'
import SessionWeatherStatus from './components/SessionWeatherStatus'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5050')

function App() {
  
  return (
    <div class='w-screen h-screen flex flex-col  bg-[#252525] border-solid border-white border-2 rounded-xl' >
        <div class='flex flex-row'>
          <Logo/>
        </div>
        <div class='flex flex-row'>
          <div class='flex flex-col '>
            <ClassificationTable socket={socket} />
            <LapTimeStatus socket={socket} />
          </div>
          <div class='flex flex-row w-9/12'>
            <CarTelemetryStatus/>
          </div>
          <div class='flex flex-col w-3/12'>
            <SessionStatus/>
            <SessionWeatherStatus/>
          </div>
        </div>

    </div>
  )
}

export default App
