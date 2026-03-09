import React, { useMemo, useState } from 'react'
import UseMemoChild from './UseMemoChild'

export default function UseMemo() {
    const [useMemoCount, setuseMemoCount] = useState(0)
    const myObj = useMemo(() => {
        return {
            name: "Nishant",
            age: "23"
        }
    }, [])

    return (
        <>

            <div>UseMemo Counter ({useMemoCount})</div>
            <button onClick={() => setuseMemoCount(useMemoCount + 1)}>counter +</button>
            <UseMemoChild myObj={myObj} />
        </>


    )
}
