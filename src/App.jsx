import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <h1>Simo Add your name in the p tag below: </h1>
            <p></p>
      </div>
      <div>
            <h1>Massoud Add your name in the p tag below: </h1>
            <p></p>
      </div>
      <div>
            <h1>Akshat Add your name in the p tag below: </h1>
            <p></p>
      </div>
      <div>
            <h1>JC Add your name in the p tag below: </h1>
            <p></p>
      </div>
    </>
  )
}

export default App
