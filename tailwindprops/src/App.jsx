import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    username : 'Ram',
    age : 25
  }

  return (
    <>
    <h1 className='bg-gray-400 p-4'>React js</h1>
    <Card username='Ram' btnText = 'submit'/>
    </>
  )
}

export default App
