import React from 'react'
import GrandChild from './GrandChild'

export default function Child(props) {
  return (
    <div>
      <GrandChild data={props.data}/>
    </div>
  )
}
