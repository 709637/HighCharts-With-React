import React, {lazy, Suspense, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MYFirstChart from './Components/MyFirstChart';
import BarChart from './Components/BarChart';
import PolarChart from './Components/PolarChart';
import Users from './Components/User';
import About from './Components/About';
import Home from './Components/Home';
import {BrowserRouter as router, Route, Switch, Link, Router} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import Memohook from './Components/Memo';
import ComingSoon from './Components/ModalWithTimer';
import ScatterChart from './Components/ScatterChart';
import ReactGA from 'react-ga';

// function initializeReactGA() {
//   ReactGA.initialize('UA-167420173-1');
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }

const LazyLoad = lazy(()=> import ('./Components/LazyLoadEx'));

const newHistory = createBrowserHistory();

function App() {

useEffect(()=>{  
  ReactGA.initialize('UA-167420173-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
},[])

  return (
    <Router history={newHistory}>
    <div className="App">
      <header className="App-header">
        <ul className="flexDisplay">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={
              {
                pathname:"/about",
                state :{
                  user : "vipul"
                }
              }
              }>About</Link>
          </li>
          <li>
            <Link to="/user/John/Heyden">Users</Link>
          </li>
          <li>
            <Link to="/Memo">Memo</Link>
          </li>
          <li>
            <Link to="/polarChart">Polar Chart</Link>
          </li>
          <li>
            <Link to="/columnChart">Line Chart</Link>
          </li>
          <li>
            <Link to="/barChart">Bar Chart</Link>
          </li>
          <li>
            <Link to="/scatterChart">Scatter Chart</Link>
          </li>
          <li>
            <Link to="/lazyComp">Lazy Component</Link>
          </li>
          <li>
            <Link to="/comingsoon">Modal</Link>
          </li>
        </ul>
        <div  className="dynamicGraph">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>          
          <Route exact path="/user/:firstname/:lastname" component={Users}></Route>
          <Route exact path="/memo" component={Memohook}></Route>
          <Route exact path="/polarChart" component={PolarChart}></Route>
          <Route exact path="/barChart" component={BarChart}></Route>          
          <Route exact path="/scatterChart" component={ScatterChart}></Route>
          <Route exact path="/comingsoon" component={ComingSoon}></Route>
          <Route exact path="/columnChart" component={MYFirstChart}></Route>
          <Route exact path="/lazyComp" render={props => ( <Suspense fallback={<div>Loading...</div>}>
            <LazyLoad {...props} />
            </Suspense>)}>
          </Route>
        </Switch>
        </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
