import React, { useEffect, useState } from 'react'

export default function Subscribe(props) {

  const [count , setCount]=useState(0);
  useEffect(()=>{setCount(count)})
   /* const countIncrease = ()=>{setCount(count+1)}*/
  return (
     <>
   <div className='col-md-10 content'>

    <h1>YOU ARE IN SUBSCRIBE</h1>

   {/*} <h1>{props.mydata}</h1>
    <h1>{props.mydata1}</h1>*/}
   <h1>{count}</h1>

   <button onClick={(countIncrease)=>setCount(count+1)}>increase</button>
    
   </div>
   </>
  )
}

