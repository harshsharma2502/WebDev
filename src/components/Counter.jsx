

const Counter = (props) => {
    
//const Counter = ({initialValue}) => {
 let {count,onIncrement,onDecrement} = props //destructuring
// let countStyle = {color:"green",fontSize:30};
const countStyle = () => {
    if(count<=0){
        return { color:"red",fontSize:20}
    }
    else{
        return { color:"green",fontSize:20}
    }
}
    
//Creating function inside component, we can also make it outside

  return (
    <div>
        <button className="btn btn-primary mt-2" onClick={onIncrement}>Increment </button>
        <b style={countStyle()}> {count} </b>
        <button className="btn btn-primary mt-2" onClick={onDecrement}> Decrement</button> 
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