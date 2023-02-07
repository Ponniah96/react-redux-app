import React, { useEffect } from "react";
import EmployeeDetails from "../EmployeeDetails/EmployeeDetails";
import actionSyntax from "../images/actionSyntax.PNG";
import ReducerSyntax from "../images/reducerSyntax.PNG";
import storeSyntax from "../images/storeSyntax.PNG";
import dispatchSyntax from "../images/dispatchSyntax.PNG";
import selectorSyntax from  "../images/selectorSyntax.PNG";
import reduxFlowDiagram from "../images/ReduxDataFlowDiagram.gif";
import mapStatetoProps from "../images/mapStatetoProps.PNG";
import mapDispatchtoProps from "../images/mapDispatchtoProps.PNG";
import mapDispatchtoPropsFunction from "../images/mapDispatchtoPropsFunction.PNG";
import bindActionCreators from "../images/bindActionCreators.PNG"

export default function ReduxBasics(){

    useEffect(()=>{

        // const bindFunctions= bindActionCreators=()=>{{increment(),decrement()}, dispatch}

    },[])
    return(
        <>
            <h1>Welcome to Redux Tutorial</h1>
            <h3>Redux Introduction</h3>
            <dl>
                <dt><b>Definition</b></dt>
                <dd>A predictable state container for react apps.</dd>
                <br />
                <dt><b>Redux Terminology</b></dt>
                <dd><b>1.Actions</b>
                    <ul>
                        <li>It is an object which acts as an event to change state value</li>
                        <li>Syntax: <img src={actionSyntax} alt="actionsyntax"/></li>
                    </ul>
                </dd>
                <br></br>
                <dd><b>2.reducer</b>
                    <ul>
                        <li>It is method which is used to update stateValue .It Looks like AddEventistener</li>
                        <li>Syntax: <img src={ReducerSyntax} alt="reducersyntax"/></li>
                    </ul>
                </dd>
                <br></br>
                <dd><b>3.Store</b>
                    <ul>
                        <li>Like Name itself is used to store global state object and reducers</li>
                        <li>Syntax: <img src={storeSyntax} alt="storeSyntax"/></li>
                    </ul>
                </dd>
                <dd><b>4.Dispatch</b>
                    <ul>
                        <li>It is used to triggering actions whenever event changes in UI. It Hits store with new actions to change newStateValue.</li>
                        <li>Syntax: <img src={dispatchSyntax} alt="dispatchSyntax"/></li>
                    </ul>
                </dd>
                <dd><b>5.Selector</b>
                    <ul>
                        <li>It is used to store each piece of state value.</li>
                        <li>Syntax: <img src={selectorSyntax} alt="selecorSyntax"/></li>
                    </ul>
                </dd>
                <dd><b>6.States</b>
                    <ul>
                        <li>In Redux, State are read only variable.</li>
                        <li>State value should be immutable(Not changing values).</li>
                        <li>using Spread operator (...objName) we can take copy of exisiting state and update it to new state.</li>
                    </ul>
                </dd>
            </dl>
            <br></br>
            <h3>Simple Redux Flow Diagram</h3>
            <img height="500px" src={reduxFlowDiagram} alt="reduxFlowDiagram"/>
            <br></br>
            <h3>React Redux</h3>
            <dl>
                <dt><b>Definition</b></dt>
                <dd>React-Redux is the official binding of react by redux and it is maintained by redux team.</dd>
                <dd>It is mainly used for optimized performance and it creates react as good environment.</dd>
                <br></br>
                <dt><b>Provider</b></dt>
                <dd>Provider is used to storeredux data and get it back to react components..</dd>
                <br></br>
                <dt><b>connectAPI</b></dt>
                <dd>It is mainly used to connect react and redux.</dd>
                <dd><b>2 ways to use connectAPI</b>
                    <ul>
                        <li>mapStatetoProps()</li>
                        <li>mapDispatchtoProps()</li>
                    </ul>
                </dd>
                <dt><b>mapStatetoProps()</b></dt>
                <dd><b>1.Definition</b>
                    <ul>
                        <li>It is used to connect and extarct store data from redux to needed components</li>
                        <li>It will take entire store value for reach time using (store.getData())</li>
                        <li>Syntax: <img src={mapStatetoProps} alt="mapStatetoProps"></img></li>
                    </ul>
                </dd>
                <dd><b>2.Prerequisites</b>
                    <ul>
                        <li>Reshape data(get requires store data), should be syncronous, use selector functions to run fast and reduces slowness</li>
                    </ul>
                </dd>
                <dd><b>3.Arguments</b>
                    <ul>
                        <li>State: An object which is used to store data to needed components based on props</li>
                        <li>ownProps: It is optional method. It is kind of adding unique ID's.</li>
                    </ul>
                </dd>
                <dt><b>mapDispatchtoProps()</b></dt>
                <dd><b>1.Definition:</b> It is used to dispatch actions to store in redux.</dd>
                <dd><b>2.Syntax:</b> <img src={mapDispatchtoProps} alt="mapDispatchtoProps" /></dd>
                <dd><b>3.Two Types of Approach</b>
                    <ul>
                        <li><b>Use as a function:</b> We can customize as we want
                            <p>It is mainly used for customized functions based on user actions.</p>
                            <p>Syntax: <img src={mapDispatchtoPropsFunction} alt="mapDispatchtoPropsFunction"/></p>
                        </li>
                        <li><b>Use as an object: </b> Easy to initialze directly in objetcs.</li>
                    </ul>
                </dd>
                <dd><b>bindActionCreators</b>
                    <ul>
                        <li>It is used to connect all functions to simplify dispatch actions.</li>
                        <li>Syntax: <img src={bindActionCreators} alt="bindActionCreators"/></li>
                    </ul>
                </dd>
            </dl>
            <EmployeeDetails />
        </>
    )
}