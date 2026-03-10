import React, { useState } from 'react'
import { CounterContext } from './ContextData'

export default function UseContext({ children }) {
    const [count, setCount] = useState(0)
    const obj = {
        count,
        setCount
    }
    return (
        <CounterContext.Provider value={obj}>
            {children}
        </CounterContext.Provider>
    )
}
