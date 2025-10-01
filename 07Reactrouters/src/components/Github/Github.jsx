import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setData(data)
         })
    }, [])
    
  return (
    <div className='text-center mt-100 bg-red-950 p-2 text-3xl text-white'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github
