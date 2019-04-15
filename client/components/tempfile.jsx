// import React from 'react'
// import Chart from 'chart.js'

// const session = []
// const reducer = (accumulator, currentValue) => accumulator + currentValue


// class Inputs extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//         <button onClick={() => session.push(0)}
//           className='button'>Incorrect</button>
//         <button onClick={() => session.push(0)}
//           className='button'>Prompt</button>
//         <button onClick={() => session.push(1)}
//           className='button'>Correct</button>
//         <br></br><br></br>
//         <button onClick={() => console.log((session.reduce(reducer) / session.length))} className='button'>Done</button>
//       </React.Fragment>
//     )
//   }
// }

// export default Inputs
// // Need to have it so that + pushes a correct value to array
// // - and P push incorrect and prompt

// // Done button takes the array and reduced it into a % correct
// // % correct is then plotted on a graph

// // Ideally I then want to take a copy of the array that was made
// // perhaps a map, and then have that displayed if the user wants to

// // Going to start so that Incorrect and prompt only push 0 and correct pushes 1
// // for sake of ease with reduce.

// //How do I assign a new value to an array using onclick

// //Implement graph

// import React from 'react'
// // import Chart from 'chart.js'
// import { Bar } from 'chart.js'
// // var myChart = new Chart(ctx, {...})
// // var ctx = document.getElementById('myChart')

// class ChartComp extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       chartData: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [
//           {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3]
//           }
//         ],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ]
//       }
//     }
//   }

//   render () {
//     return (
//       <React.Fragment>
//         <h1>MIC TEST 1 2 1 2</h1>
//         <Bar
//           data={this.state.data}
//           options={{ maintainAspectRatio: false }} />
//       </React.Fragment>
//     )
//   }
// }

// export default ChartComp
// import React from 'react'
// import Inputs from './Inputs'
// import ChartComp from './ChartComp'
// import { Route } from 'react-router-dom'


// const App = () => {
//   return (
//     <React.Fragment>
//       <h1 className="header">Discrete Trial Data</h1>
//       <div className="content">
//         <Route path = '/'component={ChartComp} />
//         <Route path ='/' component={Inputs} />
//       </div>
//     </React.Fragment>
//   )
// }

// export default App


// import React from 'react'
// import Inputs from './Inputs'
// import ChartComp from './ChartComp'
// import { Route } from 'react-router-dom'


// const App = () => {
//   return (
//     <React.Fragment>
//       <h1 className="header">Discrete Trial Data</h1>
//       <div className="content">
//         <Route path = '/'component={ChartComp} />
//         <Route path ='/' component={Inputs} />
//       </div>
//     </React.Fragment>
//   )
// }

// export default App


// /* .button {
//   width: 30%;
//   float: left;
//   border: 1px solid black;
// } */

// .button {
//   display: inline-block;
//   padding: 15px 25px;
//   font-size: 24px;
//   cursor: pointer;npm 
//   text-align: center;
//   text-decoration: none;
//   outline: none;
//   color: #fff;
//   background-color: rgb(89, 10, 192);
//   border: none;
//   border-radius: 15px;
//   box-shadow: 0 9px #999;
// }

// .button:hover {background-color: #34135a}

// .button:active {
//   background-color: #ac4eeb;
//   box-shadow: 0 5px #666;
//   transform: translateY(4px);
// }
