import React from 'react'
import Child from './Child';

export default function Parent() {


    const data = "Hello Shubham";

  return (
    <div>
      <Child data={data}/>
    </div>
  )
}
