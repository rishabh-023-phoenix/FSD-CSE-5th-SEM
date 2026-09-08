/* eslint-disable no-unused-vars */
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ICard from './components/ICard'
import './App.css'

function App() {

  return (
    <div style={{border:'2px solid black',width:'600px',height:'600px',textAlign:'centre'}}>
      <h2 style={{color:'red',display:'block',backgroundColor:'white'}}> ABES Engineering College</h2>
      <h3 style={{}}>Roll No: 2400320100902</h3>
      <h3 style={{}}>Name: Rishabh Kumar </h3>
      <h3 style={{}}>Branch: CSE</h3>
      <h3 style={{}}>Section:24</h3>
      <h3 style={{}}>Skills: C++ Python JavaScript React MachineLearning</h3>

    <ICard/>
    </div>
  )
}

export default App
