import {useState} from 'react';

function Count({ init }) {
    
    const [count, setCount] =useState(0)
  
    return (
      <div>
        
        <p> {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    )
  }


  export default Count;


  