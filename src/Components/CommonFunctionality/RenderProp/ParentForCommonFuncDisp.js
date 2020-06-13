import React from 'react';
import CounterOnClickCF from "./CounterOnClickCF";
import CounterOnHoverCF from "./CounterOnHoverCF";
import CommonFuncCounter from "./CommonFuncCounter";



    
class ParentComponent extends React.Component {
        constructor(props) {
            super(props);
        }  
    
        render() {        
            return (
                <>
                <CommonFuncCounter 
                render={(count, handleIncrement)=>(            
                <CounterOnClickCF count={count} handleContIncrement = {handleIncrement}/>                
                )}></CommonFuncCounter>

                <CommonFuncCounter 
                render={(count, handleIncrement)=>(            
                <CounterOnHoverCF count={count} handleContIncrement = {handleIncrement}/>                
                )}></CommonFuncCounter>
                </>)
    
        }
    }
    
    export default ParentComponent;


