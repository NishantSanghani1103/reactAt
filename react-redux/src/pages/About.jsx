import React from 'react'
import { useDispatch } from 'react-redux'
import { counterDecrement } from '../reducer/counterSlice'

export default function About() {
    const dispatch = useDispatch()
    return (
        <>
            <div>About</div>
            <button onClick={()=>dispatch(counterDecrement())}>Counter Decrement</button>
        </>
    )
}
