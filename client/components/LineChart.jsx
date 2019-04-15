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
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: '% Correct',
            data: [23, 33, 66, 40, 67]
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

  static defaultProps = {
    displayTitle: true,
    displayLegend: true, 
    legendPosition: 'left'
  }

  render () {
    return (
      <React.Fragment>
        <div className="chart">
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Matching Colours',
                fontSize: 30
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },
              maintainAspectRatio: false
            }} />
        </div>
      </React.Fragment>
    )
  }
}

export default LineChart
