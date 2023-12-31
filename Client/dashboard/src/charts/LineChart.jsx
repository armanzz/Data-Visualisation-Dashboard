import React from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({mainData}) => {

    let uniquePestle = [];
    mainData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: mainData.filter((i) => i.pestle === item).length
        }
    })

  return (
    <div style={{ height:'50vh'}}>
            <Line
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: "Projects ",
                            data: pestleCount.map(i=>i.count),
                            borderWidth: 1,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true
                        },
                    }
                }}
                height={300}
            />
        </div>
  )
}

export default LineChart