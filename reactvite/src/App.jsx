/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import MyState from './components/MyState';
import ImageManipulation from './components/ImageManipulation';
import MyUseEffect from './components/MyUseEffect';
import FetchProducts from './components/FetchProducts';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Home from './components/Home';


function App() {

  // Previous code
  const [count, setCount] = useState(0);

  // New code
  const name = "Rishabh Kumar";
  const collegeName = "ABES Engineering College";

  const [displayName, setDisplayName] = useState("ABC");
  const [displayCollege, setDisplayCollege] = useState("XYZ");

  return (
    // <div
          
    // style={{
    //   border: '2px solid black',
    //   backgroundColor: 'cyan',
    //   color: 'black',
    //   textAlign: 'center',
    //   minHeight: '50vh',
    //   width: '50vw',
    //   margin: 'auto',
    //   padding: '20px'
    // }}

    // >

    //   {/* Previous Work */}
    //   <div style={{ marginBottom: '50px' }}>
    //     <h2>Previous Work</h2>

    //     <MyState />
    //   </div>


    //   {/* Present Work */}
    //   <div style={{ marginBottom: '50px' }}>
    //     <h2>Student Information</h2>

    //     <h2>Name: {displayName}</h2>
    //     <h2>College: {displayCollege}</h2>

    //     <button onClick={() => setDisplayName(name)}>
    //       Name
    //     </button>

    //     <button
    //       onClick={() => setDisplayCollege(collegeName)}
    //       style={{ marginLeft: '10px' }}
    //     >
    //       College Name
    //     </button>
    //   </div>


    //   <div>

    //     {/* <ImageManipulation /> */}

    //     {/* <MyUseEffect /> */}

    //     <FetchProducts/>

    //   </div>

    // </div>
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/register">Register</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;