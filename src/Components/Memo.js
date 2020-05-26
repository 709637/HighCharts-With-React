import React, {useState, useMemo} from 'react';
import MemoChild from './CHildOfMemo';

function Memohook({match}) {
    const [I, setI] = useState(0);

    let handleClick = () => {
       setI(I+1);
    }

    const MemoChildVar = useMemo(()=>{
      return <MemoChild></MemoChild>
    },[])
    //},[i])
  return (
  <div>
   <h1>Memo Hook</h1>
   Value of I: <h2>{I}</h2>
   <button onClick={handleClick}>Increment</button>
   
   <h3>Below are child component with and without useMemo.
     It restricts the child to re-render in functional 
     commponent if no prop is changed. Just like should componentupdate in class component
   </h3>

   <div>Normal render</div>
   <MemoChild></MemoChild>
   <div>Memo Render</div>
   {MemoChildVar}
  </div>
  );
}

export default Memohook;
