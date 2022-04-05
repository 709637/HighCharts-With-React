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
            //Control state value here...for any condition to be executed on a perticular value of state
            // if(this.state.count > 3)
            // {
            //     this.setState({
            //         count: this.state.count-1
            //     })
            // }
            // else{
            //     this.setState({
            //         count: this.state.count+1
            //     })
            // }
            this.setState({
                count: this.state.count+1
            })
           
        }
    
        render() {        
            return (
                <>
                <div>Count in higher order component is : {this.state.count}</div>
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


