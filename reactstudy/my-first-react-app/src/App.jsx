import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from "./Item";
import Mailbox from './Mailbox';
import Fruits from './Fruits';

function App() {
const fruits = ["Apple"];
  return (
    <div>
      <Item isDone = {true}/>
      <Item isDone={false}/>
      <Mailbox unreadMessage={["h1"]}/>
      <Mailbox unreadMessage={[]}/>
     {fruits.length > 0 && <Fruits fruits={fruits}/>}
      
    </div>
  );
}

export default App


/*
<Fruits fruits={["Apple"]} />
<Fruits fruits={[]}/>
*/