import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [count, setcount] = useState(0)
    const [items, setitems] = useState(0)
    // const memo = () => {
    //     console.log("Memoize Function");

    // }

    const memo = useMemo(() => {
        console.log("Memoize Function");
    }, [count])
    return (
        <>
            <h4>useMemo() Hooks</h4>
            <p>Memo Function : {memo}</p>
            <p>Count Is : {count}</p>
            <p>Item Is : {items}</p>
            <button onClick={() => setcount(count + 1)}>Count</button>
            <button onClick={() => setitems(items + 1)}>Items</button>
            <hr />
        </>

    )
}
