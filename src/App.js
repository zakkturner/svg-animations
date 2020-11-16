import React, {useRef, useEffect } from 'react';


import './App.css';

import gsap from "gsap";


function App() {
  let path = useRef(null);
  let topLeft = useRef(null);
  let topRight = useRef(null);
  let right = useRef(null);
  let bottomRight = useRef(null);
  let bottomLeft = useRef(null);
  let left = useRef(null);
  let center = useRef(null);
  let tl = gsap.timeline({repeat: -1});
  
useEffect(()=>{
  let length = path.getTotalLength();
  console.log(length)
  gsap.set(path, {strokeDasharray: length})
  gsap.fromTo(path, 3, {strokeDashoffset:length}, {strokeDashoffset:0})
  tl.fromTo(center, .2,   {  css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
  .fromTo(topLeft, .2, {  css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
  .fromTo(topRight, .2, {  css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
  .fromTo(right, .2, { css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
  .fromTo(bottomRight, .2, {  css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
  .fromTo(bottomLeft, .2, {  css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
  .fromTo(left, .2, {  css:{ fill: 'black' }, ease: 'power3.inOut' }, {css:{fill: 'white'}})
}, [])

  return (
    <div className="App">
     <svg height="300" width="300">

        <path d="M 10 10 H 90 V 90 H 10  L 10 10" ref={el => {path = el}} stroke="green" fill="transparent" strokeWidth="5"/>
    </svg>

    <svg height="500" width="500" style={{background: "black"}}>

      {/* Center */}
    <svg x="200" y="200" ref={el=>{center = el}}>
      <polygon points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg> 
    
    {/* top left */}
    <svg x="155" y="120" ref={el=>{topLeft = el}}>
      <polygon points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg>

    {/* top right */}
    <svg x="245" y="120" ref={el=>{topRight = el}}>
      <polygon points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg>
    {/* right */}
    <svg x="290" y="200" ref={el=>{right = el}}>
      <polygon points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg>
    {/* bottom right */}
    <svg x="245" y="280" ref={el=>{bottomRight = el}}>
      <polygon points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg>
    {/* bottom left */}
    <svg x="155" y="280" ref={el=>{bottomLeft = el}}>
      <polygon points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg>
    {/* left */}
    <svg x="110" y="200" ref={el=>{left = el}}>
      <polygon  points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.00000000000001 49.99999999999999,0 93.30127018922194,25.000000000000018" />
    </svg>
    </svg>
    </div>
  );
}

export default App;
