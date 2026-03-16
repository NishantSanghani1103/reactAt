import React, { useState } from 'react'
import ReactMemoChild from './ReactMemoChild'

export default function ReactMemo() {
    const [counter, setcounter] = useState(0)
    return (
        <div>
            <p> ReactMemo</p>
            <p>Counter Value : {counter}</p>
            <button onClick={() => setcounter(counter + 1)}>Increment</button>
            <ReactMemoChild />
        </div>
    )
}
