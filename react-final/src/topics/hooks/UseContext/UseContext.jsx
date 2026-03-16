import React, { useContext } from 'react'
import { CounterContext } from '../../../Data/CounterContext'

export default function UseContext() {
    const { count, setcount } = useContext(CounterContext)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setcount(count+1)}>Increment</button>
        </div>
    )
}
