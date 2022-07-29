import React from 'react';

class FirstAmerican extends React.Component {
    constructor(props) {
        super(props);
        this.checktext = ['apple','ball','cat']; 
        
        this.state={
            // [{text:'apple', Checkstatus: false},
            // {text:'ball', Checkstatus: false},
            // {text:'cat', Checkstatus: false}]
            apple : false,
            ball : false,
            cat : false
        }
    }

    handleCheck = (event) =>{
        console.log(event);
        console.log(event.target.value,event.target.checked);
        let checkstatusfiltered = this.checktext.filter(item =>{ return item === event.target.value})
        // this.setState({
        //     checkboxStatus
        // })
    }
    
    

    render() {        
        return (
            <>
            {
                this.checktext.map((item)=>{
                   return <div>
                       <input type="checkbox" value={item} onChange={this.handleCheck} disabled={false} />
                       <label>{item}</label>
                   </div>
                })
            }
             
            </>)

    }
}

export default FirstAmerican;

