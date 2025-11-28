import React, { useContext } from 'react'
import { context } from './UseContextInfo'
const C = () => {
    const data  = useContext(context)
  return (
    <div>
          <h2> C Component </h2>
          (Object)
         <h2>Name :{data.name} </h2>
         <h2>Roll Number :{data.rollNo} </h2>
         <h2>Marks:{data.marks} </h2>

    </div>
  )
}

export default C