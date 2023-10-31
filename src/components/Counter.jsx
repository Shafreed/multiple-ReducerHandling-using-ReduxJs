import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter/counterAction'
const Counter = () => {
  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter