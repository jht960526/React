import { useReducer, useRef, useState } from 'react'
import './App.css'
import { MyComponent, MyProvider } from './MyConponent';
import { ThemeComponent, ThemeProvider } from './Theme';

function App() {
  const [seconds, setSeconds] = useState(0);
  const timeRef = useRef(null);

  const handleStart = () => {
    if(timeRef.current) return;
    timeRef.current = setInterval(()=>{
     setSeconds((pre)=>pre + 1)
      },1000);
  };
  const handleEnd = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  return(
    <div>
      <h1>Timer: {seconds}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
    </div>
  );
}


export default App
