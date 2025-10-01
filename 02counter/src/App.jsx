import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5
  let [counter, setCounter] = useState(15)

const addValue = () =>{ 
  if(counter === 20){
    alert("You can't add more than 20")
  }else{
  counter = counter + 1
  setCounter(counter)
  }
}
const removeValue = () =>{
  if(counter === 0){
    alert("You can't remove more than 0")
  }else{
  counter = counter - 1
  setCounter(counter)  
  }
}
  return (
    <>
    <h1>shopZenith</h1>
    <h2>counter value :{counter}</h2>
    <button onClick ={addValue}>Add Value {counter}</button><br />
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>{counter}</p>
    </>
  )
}

export default App
