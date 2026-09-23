import React from 'react'
import fav from '../images/fav.png'

function ICard(props) {
  return (
    <div style={{ border: '10px solid black', width: '400px', backgroundColor: 'white', margin: '0 auto', height: '700px' }}>
      <h2>College:{props.college}</h2>
      <div>
        <img src={fav} height={200} width={200} alt="Student" />
      </div>
      <h2>Roll:{props.roll}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Branch:{props.branch}</h2>
    </div>
  )
}

export default ICard