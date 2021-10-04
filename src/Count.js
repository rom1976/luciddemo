import {useState} from 'react';

function Count() {
    
    const [count, setCount] =useState(0)
  
    return (
      <>
        <p> {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </>
    )
  }


  export default Count;


  