import { Axis } from 'highcharts';
import React from 'react';
import {useParams} from 'react-router';
import Component1 from './Component1';
import Pwc from './pwc';
import AE from './AE';
import FirstAmerican from './FirstAmerican';
import {useQuery} from 'react-query';

const testRefetch = () => {
  console.log("testRefetch called");
  return fetch('https://reqres.in/api/products/3');
}

function Home({match}) {
    const {firstname, lastname} =useParams();

    const {refetch} = useQuery(
      'Hello',
      testRefetch,
      {
        enabled : false,
      }
    );
    
    // let focusInput = () =>{this.textInput.focus(); }

  return (
  <div>
   {/* <h1>Homes</h1>
   <button onClick={refetch}>Refetch</button>
   <Component1></Component1> */}
   {/* <input type="text" ref={(input) => {this.textInput = input}}></input>
   <input type="button" value="Focus the text input" onClick={focusInput}></input> */}
   <h1>hello</h1>
   {/* <Pwc></Pwc> */}
   {/* <AE></AE> */}
   <FirstAmerican></FirstAmerican>

  
  </div>
  );
}

export default Home;
