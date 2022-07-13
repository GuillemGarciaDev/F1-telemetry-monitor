import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import io from 'socket.io-client'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const socket = io.connect('http://localhost:5050')





let counter = 0

const LapChart = ({selectedCar}) => {

  
    
    const [labels, setLabels] = useState([])
    const [time, setTime] = useState([])
    const [lapCounter, setLapCounter] = useState(0)
    let options ={
      responsive: true,
    }
    useEffect(() => {
        socket.on('lapData', (data) => {
            let currentLap = data[selectedCar].currentLapNum
            let found = labels.find((el) => el == currentLap - 1)
            if (currentLap - 1 > 0 && found == undefined) {
                let tmp_labels = labels
                tmp_labels.push(currentLap - 1)
                setLabels(tmp_labels)
                let tmp_time = time
                tmp_time.push(data[selectedCar].lastLapTimeInMS)
                setTime(tmp_time)
                options = {
                  responsive: true,
                  scales: {
                    yAxis: {
                      min: Math.min(time)*0.6,
                      max: Math.max(time)*0.6
                    }
                  }
                }
            }
        })
    }, [socket, selectedCar])

    return (
        <div class='flex flex-col w-full'>
            <Line 
                options={options}
                data={{
                  labels,
                  datasets: [
                    {
                      fill: true,
                      label: 'Laps',
                      data: labels.map((el, index) => time[index]),
                      borderColor: 'rgb(53, 162, 235)',
                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                    
                  ],
                }}
            />
        </div>
        
    )
}

export default LapChart