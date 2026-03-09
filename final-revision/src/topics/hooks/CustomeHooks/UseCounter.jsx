import { useState } from "react";

export default function useCounter(initialValue = 0) {
    const [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        setcount(count - 1)
    }
    const reset = () => {
        setcount(initialValue)
    }

    return { count, increment, decrement, reset }
}