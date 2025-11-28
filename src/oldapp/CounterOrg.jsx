//Original one
import React, {useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
//Creating function inside component, we can also make it outside
    function Increment() {
        setCount( ()=>count++); //setCount( function (){count++})
        //count++;
        console.log(count);
    }
    function Decrement() {
        setCount( ()=>count--); //setCount(()=>{return count--}); different types to write arrow functions
        //count--;
        console.log(count);
    }
  return (
    <div>
        <button onClick={Decrement}>Decrement </button>
        <b> {count} </b>
        <button onClick={Increment}> Incremenet</button> 
    </div>
  )
}

export default Counter
//block tag is <h2> and other is inline tag
//Event is not an function. Event code is written in function, it need address of function (refrence)
//The function of javascript virtual dom won't be rendered because we didn't make variable
//Create class make state block and declare variables or we use specail method calls HOOKS -> render things
//Use State do state management
//Normal component have its own state also called independant component
//Child component, parent component can't change its state. Parent component cant modify child component values