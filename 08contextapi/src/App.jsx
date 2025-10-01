import './App.css'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './Usecontext/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
   <h1>ram kapadia</h1>
   <Login/>
   <Profile />
   </UserContextProvider>
  )
}

export default App
