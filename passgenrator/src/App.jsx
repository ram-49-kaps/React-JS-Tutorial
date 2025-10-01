import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length , setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const[pass , setPass] = useState("")

const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*()_+=-[]{}:<>.,/?|~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char)
    } 
    setPass(password)
    
  },[length,number,char,setPass])

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() => {
    passGen()
  },[length,number,char,passGen])

  return (
    <div className="w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className="text-white text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type='text'
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
        </button>

      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items -center gap-x-1">
          <input type="range" 
          min = {6}
          max = {100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex items -center gap-x-1">
          <input type="checkbox" 
          defaultChecked = {number}
          id="numberinput"
          onChange={() => {
            setNumber((prev) => !prev);
          }}
          />
          <label htmlFor="numberinput">Numbers</label>
        </div>
        <div className="flex items -center gap-x-1">
          <input type="checkbox" 
          defaultChecked= {char}
          id="charInput"
          onChange={() => {
            setChar((prev) => !prev);
          }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
