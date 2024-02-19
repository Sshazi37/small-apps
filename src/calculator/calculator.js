import React, { useState } from 'react'

export default function Calculator() {

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [value, setValue] = useState('');
    


  return (
    <>
    <h1 className="text-3xl font-bold underline m-5">Calculator App</h1>

    <div>
        <input type='number' className="placeholder-shown:border-black-500 border-2 rounded w-16 m-3 p-1" placeholder="000" onChange={((e) => setValueA(e.target.value) )}/>
        <input type='number' className="placeholder-shown:border-black-500 border-2 rounded w-16 m-3 p-1" placeholder="000" onChange={((e) => setValueB(e.target.value) )}/>

        <button className="text-white bg-green-500 px-2 focus:outline-none hover:bg-green-800 rounded ml-2" onClick={()=>setValue(parseFloat(valueA) + parseFloat(valueB))}>+</button>
        <button className="text-white bg-red-500 px-2 focus:outline-none hover:bg-red-800 rounded ml-2" onClick={()=>setValue(parseFloat(valueA) - parseFloat(valueB))}>-</button>
        <button className="text-white bg-blue-500 px-2 focus:outline-none hover:bg-blue-800 rounded ml-2" onClick={()=>setValue(parseFloat(valueA) / parseFloat(valueB))}>/</button>
        <button className="text-white bg-yellow-500 px-2 focus:outline-none hover:bg-yellow-800 rounded ml-2" onClick={()=>setValue(parseFloat(valueA) * parseFloat(valueB))}>x</button>
    </div>

    <div>
       calculation : {value}
    </div>

</>
  )
}
