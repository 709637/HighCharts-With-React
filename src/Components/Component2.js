import React from 'react';

class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName : ""
      }         
    } 


    
render(){
  const {firstName, lastName} = this.props;
  
    return(
        <div>Hello : 
         {firstName}
         {lastName}
        </div>
    )
        
}
  
}

export default Component2;