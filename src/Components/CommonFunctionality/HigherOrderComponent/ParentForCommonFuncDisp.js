import React from 'react';
import CounterOnClickCF from "./CounterOnClickCF";
import CounterOnHoverCF from "./CounterOnHoverCF";
import UpdatedComponent from "./CommonFuncCounter";



    
class ParentComp extends React.Component {
        constructor(props) {
            super(props);
        }  
    
        render() {        
            return (
                <>
                <UpdatedComponent></UpdatedComponent>
                <CounterOnClickCF/>
                <CounterOnHoverCF/>
                </>)
    
        }
    }
    
    export default ParentComp;


