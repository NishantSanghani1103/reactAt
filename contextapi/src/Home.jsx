import React, { useContext } from 'react'
import Header from './common/Header'
import { counterContext } from './MainContext';

export default function Home() {
    let c = useContext(counterContext)
    let { count, setcount } = c
    return (
        <>
            <button onClick={() => setcount(count + 1)}>count chage</button>
            <div>Home</div>
        </>

    )
}
