import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [count, setcount] = useState(0)
    const [item, setitem] = useState(100)
    const memo = useMemo(() => {
        console.log("Multiply Called...!!")
        return count * 5
    }, [count])
    return (
        <>
        <div>USEMEMO</div>
            <div>
                <h2>count is : {count}</h2>
                <h3>Item Is : {item}</h3>
                <h4>{memo}</h4>
                <button onClick={() => setcount(count + 1)}>Count++</button>
                <button onClick={() => setitem(item * 5)}>Item*</button>
                <hr />
            </div>
        </>
    )
}
