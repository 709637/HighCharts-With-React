import React, {lazy, Suspense, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import Routes from './Router';

// function initializeReactGA() {
//   ReactGA.initialize('UA-167420173-1');
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }





function App() {

useEffect(()=>{  
  ReactGA.initialize('UA-167420173-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])

  return (
    <Routes/>
  );
}

export default App;
