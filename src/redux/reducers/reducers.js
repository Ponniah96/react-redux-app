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

