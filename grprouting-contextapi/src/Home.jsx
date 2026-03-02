import React, { useContext } from 'react'
import Header from './common/Header'
import { CounterContext } from './data/CounterContext'

export default function Home() {

    const { count,setcount } = useContext(CounterContext)

    return (
        <>
            <div>Home</div>
            <button onClick={()=>setcount(count+1)}>Change Count</button>
        </>

    )
}
