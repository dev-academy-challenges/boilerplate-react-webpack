import React, {useState, useEffect} from 'react'
import {getGreeting} from '../apiClient'

const App = () => {

  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
      })
  }, [count])

  return (
    <>
    {count}
    <h1>{greeting}</h1>
    <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
