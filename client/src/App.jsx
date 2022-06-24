import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'
import ClassificationTable from './components/Classification'
import Logo from './components/Logo'

const socket = io.connect('http://localhost:5050')

function App() {
  
  
  const [carStatus, setCarStatus] = useState('Nothing yet')
  const [lapStatus, setLapStatus] = useState('Nothing yet')

  useEffect(() => {
    socket.on('carStatus', (data) => {
      setCarStatus(data)
    })
    socket.on('lapStatus', (data) => {
      setLapStatus(data)
    })
  }, [socket])
  

  return (
    <div class='w-screen h-screen flex flex-col bg-[#252525] p-2 border-solid border-white border-2 rounded-xl' >
        <div class='flex flex-row'>
          <Logo/>
        </div>
        <div class='flex flex-row'>
          <ClassificationTable />
        </div>
    </div>
  )
}

export default App
