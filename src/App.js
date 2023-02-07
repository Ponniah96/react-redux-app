import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import ReduxBasics from "./Basics/basics";
import HelloWorld from "./reduxExamples/1.Introduction/1.HelloWorld";
import PersonalDetails from "./reduxExamples/1.Introduction/2.DataTypes";
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
                                    <a className="top-nav-bar-links" onClick={(e)=>e.preventDefault()}>Basic Examples</a>
                                    <div className="top-nav-dropdown"  style={{"display":"none"}}>
                                        <Link className="top-nav-dropdown-links" to="/hello-world">Hello World</Link>
                                        <Link className="top-nav-dropdown-links" to="/personal-details">Personal Details</Link>
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
                        </Routes>
                    </div> 
                </BrowserRouter>
            </div>
        </Provider>
        
    )
}