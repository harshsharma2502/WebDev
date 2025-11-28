import React, { useState } from 'react'
import A from './A'
export const context=React.createContext();
const UseContextInfo = () => {
    //const [numbers,setNumbers] = useState([14,27,65,256,52]);
    const [data, setData] = useState({
        rollNo:58,
        name:"Devansh",
        marks:[84.4,25,45,95],
    });
  return (
    <div style={{height: "80vh"}}>
        <h2>Use Context Example </h2>
        <context.Provider value={data}>
        <A />
        </context.Provider>
        </div>
  )
}

export default UseContextInfo