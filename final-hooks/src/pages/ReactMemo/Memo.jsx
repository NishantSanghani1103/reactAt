import React, { useMemo, useState } from 'react'
import ChildMemo from './ChildMemo'

export default function Memo() {
    const [count, setcount] = useState(0)
    const obj = useMemo(() => {
        return {
            name: "Nishant",
            age:23
        }
    }, [])
    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick={() => setcount(count + 1)}>+</button>
            <ChildMemo obj={obj} />
        </div>
    )
}
