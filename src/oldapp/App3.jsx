import React, { useState } from 'react'
import Table from '../components/Table'

const App = () =>  {
  let{num,multiply,result} = useState(0);
  function printTable() {
    result (( )=> num*multiply);
    console.log(result);
  }
  return (
    <div className='Container mt-2'>
      <Table/>
      </div>
  )
}

export default App