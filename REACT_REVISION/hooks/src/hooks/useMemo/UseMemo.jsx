import React, { useMemo, useState } from 'react'
import UseMemoChild from './UseMemoChild'

export default function UseMemo() {
    const [count, setcount] = useState(0)
    const name = useMemo(() => {
        return ["nishant"]

    }, [])


    return (
        <div>
            <p>Count Is : {count}</p>
            <button onClick={() => setcount(count + 1)}>Count +</button>
            <UseMemoChild name={name} />
        </div>
    )
}
