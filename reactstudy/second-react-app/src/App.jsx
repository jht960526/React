import { useState } from 'react'
import './App.css'

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      State: {count}
      <button onClick = {()=>{
          // 0 > 1 > 2 > 3
          setCount(count + 1); // 1
          setCount(count + 1); // 1
          setCount(count + 1); // 1
        }}
        > 
        update
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const handleUpdate = () =>{
    setCount(count + 1);
  };
  return (
    <div>
      {/* State: {count}
      <button onClick={handleUpdate}>Update</button> */}
      <Counter/>
      </div>
  )
}

export default App
