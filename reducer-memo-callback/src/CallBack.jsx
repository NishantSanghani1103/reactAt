import React, { useCallback, useState } from 'react'
import CallBackChild from './CallBackChild'

export default function CallBack() {
    const [c, setc] = useState(0)
    // const learining = 
    const [addition, setaddition] = useState(0)

    const clBack = useCallback(() => {
        console.log("hello");

    }, [addition])
    return (
        <>
            <div>USECALLBACK</div>
            <br /><br />
            <div>CallBack Parent {c}</div>
            <button onClick={() => setc(c + 1)}>Change </button>
            <CallBackChild learining={clBack} addition={addition} />
            <button onClick={() => setaddition(addition + 1)}>Change AdditionF</button>
        </>
    )
}
