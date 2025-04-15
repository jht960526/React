import { useReducer, useState } from 'react'
import './App.css'
import { MyComponent, MyProvider } from './MyConponent';
import { ThemeComponent, ThemeProvider } from './Theme';

function App() {
  return(
    <div>
      <ThemeProvider>
        <ThemeComponent/>
      </ThemeProvider>
    </div>
  );
}


export default App
