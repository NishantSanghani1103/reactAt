import React, { useContext } from 'react'
import { CounterContext } from '../data/CounterContext'

export default function Cart() {
    const{count}=useContext(CounterContext)
    return (
        <div>Cart Items : {count}</div>
    )
}
