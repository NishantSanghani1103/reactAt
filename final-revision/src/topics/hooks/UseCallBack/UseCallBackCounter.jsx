import React, { memo, useCallback, useState } from 'react'

export default function UseCallBackCounter() {
    const [count, setcount] = useState(0)

    const increment = useCallback(() => {
        setcount((p) => p + 1)
    }, [])
    const decrement = useCallback(() => {
        setcount((p) => p - 1)
    }, [])

    return (
        <div>
            <p>counter : ({count})</p>
            <Button onClick={increment}>Increment</Button><br />
            <br />
            <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}

const Button = memo(({ onClick, children }) => {
    console.log(children);

    return (
        <button onClick={onClick}>
            {children}

        </button>
    )
})