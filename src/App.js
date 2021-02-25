import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['Nahid', 'Hassan', 'Bulbul']
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        {/* <Nayok  name={nayoks[0]}></Nayok>
        <Nayok  name={nayoks[1]}></Nayok>
        <Nayok  name={nayoks[2]}></Nayok> */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count +1);
return (
  <div>
    <button onClick={handleClick}>Add Movie</button>
    <h3>Number of movies: {count} </h3>
  </div>
)
 }
function Nayok(props){
  return (
    <div>
      <h1>Ami {props.name} </h1>
    </div>
  )
}
export default App;
