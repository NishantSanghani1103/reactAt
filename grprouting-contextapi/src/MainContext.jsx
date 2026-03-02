import React, { useState } from 'react'
import { CounterContext } from './data/CounterContext'

export default function MainContext({ children }) {
    const [count, setcount] = useState(1)
    const obj = {
        count,
        setcount
    }
    return (
        <CounterContext.Provider value={obj}>
            {children}
        </CounterContext.Provider>
    )
}
