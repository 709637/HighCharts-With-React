import React from 'react';
import { useLocation, useHistory } from 'react-router';
import CompBChildOfA from './CompBChildOfA';
import {UserConsumer, UserProvider } from './UserContext';

class ComponentA extends React.Component {

    constructor(props) {
        super(props);
        this.reffunc = this.reffunc.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    focusInput(){
        this.textInput.focus(); 
    }

    reffunc(input){
        this.textInput = input;
    }

    render() {
        return (
            <div>
             
                {/* <UserProvider value="Default value is replaced with the value passed from ComponentA">
                    <CompBChildOfA>

                    </CompBChildOfA>
                    
                </UserProvider> */}

                {/* <UserConsumer>                
            {UserContext => {
                   return <div> {UserContext}</div>
               }}
            </UserConsumer> */}
            {/* <input type="text" ref={this.reffunc}></input>
            <input type="button" value="Focus the text input" onClick={this.focusInput}></input> */}
            </div>
        );
    }

}

export default ComponentA;
