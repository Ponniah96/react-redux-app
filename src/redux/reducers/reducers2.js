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