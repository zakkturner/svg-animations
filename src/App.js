import React, {useRef, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import gsap, {drawSVG} from "gsap";


function App() {
  let path = useRef(null);
  
useEffect(()=>{
  gsap.to(path, {duration: 2, delay: 1, css:{stroke: 'red'} })

}, [])

  return (
    <div className="App">
     <svg height="300" width="300">

     {/* <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/> */}
      {/* <polygon ref={el => {shape = el}} points="50 160  70 180  65 205  35 205  30 180"
      stroke="green" fill="transparent" strokeWidth="5"/> */}

<path d="M 10 10 H 90 V 90 H 10 L 10 10" ref={el => {path = el}} stroke="green" fill="transparent" strokeWidth="5"/>
    </svg>
    </div>
  );
}

export default App;
