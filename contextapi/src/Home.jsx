import React, { useContext } from 'react'
import Header from './common/Header'

import { CounterContext } from './CounterData';

export default function Home() {
    let c = useContext(CounterContext)
    let { count, setcount } = c
    return (
        <>
            <button onClick={() => setcount(count + 1)}>count chage</button>
            <div>Home</div>
        </>

    )
}
