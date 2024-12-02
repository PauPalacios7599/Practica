import React, { useState } from 'react'
import ShowCount from './Components/ShowCount' // Asegúrate de que la ruta sea correcta
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='App'>
      <h1>Contador</h1>
      <ShowCount count={count} increment={increment} decrement={decrement} />
    </div>
  )
}

export default App
