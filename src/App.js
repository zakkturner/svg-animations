import React, {useRef, useEffect } from 'react';


import './App.css';

import gsap from "gsap";


function App() {
  let path = useRef(null);
  
useEffect(()=>{
  gsap.to(path, {duration: 2, delay: 1, css:{stroke: 'red'} })

}, [])

  return (
    <div className="App">
     <svg height="300" width="300">

        <path d="M 10 10 H 90 V 90 H 10 L 10 10" ref={el => {path = el}} stroke="green" fill="transparent" strokeWidth="5"/>
    </svg>
    </div>
  );
}

export default App;
