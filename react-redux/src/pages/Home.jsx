import React from 'react'
import Header from '../common/Header'
import { useDispatch } from 'react-redux'
import { counterIncrement } from '../reducer/counterSlice'

export default function Home() {
    const dipatch=useDispatch()
    return (
        <>
          
            <div>Home</div>
            <button onClick={()=>dipatch(counterIncrement())}>Increment Count</button>
        </>
    )
}
