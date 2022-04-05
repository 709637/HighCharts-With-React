import React from 'react';
import axios from 'axios'
import { useRouteMatch } from 'react-router';

class Pwc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : []
      } 
      this.callapi = this.callapi.bind(this);      
    }

    componentDidMount(){
      this.callapi();
    }
    
    callapi() {
        axios.get('https://run.mocky.io/v3/4bad75b9-5c38-48fa-8f68-dbfa34bef45b')
          .then((response) => {
            console.log(response);
            this.setState({
                categories : response.data.data.merchant.categories
            })
          })
          .catch(function (error) {
            console.log(error);
          })
    }


    
render(){

  const {categories} = this.state;
    return(
        <div>
            {categories.map(item => {
			return (<div key={item.Name} class="accordion" id="accordionExample">
      <div key={item.Name} className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {item.name}
          </button>
        </h2>
        <div key={item.Name} id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {item.subcategories.map(subItem => {
            return (<div key={subItem.name}>
              {subItem.name}
            </div>
            )            
          })}
          </div>
        </div>
      </div>
    </div>);
		})}
        
        </div>
    )
        
}
  
}

export default Pwc;