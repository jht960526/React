import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const detinations = [
  {
    place: "파리",
    destination: "에펠탑과 카페페가 있는 도시시",
  },
];
  return (
    <div>
      <Container>여행지역</Container>
      <Destination place={"파리"} destination={'에펠탑과 카페가 있는도시'}/>
    <Destination {...destination[0]}/>
    <Destination {...destination[0]}/>
    </div>
  );
}

export default App
