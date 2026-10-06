/* eslint-disable no-unused-vars */
import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import MyState from './components/MyState';
import ImageManipulation from './components/ImageManipulation';
import MyUseEffect from './components/MyUseEffect';

function App() {

  // Previous code
  const [count, setCount] = useState(0);

  // New code
  const name = "Rishabh Kumar";
  const collegeName = "ABES Engineering College";

  const [displayName, setDisplayName] = useState("ABC");
  const [displayCollege, setDisplayCollege] = useState("XYZ");

  return (
    <div
      style={{
        border: '2px solid white',
        backgroundColor: 'grey',
        textAlign: 'center',
        minHeight: '50vh',
        width: '50vw',
        margin: 'auto',
        padding: '20px'
      }}
    >

      {/* Previous Work */}
      <div style={{ marginBottom: '50px' }}>
        <h2>Previous Work</h2>

        <MyState />
      </div>


      {/* Present Work */}
      <div style={{ marginBottom: '50px' }}>
        <h2>Student Information</h2>

        <h2>Name: {displayName}</h2>
        <h2>College: {displayCollege}</h2>

        <button onClick={() => setDisplayName(name)}>
          Name
        </button>

        <button
          onClick={() => setDisplayCollege(collegeName)}
          style={{ marginLeft: '10px' }}
        >
          College Name
        </button>
      </div>


      <div>

        {/* <ImageManipulation /> */}

        {/* <MyUseEffect /> */}

      </div>

    </div>
  );
}

export default App;