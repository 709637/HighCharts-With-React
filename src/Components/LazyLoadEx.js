import React, {lazy, Suspense} from 'react';
const ChildLazyComp = lazy(()=>import('./ChildLazyComp'))

function LazyLoad() {

  return (
  <div>
   <h2>Lazy Component</h2>
   <Suspense fallback = {<div>Loading...</div>}>
     <ChildLazyComp></ChildLazyComp>
     </Suspense>

     <div>Hint:  To see the effect of lazy laoding make your network speed slow 3G in network tab</div>
  </div>
  );
}

export default LazyLoad;
