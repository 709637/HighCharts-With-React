import React from 'react';
import {useParams} from 'react-router';

function Home({match}) {
    const {firstname, lastname} =useParams();
  return (
  <div>
   <h1>Home</h1>
  </div>
  );
}

export default Home;
