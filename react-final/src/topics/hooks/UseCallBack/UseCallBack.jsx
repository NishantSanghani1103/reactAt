/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import UseCallBackChild from './UseCallBackChild'

export default function UseCallBack() {
    const [count, setcount] = useState(0)
    const [items, setitems] = useState(0)
    const fn = useCallback(() => {
        console.log("useCallBack Render");
    }, [count])
    return (
        <div>
            <p>UseCallBack</p>
            <p>Counter Is :{count} </p>
            <p>Items Is : {items}</p>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <br /><br />
            <button onClick={() => setitems(items + 1)}>Increment Items</button>
            <UseCallBackChild value={fn} />
        </div>
    )
}
