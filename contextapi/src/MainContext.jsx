import React, { createContext, useState } from 'react'
export let counterContext = createContext()
export default function MainContext({ children }) {
    let [count, setcount] = useState(1)
    let obj = {
        count,
        setcount
    }
    return (
        <counterContext.Provider value={obj}>

            {children}
        </counterContext.Provider>
    )
}
