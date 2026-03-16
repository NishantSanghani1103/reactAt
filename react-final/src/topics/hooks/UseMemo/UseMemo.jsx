import React, { useMemo, useState } from 'react'
import UseMemoChild from './UseMemoChild'

export default function UseMemo() {
    const [counter, setcounter] = useState(0)


    const obj = useMemo(() => {
        return {
            name: "Nishant",
            age: 23
        }
    }, [])
    return (
        <div>
            <p> UseMemo</p>
            <p>Counter Value : {counter}</p>
            <button onClick={() => setcounter(counter + 1)}>Increment</button>
            <UseMemoChild name={obj} />
        </div>
    )
}
