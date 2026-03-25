import React, { useState } from 'react'
import ReactMemoChild from './ReactMemoChild'

export default function ReactMemo() {
    const [count, setcount] = useState(0)
    return (
        <div>
            <p>Count Is : {count}</p>
            <button onClick={() => setcount(count + 1)}>Count +</button>
            <ReactMemoChild/>
        </div>
    )
}
