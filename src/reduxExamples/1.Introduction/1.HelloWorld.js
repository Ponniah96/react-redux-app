import { useSelector,useDispatch } from "react-redux";
import { actionType } from "../../redux/actions/actions";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "../../App.css"
export default function HelloWorld(){
    const state = useSelector((state) => state);
    const stateValue=state.helloWorld
    const dispatch=useDispatch();
    const codeString = `
HelloWorld.js

import { useSelector,useDispatch } from "react-redux";
import { actionType } from "../../redux/actions/actions";
export default function HelloWorld(){
    const state = useSelector((state) => state);
    const stateValue=state.helloWorld
    const dispatch=useDispatch();
    return(
        <>
            <p>Welcome to Redux Basic Example</p>
            <p>While click below button, redux state are updated with the value hello world</p>
            <button onClick={()=>dispatch(actionType())} >Click Here to update Redux State</button>
            {stateValue.value !== ''?<p>Redux Store Value: <b>{stateValue.value}</b></p>:<p>Empty Redux State Value</p>}
        </>
    )
}

Store.js

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import Reducer from "./redux/reducers/reducers";
import Reducers1 from "./redux/reducers/reducers1";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const reducers=combineReducers({
    helloWorld:Reducer,
    personalDetails: Reducers1})
const store = createStore(reducers,composeEnhancers(applyMiddleware()));
// const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;

actions.js

import { HELLO_WORLD } from "../actionTypes/actionTypes";

const actionType=()=>{
    return{
        type: HELLO_WORLD
    }
}

export {actionType}

actionTypes.js

export const HELLO_WORLD="Hello World";

reducers.js

import { HELLO_WORLD } from "../actionTypes/actionTypes";

const InitialState={
    value: ""
};

const Reducer = (state=InitialState, action)=>{
    switch(action.type){
        case HELLO_WORLD:  return {...state, value:"Hello World"};
        default : return state;
    }
}

export default Reducer

    `
    const copyFunction=(buttonID, functionID)=>{
        var copyText = document.getElementById(functionID)
        navigator.clipboard.writeText(copyText.innerText);
        var buttonElement=document.getElementById(buttonID);
        buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
    }                    
    return(
        <>
            <div className="flex-body">
                <div className="flex-left-content">
                    <p>Welcome to Redux Basic Example</p>
                    <p>While click below button, redux state are updated with the value hello world</p>
                    <button onClick={()=>dispatch(actionType())} >Click Here to update Redux State</button>
                    {stateValue.value !== ''?<p>Redux Store Value: <b>{stateValue.value}</b></p>:<p>Empty Redux State Value</p>}
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="redux-intro"  onClick={()=>{copyFunction('redux-intro','redux-intro-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="redux-intro-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}