import React,{Component} from "react";
import "./styles/EmployeeDetails.css";


export default class AddEmployeeDetails extends Component{
        constructor(props){
            super(props)     
            this.state={
                employeeRecord:{},
                id:"",
                firstName:"",
                lastName:"",
                designation:"",
                experience:"",
                imgPath:""
            }  
        }
        firstNameChange(e){
            this.setState({firstName:e.target.value});
        }
        lastNameChange(e){
            this.setState({lastName:e.target.value});
        }
        designation(e){
            this.setState({designation:e.target.value});
        }
        experience(e){
            this.setState({experience:e.target.value});
        }
        imgPath(e){
            this.setState({imgPath:e.target.value});
        }
        submit(e){
            e.preventDefault();
            let employeeId=this.props.id;
            let employeeData={};
            employeeData={
                id:employeeId +1,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                designation:this.state.designation,
                experience:this.state.experience,
                imgPath:this.state.imgPath
            }
            this.props.AddNewEmployeeRecord(employeeData);
            console.log(employeeData, this.state.firstName, this.state.lastName, this.state.designation, this.state.experience, this.state.imgPath)
        }
    render(){
        return(
            <div className="popup-section">
                <div className="popup-background"></div>
                <div className="popup-body">
                    <div className="popup-body-header">Create New Employee Record</div>
                    <form onSubmit={this.submit.bind(this)}>
                        <div className="row">
                            <label className="w-25">First Name</label>
                            <input className="w-75" type="text" onChange={this.firstNameChange.bind(this)} value={this.state.firstName} required/>
                        </div>
                        <div className="row">
                            <label className="w-25">Last Name</label>
                            <input className="w-75" type="text" onChange={this.lastNameChange.bind(this)} value={this.state.lastName} required/>
                        </div>
                        <div className="row">
                            <label className="w-25">Designation</label>
                            <input className="w-75" type="text" onChange={this.designation.bind(this)} value={this.state.designation} required/>
                        </div>
                        <div className="row">
                            <label className="w-25">Experience</label>
                            <input className="w-75" type="text" onChange={this.experience.bind(this)} value={this.state.experience} required/>
                        </div>
                        <div className="row">
                            <label className="w-25">Profile Picture</label>
                            <input className="w-75" type="url" onChange={this.imgPath.bind(this)} value={this.state.imgPath} required/>
                        </div>
                        <div className="row submit">
                            <input className="popup-body-submit" type="submit" onChange={this.submit.bind(this)} value="Submit"/>
                            <input className="popup-body-submit" type="button" onClick={this.props.closePopup} value="Close"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}