import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import ReduxBasics from "./Basics/basics";
import HelloWorld from "./reduxExamples/1.Introduction/1.HelloWorld";
import PersonalDetails from "./reduxExamples/1.Introduction/2.DataTypes";
import JsonObjects from "./reduxExamples/1.Introduction/3.JSONObjects";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
export default function App(){
    return(
        <Provider store={store}>
            <div className="app">
                <BrowserRouter >
                    <div className="header">
                        <h1>Welcome to React Redux Tutorial</h1>
                        <nav className="top-nav-bar">
                            <ul style={{"padding":"0px"}}>
                                <li>
                                    <Link className="top-nav-bar-links" to="/react-redux-app">Home</Link>
                                </li>
                                <li>
                                    <a className="top-nav-bar-links">Basic Examples</a>
                                    <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                        <Link className="top-nav-dropdown-links" to="/hello-world">Strings</Link>
                                        <Link className="top-nav-dropdown-links" to="/personal-details">Objects</Link>
                                        <Link className="top-nav-dropdown-links" to="/array-of-objects">Array of Objects</Link>
                                    </div>
                                </li>
                                <li>
                                    <a className="top-nav-bar-links" href="javascript:void(0)">Advanced Examples</a>
                                    <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                        <Link className="top-nav-dropdown-links" to="/crud-operation">CRUD Operation</Link>
                                    </div>
                                </li>
                            </ul>
                        </nav>             
                    </div>
                    <div className="body">
                        <Routes>
                            <Route exact path="/react-redux-app" element={<ReduxBasics />}></Route>
                            <Route path="/hello-world" element={<HelloWorld/>}></Route>
                            <Route path="/personal-details" element={<PersonalDetails/>}></Route>
                            <Route path="/array-of-objects" element={<JsonObjects/>}></Route>
                            <Route path="/crud-operation" element={<EmployeeDetails/>}></Route>
                        </Routes>
                    </div> 
                </BrowserRouter>
            </div>
        </Provider>
        
    )
}