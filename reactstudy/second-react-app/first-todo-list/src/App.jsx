import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LayOut from './Layout'
import Title from './Title'
import Controls from './Controls'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

function App() {
  return (
    <div>
      <LayOut>
      <Title/>
      <Controls/>
        <TodoList/>
      </LayOut>
    </div>
    
  );
}

export default App
