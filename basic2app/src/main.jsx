import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1>my App1</h1>
    </>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit here</a>
)

const createelement = React.createElement(
  'a',
  {href : 'https://google.com',target : '_blank'},
  'click here'
)
ReactDOM.createRoot(document.getElementById('root')).render(
   <App />
  
)
