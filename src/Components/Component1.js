import React from 'react';
import { event } from 'react-ga';
import Component2 from './Component2';

class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName : ""
        } 
    this.firstNamevar= "";
    this.lastNamevar = "";       
    } 
    

    handleSubmit = () =>
    {        
        this.setState({
            lastName : this.lastNamevar,
            firstName : this.firstNamevar
        }) 
    }

    handleOnChangeTextBox = (event) => {
        if(event.target.name === "firstName"){
            this.firstNamevar = event.target.value; 
        }         
        else if(event.target.name === "lastName"){
            this.lastNamevar = event.target.value; 
        }  

    }
render(){

    const {firstName, lastName} = this.state;

    return(
        <div>
         <input type="text" name="firstName" onChange={this.handleOnChangeTextBox}></input>
         <input type="text" name="lastName" onChange={this.handleOnChangeTextBox}></input>
         <button type="button" onClick={this.handleSubmit}>submit</button> 
         
        <Component2 firstName = {firstName} lastName={lastName}></Component2>
        </div>
    )
        
}
  
}

export default Component1;