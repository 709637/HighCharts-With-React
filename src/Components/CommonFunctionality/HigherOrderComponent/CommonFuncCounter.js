import React from 'react';


const UpdatedComponent = (WrappedComponent) => {
 class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
               count : 0
            }  
        }  
        
        handleContIncrement(){
           this.setState({
               count: this.state.count+1
           })
        }
    
        render() {        
            return (
                <>
                <WrappedComponent 
                count={this.state.count} 
                handleContIncrement={this.handleContIncrement.bind(this)}
                {...this.props}
                />
                </>)
    
        }
    }

    return NewComponent;
    
}

export default UpdatedComponent;


