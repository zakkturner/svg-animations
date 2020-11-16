import React, {useRef, useEffect } from 'react';


import './App.css';

import gsap from "gsap";


function App() {
  let path = useRef(null);
  
useEffect(()=>{
  let length = path.getTotalLength();
  console.log(length)
  gsap.set(path, {strokeDasharray: length})
  gsap.fromTo(path, 3, {strokeDashoffset:length}, {strokeDashoffset:0})

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
