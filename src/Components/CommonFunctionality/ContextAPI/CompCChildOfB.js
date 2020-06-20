import React from 'react';
import {useLocation, useHistory} from 'react-router';
import UserContext,{UserConsumer} from './UserContext';

class CompCChildOfB extends React.Component {

 constructor(props){
    super(props);
 }
 

 render(){
    return (
        <div>
           <UserConsumer>
               {UserContext => {
                   return <h1>From CompCChildOfB ....Context Data is : {UserContext}</h1>
                   //when no Provider are there in parent components  it displayes the default value set in UserContext.js 
               }}
           </UserConsumer>

           <h1>------------------------------------------------------------
                       ---------------------------------</h1>

            <h1>The other way of conssuming UserContext : {this.context}</h1>
        </div>
        );
 }
  
}

CompCChildOfB.contextType = UserContext;

export default CompCChildOfB;
