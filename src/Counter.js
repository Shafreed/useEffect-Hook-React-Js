import React, { useEffect, useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0)
const [name,setName]=useState('Shafs')

useEffect(()=>{
    console.log('Mounting');
},[])

const increment=()=>{
    setCount(count+1)
}

const handleChange=()=>{
    setName('Shafreed')
}
  return (
    <div>
        <h1>Counter</h1>
            {count}
        <button onClick={increment}>Increment</button>
        <button onClick={handleChange}>Change Name</button>
        {name}
    </div>
  )
}

export default Counter