import { useReducer, useRef, useState } from 'react'
import './App.css'
import { MyComponent, MyProvider } from './MyConponent';
import { ThemeComponent, ThemeProvider } from './Theme';
import React, { useEffect } from 'react';


function Basic(){
  useEffect(()=>{
    console.log("mount");
  },[]);
  return <div>Hello world</div>
}

function Update(){
  const [state,setState] = useState(0);
  useEffect(()=>{
    console.log("update",state);
  },[state]);

  return (
    <div>
      <h1>state: {state}</h1>
      <button onClick={()=>setState((pre)=>pre+1)}>Click</button>
    </div>
  );
}

function App() {
  
  return(
    <div>
      <Basic/>
      <Update/>
    </div>
  );
}

export default App;
