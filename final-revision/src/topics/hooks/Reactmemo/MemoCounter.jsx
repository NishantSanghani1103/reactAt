import React, { useState } from 'react'
import MemoCounterChild from './MemoCounterChild'

export default function MemoCounter() {
    const [counter, setcounter] = useState(0)
    return (
        <>
            <div>Counter ({counter})</div>
            <button onClick={() => setcounter(counter + 1)}>+</button>
            <MemoCounterChild />
        </>
    )
}
