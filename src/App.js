import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
     

  } 
  useEffect( ()=>{
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
     <Device name="phone" steps={ steps} price="13500"/> 
       
    </div>
  );
}

export default App;
