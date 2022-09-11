import React, { lazy, Suspense } from 'react';
import MYFirstChart from './Components/Charts/MyFirstChart';
import BarChart from './Components/Charts/BarChart';
import PolarChart from './Components/Charts/PolarChart';
import Users from './Components/User';
import About from './Components/About';
import Home from './Components/Home';
import {  Route, Switch, Link, Router } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import Memohook from './Components/Memo';
import ReactPortalModal from './Components/ReactPortals/ModalWithReactPortal';
import ScatterChart from './Components/Charts/ScatterChart';
import ParentComp from './Components/CommonFunctionality/HigherOrderComponent/ParentForCommonFuncDisp';
import ParentComponent from './Components/CommonFunctionality/RenderProp/ParentForCommonFuncDisp';
import ComingSoonModal from './Components/ReactModalWithCountDownTimer/ModalCountDown';
import ComponentA from './Components/CommonFunctionality/ContextAPI/ComponentA';
import DrillDropDown from './Components/DrillDropDown';


const newHistory = createBrowserHistory();



const LazyLoad = lazy(() => import('./Components/LazyLoadEx'));

const Routes = () => {
    return (
        <Router history={newHistory}>
            <div className="App">
                <header className="App-header">
                    <div className='accordion flexDisplay' id="accordian1">Menu &nbsp;&nbsp;   
                    {/* <img   name="close" src={require(".\\icon\\move-down.png")} width="30px" height="30px" />
                    <img name="open" style={{ display : "none"}} src={require(".\\icon\\u-turn-to-left.png")} width="30px" height="30px" /> */}
                    </div>
                    <div className="flexDisplay" style={{ display : "none"}}>
                        <li className='displayinline'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to={
                                {
                                    pathname: "/about",
                                    state: {
                                        user: "vipul"
                                    }
                                }
                            }>About</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/user/John/Heyden">Users</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/Memo">Memo</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/polarChart">Polar Chart</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/columnChart">Line Chart</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/barChart">Bar Chart</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/scatterChart">Scatter Chart</Link>
                        </li>
                        </div>


                        <div className='accordion flexDisplay' id="accordian2">Advance &nbsp;&nbsp;   
                        {/* <img name="close1" src={require(".\\icon\\move-down.png")} width="30px" height="30px" />
                        <img name="open1" style={{ display : "none"}} src={require(".\\icon\\u-turn-to-left.png")} width="30px" height="30px" /> */}
                        </div>
                        <div className="flexDisplay" style={{ display : "none"}}>
                            
                        <li className=' displayinline '>
                            <Link to="/lazyComp">LazyComponent</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/ReactPortalModal">ReactPortalModal</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/CommomFunc">CommomFuncHigherOrder</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/ParentComponent">CommomFuncRenderProp</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/ComingSoonModal">ComingSoonModal</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/contexttest">ContextTest</Link>
                        </li>
                        <li className=' displayinline '>
                            <Link to="/DrillDropDown">DrillDropDown</Link>
                        </li>
                    </div>

                </header>

            </div>

            <div className="dynamicGraph">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/user/:firstname/:lastname" component={Users}></Route>
                    <Route exact path="/memo" component={Memohook}></Route>
                    <Route exact path="/polarChart" component={PolarChart}></Route>
                    <Route exact path="/barChart" component={BarChart}></Route>
                    <Route exact path="/scatterChart" component={ScatterChart}></Route>
                    <Route exact path="/ReactPortalModal" component={ReactPortalModal}></Route>
                    <Route exact path="/columnChart" component={MYFirstChart}></Route>
                    <Route exact path="/CommomFunc" component={ParentComp}></Route>
                    <Route exact path="/ParentComponent" component={ParentComponent}></Route>
                    <Route exact path="/ComingSoonModal" component={ComingSoonModal}></Route>
                    <Route exact path="/contexttest" component={ComponentA}></Route>                    
                    <Route exact path="/DrillDropDown" component={DrillDropDown}></Route>
                    <Route exact path="/lazyComp" render={props => (<Suspense fallback={<div>Loading...</div>}>
                        <LazyLoad {...props} />
                    </Suspense>)}>
                    </Route>
                    <Route render={()=> { return <h1>Not able to find your Route</h1>}}></Route>
                </Switch>
            </div>

        </Router>
    );
};


export default Routes;