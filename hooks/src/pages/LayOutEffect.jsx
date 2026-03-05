import React, { useEffect, useLayoutEffect } from 'react'

export default function LayOutEffect() {

    useEffect(() => {
        console.log("useEffect Run After useLayOutEffect() ");
    }, [])

    useLayoutEffect(() => {
        console.log("useLayoutEffect Runs Before useEffect()");
        
    },[])
    return (
        <>
            <h4>useLayOutEffect() Hooks</h4>
            <hr />
        </>

    )
}
