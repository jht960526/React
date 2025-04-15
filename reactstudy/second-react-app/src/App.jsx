import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const user = {
    name: "chelsu",
  };

  return(
    <div>
      <Child user = {user}/>
    </div>
  );
}

function Parent({user}){
  return (
    <div>
      <Child user={user}/>
    </div>
  );
}

function Child({user}){
  return (
    <div>{user.name}</div>
  );
}


export default App
