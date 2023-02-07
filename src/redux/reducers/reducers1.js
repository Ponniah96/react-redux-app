import { PERSONAL_DETAILS } from "../actionTypes/actionTypes1";
const initialState ={
    value:{}
}
const Reducers1=(state=initialState, actions)=>{
    switch(actions.type){
        case PERSONAL_DETAILS: return{...state, value:{name:"Ponniah", age:26, role:"Senior Software Engineer",workingStatus:true }};
        default : return state;
    }
}

export default Reducers1