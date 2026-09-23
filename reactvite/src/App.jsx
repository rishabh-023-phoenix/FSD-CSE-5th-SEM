import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
// import ICardGallery from './ICardGallery'
// import ICard from './ICard'
import MyState from './components/MyState'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{border:'2px solid white',backgroundColor:'grey',textAlign:'center',height:'50vh',width:'50vw',margin:'auto'}}>
      <MyState/>
    </div>
  )
}

export default App