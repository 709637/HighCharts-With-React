import React from 'react';

 class NoSelfRender extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
               count : 0
            }  
        }  
        
        handleContIncrement= () => {
           this.setState({
               count: this.state.count+1
           })
        }
    
        render() {        
            return (
                <>
                {this.props.render(this.state.count, this.handleContIncrement)}
                </>)
    
        }
    }

export default NoSelfRender;


