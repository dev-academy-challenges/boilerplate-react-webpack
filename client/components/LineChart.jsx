import React from 'react'
// import Chart from 'chart.js'
import { Bar, Line, Pie } from 'react-chartjs-2'

// // var myChart = new Chart(ctx, {...})
// // var ctx = document.getElementById('myChart')

class LineChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
          }
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ]
      }
    } 
}

  render () {
    return (
      <React.Fragment>
        <div className="chart">
          CHART COMPONENT
          <Line
            data={this.state.chartData}
            options={{
              maintainAspectRatio: false
            }} />
        </div>
      </React.Fragment>
    )
  }
}

export default LineChart
