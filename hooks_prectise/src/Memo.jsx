import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [count, setcount] = useState(0)
    const [items, setitems] = useState(0)

    const memo = useMemo(() => {
        console.log("Hello");
    }, [count])
    return (
        <>
            <h4>useMemo() Hooks</h4>
            <p>{memo}</p>
            <p>Count : {count}</p>
            <p>Items : {items}</p>

            <button onClick={() => setcount(count + 1)}>Change Count</button><br /><br />
            <button onClick={() => setitems(items + 1)}>Change Items</button>
        </>
    )
}
