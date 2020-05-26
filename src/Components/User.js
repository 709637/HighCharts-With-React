import React from 'react';
import {useParams} from 'react-router';

function Users({match}) {
    const {firstname, lastname} =useParams();
  return (
  <div>
    <h1>Users</h1>
    <h4>{match.params.firstname}</h4><h4>{match.params.lastname}</h4>
    <h4>{firstname}</h4><h4>{firstname}</h4>
  </div>
  );
}

export default Users;
