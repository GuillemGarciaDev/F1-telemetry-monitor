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

const options = {
    responsive: true,
}

const labels = ['0', '1', '2', '3', '4', '5', '6'];
export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Laps',
        data: labels.map(() => Math.random()),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Laps',
        data: labels.map(() => Math.random()),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


let counter = 0
const LapChart = ({selectedCar}) => {

    // const [laps, setLaps] = useState([])
    // const [time, setTime] = useState([])
    // const [lapCounter, setLapCounter] = useState(0)
    // useEffect(() => {
    //     socket.on('lapData', (data) => {
    //         let lastLap = data[selectedCar].lastLapTimeInMS
    //         console.log(time);
    //         console.log(laps);
    //         if (lastLap != 0) {
    //             if ((time.length > 0 && time[time.length - 1] != lastLap) || time.length == 0) {
    //                 let tmp_time = time
    //                 tmp_time.push(lastLap)
    //                 setTime(tmp_time)
    //                 counter = counter + 1
    //                 let tmp_laps = laps
    //                 tmp_laps.push((counter).toString())
    //                 setLaps(tmp_laps)
    //             }
    //         }
    //     })
    // }, [socket, selectedCar])

    return (
        <div class='flex flex-row w-full'>
            <Line 
                options={options}
                data={data}
            />
        </div>
        
    )
}

export default LapChart