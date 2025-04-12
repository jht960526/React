import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from "./Item";
import Mailbox from './Mailbox';
import Fruits from './Fruits';
import List, { FilteredList } from './List';

function App() {
  return (
    <div>
      <List/>
      <FilteredList/>
    </div>
  );
}

export default App


/*
<Fruits fruits={["Apple"]} />
<Fruits fruits={[]}/>
*/