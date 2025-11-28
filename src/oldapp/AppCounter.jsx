import React,{ useState } from 'react';
import Counter from "../components/Counter";

const App = () => {
  let [count, setCount] = useState(0);
  function Increment() {
    setCount(() => count++); //setCount( function (){count++})
    //count++;
    console.log(count);
  }
  function Decrement() {
    setCount(() => count--); //setCount(()=>{return count--}); different types to write arrow functions
    //count--;
    console.log(count);
  }

  return (
    <div className='Container mt-2'> 
    <Counter count={count} onIncrement={Increment} onDecrement={Decrement} />
      </div>
  )
}

export default App;
//We can make independent componetn and control everything from their
//Another we can write code in app and run the part we want
//parent component
// <Counter count={count} /> left side is property name and right side is state vartiable
//We can pass anything in property like array, object, etc.
//bubbling of events
