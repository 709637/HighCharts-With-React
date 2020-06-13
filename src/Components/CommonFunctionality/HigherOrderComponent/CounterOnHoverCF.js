import React from 'react';
import UpdatedComponent from "./CommonFuncCounter";
import Button from 'react-bootstrap/Button';

class CounteronHover extends React.Component {
    constructor(props) {
        super(props);  
    }    

    render() {        
        return (
            <>
             <Button onClick={this.props.handleContIncrement}>Clicked {this.props.count} times</Button>
            </>)

    }
}

export default UpdatedComponent(CounteronHover);

