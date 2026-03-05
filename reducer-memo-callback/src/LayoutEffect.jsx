import React, { useEffect, useLayoutEffect } from 'react'

export default function LayoutEffect() {
    useEffect(() => {
        console.log("Runs");

    }, [])
    return (
        <>
            <hr />
            <div>LayoutEffect</div>
        </>
    )
}
