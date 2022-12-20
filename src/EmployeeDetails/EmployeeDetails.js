import React,{Component} from "react";
import "./styles/EmployeeDetails.css";
import AddEmployeeDetails from "./AddEmployeeDetails";


const employeeRecord=[{
    id:1,
    firstName:"Ponniah",
    lastName:"Kothandaraman",
    designation:"Senior Software Engineer",
    experience:"4 Years",
    imgPath:"https://previews.123rf.com/images/kadettmann/kadettmann1506/kadettmann150600029/41301639-passport-picture-of-a-cool-guy-in-a-blue-shirt.jpg"
},
{
    id:2,
    firstName:"Periyasamy",
    lastName:"ponniah",
    designation:"Software Engineer",
    experience:"2 Years",
    imgPath:"https://previews.123rf.com/images/kadettmann/kadettmann1506/kadettmann150600029/41301639-passport-picture-of-a-cool-guy-in-a-blue-shirt.jpg"
},{
    id:3,
    firstName:"Kothandaraman",
    lastName:"Gomathinayagam",
    designation:"Technical Lead",
    experience:"7 Years",
    imgPath:"https://previews.123rf.com/images/kadettmann/kadettmann1506/kadettmann150600029/41301639-passport-picture-of-a-cool-guy-in-a-blue-shirt.jpg"
},{
    id:4,
    firstName:"Selva Ganapathy",
    lastName:"Gomathinayagam",
    designation:"Lead",
    experience:"5 Years",
    imgPath:"https://previews.123rf.com/images/kadettmann/kadettmann1506/kadettmann150600029/41301639-passport-picture-of-a-cool-guy-in-a-blue-shirt.jpg"
}];

export default class EmployeeDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            employeeData:[],
            showPopup:false
        }
    }
    
    componentDidMount(){
        this.setState({employeeData:employeeRecord});
    }

    deleteRecord(e){
        let updatedArray=[];
        updatedArray=this.state.employeeData.filter(data=>data.id !==e);
        this.setState({employeeData:updatedArray});
    }

    showPopup(){
        this.setState({showPopup:true});
        console.log(this.state.employeeData.length);
    }

    AddNewEmployeeRecord(e){
        console.log(e);
        const newArray=e;
        const updatedEmployeeData=this.state.employeeData;
        updatedEmployeeData.push(newArray);
        this.setState({employeeData:updatedEmployeeData})
        this.setState({showPopup:false})
    }

    render(){
        const {employeeData}=this.state;
        return(
            <div>
                <div className="employee-details">
                    <div className="employee-details-header">Welcome to React Redux CRUD Operations</div>
                    <div className="employee-details-menus"><button className="employee-details-menus-button" onClick={this.showPopup.bind(this)}>Add Employee Details</button></div>
                    <div className="employee-details-table-section">
                        <table className="employee-details-table">
                            <thead>
                                <tr className="employee-details-table-head">
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Designation</th>
                                    <th>Experience</th>
                                    <th>Profile Photo</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeData.map(data=>
                                    <tr className="employee-details-table-body" key={data.id}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.experience}</td>
                                    <td><a className="employee-details-table-link" href={data.imgPath} target="_blank" rel="noreferrer">Show Image</a></td>
                                    <td className="employee-details-table-link" onClick={this.deleteRecord.bind(this,data.id)}>Delete</td>
                                </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>   
                {this.state.showPopup && <AddEmployeeDetails id={this.state.employeeData.length} AddNewEmployeeRecord={this.AddNewEmployeeRecord.bind(this)}/>} 
            </div>
                    
        )
    }
}