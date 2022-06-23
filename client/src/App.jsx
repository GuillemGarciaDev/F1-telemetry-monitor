import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'

const socket = io.connect('http://localhost:5050')

function App() {
  
  const [carStatus, setCarStatus] = useState(null)

  useEffect(() => {
    socket.on('carStatus', (data) => {
      setCarStatus(data)
    })
  }, [socket])
  

  return (
    <div className="App">
      <p>
        {carStatus}
      </p>
    </div>
  )
}

export default App
