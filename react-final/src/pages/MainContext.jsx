import React, { useState } from 'react'
import { CounterContext } from '../Data/CounterContext'


export default function MainContext({children}) {
    const [count, setcount] = useState(0)
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
