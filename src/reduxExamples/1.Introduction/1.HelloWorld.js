import { useSelector,useDispatch } from "react-redux";
import { actionType } from "../../redux/actions/actions";
export default function HelloWorld(){
    const state = useSelector((state) => state);
    const stateValue=state.helloWorld
    const dispatch=useDispatch();
    console.log(state);
    return(
        <>
            <p>Welcome to Redux Basic Example</p>
            <p>While click below button, redux state are updated with the value hello world</p>
            <button onClick={()=>dispatch(actionType())} >Click Here to update Redux State</button>
            {stateValue.value !== ''?<p>Redux Store Value: <b>{stateValue.value}</b></p>:<p>Empty Redux State Value</p>}
        </>
    )
}