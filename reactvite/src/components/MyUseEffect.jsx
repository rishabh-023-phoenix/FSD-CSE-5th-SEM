/* eslint-disable no-unused-vars */

import React,{useEffect,useState} from 'react'

function MyUseEffect() {
    const[counter,setCounter]=useState(0);
    const[pointer,setPointer]=useState(100);

    function increaseCounter(){
        setCounter(counter+10);
    }

    function decreaseCounter(){
        setCounter(counter-10);
    }

    function decreasePointer(){
        setPointer(pointer-10);
    }

    useEffect(()=>{
        // console.log("hii..using useEffect hook");
        console.log("counter="+counter)
        // console.log("pointer="+pointer)
    },[pointer,counter])


  return (
    <div>


        <h2>Counter App:</h2>
        <h1 style={{color:'red'}}>Counter Value={counter}</h1>
        <h1 style={{color:'green'}}>Pointer Value={pointer}</h1>


        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>
        <button onClick={decreasePointer}>Decrease Pointer</button>
    </div>
  )
}

export default MyUseEffect