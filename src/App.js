import React from 'react';
import logo from './logo.svg';
import './App.css';
import MYFirstChart from './Components/MyFirstChart';
import BarChart from './Components/BarChart';
import PolarChart from './Components/PolarChart';

function App() {
  return (
    <div className="App">
      <MYFirstChart></MYFirstChart>
      <BarChart></BarChart>
      <PolarChart></PolarChart>
    </div>
  );
}

export default App;
