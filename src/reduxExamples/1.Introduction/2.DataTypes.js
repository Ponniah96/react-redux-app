import { useSelector, useDispatch } from "react-redux";
import { personalDetails } from "../../redux/actions/actions1";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "../../App.css";
export default function PersonalDetails(){
    const state = useSelector((state) => state);
    const stateValue=state.personalDetails;
    const dispatch=useDispatch();
    const codeString =`
Datatypes.js

import { useSelector, useDispatch } from "react-redux";
import { personalDetails } from "../../redux/actions/actions1";
export default function PersonalDetails(){
    const state = useSelector((state) => state);
    const stateValue=state.personalDetails;
    const dispatch=useDispatch();
    return(
        <>
          <p>My Peronsal Details</p>
          <p>Click below button to display my basic details</p>
          <button onClick={()=>{dispatch(personalDetails())}}>Get Personal Details</button>
          {stateValue.value !==''?
            (<p> <span>Name         :<b> {stateValue.value.name}</b></span><br></br>
                <span>Age           :<b>  {stateValue.value.age}</b></span><br></br>
                <span>Role          :<b>   {stateValue.value.role}</b></span><br></br>
                <span>Working Status:<b>{stateValue.value.workingStatus?"Active":""}</b></span><br></br>
            </p>)
            :(<p>No data Found</p>)}
        </>
    )
}

store.js

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import Reducer from "./redux/reducers/reducers";
import Reducers1 from "./redux/reducers/reducers1";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const reducers=combineReducers({
    helloWorld:Reducer,
    personalDetails: Reducers1})
const store = createStore(reducers,composeEnhancers(applyMiddleware()));
export default store;

actions.js

import { PERSONAL_DETAILS } from "../actionTypes/actionTypes1";
export const personalDetails=()=>{
    return{
        type: PERSONAL_DETAILS
    }
}


actionTypes.js

export const PERSONAL_DETAILS="PERSONAL_DETAILS"

reducers.js

import { PERSONAL_DETAILS } from "../actionTypes/actionTypes1";
const initialState ={
    value:{}
}
const Reducers1=(state=initialState, actions)=>{
    switch(actions.type){
        case PERSONAL_DETAILS: return
        {...state, 
            value:
            {name:"Ponniah", age:26, role:"Senior Software Engineer",workingStatus:true }};
        default : return state;
    }
}

export default Reducers1
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
                    <p>My Peronsal Details</p>
                    <p>Click below button to display my basic details</p>
                    <button onClick={()=>{dispatch(personalDetails())}}>Get Personal Details</button>
                    {stateValue.value !==''?
                        (<p> <span>Name         :<b> {stateValue.value.name}</b></span><br></br>
                            <span>Age           :<b>  {stateValue.value.age}</b></span><br></br>
                            <span>Role          :<b>   {stateValue.value.role}</b></span><br></br>
                            <span>Working Status:<b>{stateValue.value.workingStatus?"Active":""}</b></span><br></br>
                        </p>)
                        :(<p>No data Found</p>)}
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