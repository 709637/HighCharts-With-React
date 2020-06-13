import React from 'react';
import CounterOnClickCF from "./CounterOnClickCF";
import CounterOnHoverCF from "./CounterOnHoverCF";



    
class ParentComp extends React.Component {
        constructor(props) {
            super(props);
        }  
    
        render() {        
            return (
                <>
                <CounterOnClickCF/>
                <CounterOnHoverCF/>
                </>)
    
        }
    }
    
    export default ParentComp;


