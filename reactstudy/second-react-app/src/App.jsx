import { useReducer, useState } from 'react'
import './App.css'
import { MyComponent, MyProvider } from './MyConponent';

function App() {
  return(
    <div>
      <MyProvider>
        <MyComponent/>
      </MyProvider>
    </div>
  );
}


export default App
