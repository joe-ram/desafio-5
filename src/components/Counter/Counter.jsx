import {React, useState} from 'react';
import './Counter.css';

export default function Counter({stock, onAdd}) {

   const [count, setCount] = useState(0);
   function add() {
      if (count < stock) {
         setCount(count + 1)
      }      
   }
   function substract() {
      if (count > 0) {
         setCount(count - 1)  
      }          
   }
   function reset() {
      setCount(0)
   }
  return (
     <div>
        <div className='counter-box'>
           <h1>Counter</h1>
           <p>Stock: {stock }</p>
           <p>Cantindad:{count}</p>

           <div>
              <button className='btn btn-dark' onClick={substract}> - </button>
              <button className='btn btn-primary' onClick={reset}> Reset </button>
              <button className='btn btn-dark' onClick={add}> + </button>
           </div>
           <div>
              <button className='btn btn-primary' onClick={() => onAdd(count)}>Confirmar</button>
           </div>
       </div>
     </div>
  )
}
