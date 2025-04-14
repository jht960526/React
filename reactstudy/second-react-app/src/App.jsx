import { useState } from 'react'
import './App.css'



function App() {
  const product = {
    name : "99cm",
    price: 3000,
    category:{
      id: 1,
    },
  };
  const [list,setList] = useState([]);
  function handleCreate(input){
    setList((pre)=>pre.concat(input));
  }

  function handleUpdate(input){
    setList((pre)=>pre.map((i) => (i.id === input.id ? input : i)));
  }

  return (
    <div>App</div>
  )
}


export default App
