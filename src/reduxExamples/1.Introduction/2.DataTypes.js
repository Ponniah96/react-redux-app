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