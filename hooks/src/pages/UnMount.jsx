import React, { useEffect } from 'react'

export default function UnMount() {
    useEffect(() => {
        console.log("rendered");
        return () => {
            console.log("UnMount");
        }
    }, [])
    return (
        <div>UnMount Component</div>
    )
}
