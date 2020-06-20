import React from 'react';
import {useLocation, useHistory} from 'react-router';
import CompCChildOfB from './CompCChildOfB';
import { UserProvider, UserConsumer } from './UserContext';

class CompBChildOfA extends React.Component {

 constructor(props){
    super(props);
 }

 render(){
    return (
        <div>
            <UserConsumer>                
            {UserContext => {
                   return <div><h1>From CompBChildOfA ....Context Data is : {UserContext}
                   ...And changing it for its child in this component itself</h1>
                   <h1>------------------------------------------------------------
                       ---------------------------------</h1>
                       </div>
                   //when no Provider are there in parent components it displayes the default value set in UserContext.js 
               }}
            </UserConsumer>
            <UserProvider value="Default value is replaced with the value passed from CompBChildOfA">
                    <CompCChildOfB>

                    </CompCChildOfB>
                </UserProvider>
        </div>
        );
 }
  
}

export default CompBChildOfA;
