import { useSelector, useDispatch } from "react-redux";
import { arrayOfObjects } from "../../redux/actions/actions2";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function JsonObjects(){
    const state=useSelector(state=>state);
    const stateValue=state.arrayOfObjects;
    const dispatch=useDispatch();
    const codeString=`
ActionType.js
export const ARRAY_OF_OBJECTS = "ARRAY_OF_OBJECTS";

Action.js
import { ARRAY_OF_OBJECTS } from "../actionTypes/actionTypes2";

export const arrayOfObjects=()=>{
    return(
        {
            type:ARRAY_OF_OBJECTS
        }
    )
}

Reducers.js
import { ARRAY_OF_OBJECTS } from "../actionTypes/actionTypes2";

const initialState={
    value:[]
}

var finalData=[];

const API= fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(data => finalData=data);


 const Reducers2 =(state=initialState, action) =>{
    switch(action.type){
        // case ARRAY_OF_OBJECTS : return {...state, value:[
        //     {
        //         id:1,
        //         name:"Ponniah",
        //         Company:"Prodapt Solutions",
        //         Role:"Associate Software Engineer"
        //     },
        //     {
        //         id:2,
        //         name:"Ponniah",
        //         Company:"i-exced technology solutions",
        //         Role:"Software Engineer"
        //     }
        // ]}
        case ARRAY_OF_OBJECTS : return { value:finalData}
        default : return state;
    }
}

export default Reducers2

React

import { useSelector, useDispatch } from "react-redux";
import { arrayOfObjects } from "../../redux/actions/actions2";
import "../../App.css";
export default function JsonObjects(){
    const state=useSelector(state=>state);
    const stateValue=state.arrayOfObjects;
    const dispatch=useDispatch();
    return(
        <>
            <h1>JSON Objects</h1>
            <button onClick={()=>{dispatch(arrayOfObjects())}}>Get JSON Details</button>
            <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                <thead>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>ID</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Title</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Body</th>
                    {/* <th style={{border:"1px solid",borderCollapse:"collapse"}}>Role</th> */}
                </thead>
                <tbody>
                    {stateValue.value.length > 0 ? stateValue.value.map(val=>{
                        return(
                            <tr>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.id}</td>
                                {/* <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.name}</td>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.Company}</td>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.Role}</td> */}
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.title}</td>
                                <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.body}</td>
                            </tr>
                        )
                    }):"No data found"}
                </tbody>
            </table>
        </>
    )
}

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
                    <h1>JSON Objects</h1>
                    <button onClick={()=>{dispatch(arrayOfObjects())}}>Get JSON Details</button>
                    <table style={{border:"1px solid",borderCollapse:"collapse"}}>
                        <thead>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>ID</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Title</th>
                            <th style={{border:"1px solid",borderCollapse:"collapse"}}>Body</th>
                            {/* <th style={{border:"1px solid",borderCollapse:"collapse"}}>Role</th> */}
                        </thead>
                        <tbody>
                            {stateValue.value.length > 0 ? stateValue.value.map(val=>{
                                return(
                                    <tr>
                                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.id}</td>
                                        {/* <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.name}</td>
                                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.Company}</td>
                                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.Role}</td> */}
                                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.title}</td>
                                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>{val.body}</td>
                                    </tr>
                                )
                            }):"No data found"}
                        </tbody>
                    </table>
                </div>
                <div className="flex-right-content">
                    <button className="copy-icon" id="redux-array-of-objects"  onClick={()=>{copyFunction('redux-array-of-objects','redux-array-of-objects-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                    <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="redux-array-of-objects-code" >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}
