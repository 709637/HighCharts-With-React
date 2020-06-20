import React, { lazy, Suspense } from 'react';
import MYFirstChart from './Components/Charts/MyFirstChart';
import BarChart from './Components/Charts/BarChart';
import PolarChart from './Components/Charts/PolarChart';
import Users from './Components/User';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter as router, Route, Switch, Link, Router } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import Memohook from './Components/Memo';
import ReactPortalModal from './Components/ReactPortals/ModalWithReactPortal';
import ScatterChart from './Components/Charts/ScatterChart';
import ParentComp from './Components/CommonFunctionality/HigherOrderComponent/ParentForCommonFuncDisp';
import ParentComponent from './Components/CommonFunctionality/RenderProp/ParentForCommonFuncDisp';
import ComingSoonModal from './Components/ReactModalWithCountDownTimer/ModalCountDown';
import ComponentA from './Components/CommonFunctionality/ContextAPI/ComponentA';

const newHistory = createBrowserHistory();

const LazyLoad = lazy(() => import('./Components/LazyLoadEx'));

const Routes = () => {
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
                                    pathname: "/about",
                                    state: {
                                        user: "vipul"
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
                        </ul>
                        <ul className="flexDisplay">
                        <li>
                            <Link to="/ReactPortalModal">ReactPortalModal</Link>
                        </li>
                        <li>
                            <Link to="/CommomFunc">CommomFuncHigherOrder</Link>
                        </li>
                        <li>
                            <Link to="/ParentComponent">CommomFuncRenderProp</Link>
                        </li>
                        <li>
                            <Link to="/ComingSoonModal">ComingSoonModal</Link>
                        </li>
                        <li>
                            <Link to="/contexttest">Context Test</Link>
                        </li>
                    </ul>

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
                    <Route exact path="/lazyComp" render={props => (<Suspense fallback={<div>Loading...</div>}>
                        <LazyLoad {...props} />
                    </Suspense>)}>
                    </Route>
                </Switch>
            </div>

        </Router>
    );
};

export default Routes;