import React,{useState,useContext} from 'react'
import UserContext from '../Usecontext/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const{setUser} = useContext(UserContext)

    const handlesubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'
         />
         <br />
         <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password'
         />
         <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Login
