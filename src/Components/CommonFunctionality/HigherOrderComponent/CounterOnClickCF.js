import React from 'react';
import UpdatedComponent from "./CommonFuncCounter";

class CounteronClick extends React.Component {
    constructor(props) {
        super(props);  
    }    

    render() {
        
        return (
            <> 
            <div onMouseOver={this.props.handleContIncrement}>Hover {this.props.count} times</div>
            </>)

    }
}

export default UpdatedComponent(CounteronClick);

