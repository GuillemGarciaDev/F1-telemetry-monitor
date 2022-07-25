import {useEffect, useState} from 'react'
import io from 'socket.io-client'
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
import { Line } from 'react-chartjs-2';

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

const PositionChart = ({selectedCar}) => {

    const [labels, setLabels] = useState([])
    const [position, setPosition] = useState([])
    const options = {
        responsive: true,
        scales: {
          yAxis: {
            min: 1,
            max: 20
          }
        }
      }
    useEffect(() => {

        socket.on('lapData', (data) => {
            let currentLap = data[selectedCar].currentLapNum
            let found = labels.find((el) => el == currentLap - 1)
            if (currentLap - 1 > 0 && found == undefined) {
                let tmp_labels = labels
                tmp_labels.push(currentLap - 1)
                setLabels(tmp_labels)
                let tmp_Position = position
                tmp_Position.push(20 - data[selectedCar].position)
                setPosition(tmp_Position)
                
            }

        })

    }, [socket, selectedCar])

    return (
        <div>
            <Line 
                options={options}
                data={{
                    labels,
                    datasets: [
                        {
                            fill: true,
                            label: 'Position',
                            data: labels.map((el, index) => position[index]),
                            borderColor: 'rgba(255, 206, 86)',
                            backgroundColor: 'rgba(255, 206, 86, 0.5)',
                        }
                    ]
                }}
            />
        </div>
    )
}

export default PositionChart