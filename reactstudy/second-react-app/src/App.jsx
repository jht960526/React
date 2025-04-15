import { useReducer, useRef, useState } from 'react'
import './App.css'
import { MyComponent, MyProvider } from './MyConponent';
import { ThemeComponent, ThemeProvider } from './Theme';

function App() {
  const ref = useRef(0);
  console.log(ref.current);
  return(
    <div>
      App
    </div>
  );
}


export default App
