import React, {useState, useEffect} from 'react';


let renderCount = 0;

function MemoChild({match}) {

  
    
  useEffect(()=>{
    renderCount++;
  })

  return (
  <div>
   Value of renderCount: <h2>{renderCount}</h2>
  </div>
  );
}

export default MemoChild;
