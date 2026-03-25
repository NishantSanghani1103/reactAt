import React, { useCallback, useState } from 'react'
import UseCallBackChild from './UseCallBackChild';

export default function UseCallBack() {

    const [count, setCount] = useState(0);
    function demo() {
        console.log("Main CallBack")
    }
    // const handleUseChild = useCallback(() => {
    //     demo()
    // }, [])
    return (
        <div>
            <hr />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <UseCallBackChild click={demo} />
        </div>
    )
}
