import React, { useCallback, useEffect, useState } from 'react'
import UseCallBackChild from './UseCallBackChild';

export default function UseCallBack() {
    const [count, setcount] = useState(0)

    const memo = useCallback(() => {
        console.log("Rendered");

    }, [])

    return (
        <>
            {/* <p>{memo()}</p> */}
            <div>Count Is : {count}</div>
            <button onClick={() => setcount(count + 1)}>+</button>
            <UseCallBackChild fn={memo} />
        </>
    )
}
