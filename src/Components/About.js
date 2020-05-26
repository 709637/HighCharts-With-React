import React from 'react';
import {useLocation, useHistory} from 'react-router';

function About() {
    const location = useLocation();
    const history = useHistory();
    console.log(location, history);

function goback(){
    history.goBack();
}

  return (
  <div>
   <h1>About</h1>
  <div>Current Location : {location.pathname}</div>
  <div>Data Passes from Other component: {location.state.user}</div>
   <button onClick={goback}>GO Back</button>
  </div>
  );
}

export default About;
