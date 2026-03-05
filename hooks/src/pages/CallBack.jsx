import React, { useState } from 'react'
import CallBackChild from './CallBackChild'

export default function CallBack() {
    const [count, setcount] = useState(0)
    const [otherCount, setotherCount] = useState(0)
    return (
        <>
            <h4>useCallBack() Hooks</h4>
            <p>Count Is : {count}</p>
            <button onClick={() => setcount(count + 1)}>Count+</button>
            <button onClick={()=>setotherCount(otherCount+1)}>Other Count+</button>
            <CallBackChild count={count} otherCount={otherCount} />
        </>

    )
}
