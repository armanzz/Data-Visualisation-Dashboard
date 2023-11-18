import React, { useEffect } from 'react'
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const PolarChart = ({ mainData}) => {

    let uniqueSectors = [];
    //using forEach because it doesn't return any array
    mainData.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    let uniqueTopics = [];
    mainData.forEach((i) => {
        if (!uniqueTopics.includes(i.topic) && i.topic !== "") {
            uniqueTopics.push(i.topic);
        }
    })

    let uniqueRegion = [];
    mainData.forEach((i) => {
        if (!uniqueRegion.includes(i.region) && i.region !== "") {
            uniqueRegion.push(i.region);
        }
    })

    let uniqueCountry = [];
    mainData.forEach((i) => {
        if (!uniqueCountry.includes(i.country) && i.country !== "") {
            uniqueCountry.push(i.country);
        }
    })

    let uniqueSource = [];
    mainData.forEach((i) => {
        if (!uniqueSource.includes(i.source) && i.source !== "") {
            uniqueSource.push(i.source);
        }
    })

    let uniquePestle = [];
    mainData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const label = ["Country", "Region", "Source", "Topic", "Sector", "Pestle"];

    return (
        <div style={{ height:'50vh', width: '45vw'}}>
            <PolarArea
                data={{
                    labels: label,
                    datasets: [
                        {
                            label: "Total: ",
                            data: [uniqueCountry.length, uniqueRegion.length, uniqueSource.length, uniqueTopics.length, uniqueSectors.length, uniquePestle.length],
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

export default PolarChart