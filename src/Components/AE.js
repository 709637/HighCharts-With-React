import React, {useState, useEffect} from 'react';


let renderCount = 0;

function AE({match}) {

  const [count, setcount] = useState(0);
    
  useEffect(()=>{
    renderCount++;
  },[count]);

  let handleClick = () =>{
    setcount(count+1);;
  }

  return (
  <div>
      <button className="primary" onClick = {handleClick}></button>
      Value of Count: <h2>{count}</h2>
   Value of renderCount: <h2>{renderCount}</h2>
  </div>
  );
}

export default AE;
