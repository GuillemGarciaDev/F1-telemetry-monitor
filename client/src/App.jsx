import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'
import ClassificationTable from './components/Classification'

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
    <div >
      <header>
        <ClassificationTable />
        {/* <p>
          Car status: {carStatus}
        </p>
        <p>
          Lap Status: {lapStatus}
        </p> */}
      </header>
    </div>
  )
}

export default App
