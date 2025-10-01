import Tea from "./tea"
import ReactDOM from 'react-dom/client';
function App() {
  const username = "JohnDoe";

  return (
    <>
   <Tea/>
   <h1>Tea is ready {username}</h1>
   <p>Perfect</p>
   </>
  )
}

export default App
 