import React , {useState, useEffect} from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const MAX_BAR_THICKNESS = 60

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const baseChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  onHover: (event, chartElement) => {
    if (chartElement.length !== 0) {
      event.native.target.style.cursor = 'pointer'
    } else event.native.target.style.cursor = 'default'
  },
  plugins: {
    legend: {
      position: 'bottom',
      display: true,
    },
    title: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 50,
    },
  },
  scales: {
    y: {
      type: 'linear',
      grace: '50%',
      ticks: {
        precision: 0,
      },
    },
    x: {
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

const Chart = ({
  type,
  datasets,
  labels,
  chart
}) => {
  const [options, setOptions] = useState(baseChartOptions)
  useEffect(() => {
    let optionsChart
    if (type === 'bar') {
      optionsChart = {
        ...baseChartOptions,
        maxBarThickness: MAX_BAR_THICKNESS,
        plugins: {
          ...baseChartOptions.plugins,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }
    } else if (type === 'line') {
      optionsChart = {
        ...baseChartOptions,
        plugins: {
          ...baseChartOptions.plugins,
          tooltip: {
            interaction: {
              mode: 'x',
              axis: 'y',
              intersect: false,
            },
          },
        },
        scales: {
          ...baseChartOptions.scales,
          y: {
            ...baseChartOptions.scales.y,
            stepSize: 5,
            beginAtZero: true,
          },
        },
      }
    }
    setOptions(optionsChart)
  }, [type])
  if(labels.length == 0){
    return <h2>
      You must choose duration and types
    </h2>
  }
  return type === 'bar' ? (
    <Bar 
      options={options} 
      data={{
        labels: [...labels],
        datasets: [
          {
            label: chart === 'numberPosts' ? 'Number of Posts' : 'Number of Seens',
            data: [...datasets.data],
            borderColor: chart === 'numberPosts' ? 'rgba(255, 99, 132)' : 'rgb(53, 162, 235)',
            backgroundColor: chart === 'numberPosts' ? 'rgba(255, 99, 132, 0.5)' : 'rgb(53, 162, 235, 0.5)',
          },
        ]
      }} 
    />
  ) : (
    <Line 
      options={options} 
      data={{ 
        labels: [...labels],
        datasets: [
          {
            label: 'Number of Posts',
            data: [...datasets.data],
            borderColor: chart === 'numberPosts' ? 'rgba(255, 99, 132)' : 'rgb(53, 162, 235)',
            backgroundColor:chart === 'numberPosts' ? 'rgba(255, 99, 132, 0.5)' : 'rgb(53, 162, 235, 0.5)',
          },
        ]
      }} 
    />
  )
}

export default Chart