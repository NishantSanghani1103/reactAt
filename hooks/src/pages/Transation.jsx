import React, { useTransition } from 'react'

export default function Transation() {
    const [pending, setpending] = useTransition()

    const handleTransation = () => {
        setpending(() => {
            return new Promise(res => setTimeout((res), 2000))
        })
    }
    return (
        <>
            <h4>useTransation() Hooks</h4>
            {
                pending
                    ?
                    "Loading..."
                    :
                    "Data Loaded..."
            }
            <button onClick={handleTransation}>Transation Button</button>
        </>

    )
}
