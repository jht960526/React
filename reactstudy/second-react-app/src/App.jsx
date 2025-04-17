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

function Update(props){
  const [state,setState] = useState(0);
  const ref = useRef(0);
  useEffect(()=>{
    console.log("update",state);
  },[ref.current]);

  return (
    <div>
      <h1>state: {state}</h1>
      <button onClick={()=>(ref.current += 1)}>Click</button>
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
