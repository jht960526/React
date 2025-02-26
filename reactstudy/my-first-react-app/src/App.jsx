import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function HelloWorld() {
  return (
    <>
    
    <h1 className="button">Hello World</h1>
      <h1>Hello World</h1>
    </>
      
    
    
  );
}

function Message(){
  const name = 'Alice';
  return (
    <input type="input" maxLength={5} style={{backgroundColor:"red"}}/>
  );
}


function App() {

  return (
    <>
      <div>
        <HelloWorld/>
        <helloWorld/>
          
        </div>
    </>
  );
}

export default App
