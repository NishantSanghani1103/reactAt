import React from 'react'
import useCounter from './UseCounter'

export default function Page() {
    const { count, increment, decrement, reset } = useCounter()
    return (
        <div>
            <h4>Count Is : {count}</h4>
            <br />
            <button onClick={increment}>Increment+</button>
            <br />
            <br />
            <button onClick={decrement}>Decrement-</button>
            <br />
            <br />
            <button onClick={reset}>Reset </button>
        </div>
    )
}
