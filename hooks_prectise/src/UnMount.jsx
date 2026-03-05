import React, { useEffect } from 'react'

export default function UnMount() {
    useEffect(() => {
        return () => {
            console.log("UnMount");
        }
    },[])
    return (
        <div>UnMount</div>
    )
}
