import React from 'react';
import { useLocation, useHistory } from 'react-router';
import CompBChildOfA from './CompBChildOfA';
import { UserProvider } from './UserContext';

class ComponentA extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UserProvider value="Default value is replaced with the value passed from ComponentA">
                    <CompBChildOfA>

                    </CompBChildOfA>
                </UserProvider>
            </div>
        );
    }

}

export default ComponentA;
