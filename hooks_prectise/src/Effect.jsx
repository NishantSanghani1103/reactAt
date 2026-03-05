import React, { useEffect, useState } from 'react'
import UnMount from './UnMount';

export default function Effect() {

    const [toggle, settoggle] = useState(true)
    useEffect(() => {
        console.log("mount Component");

    })
    return (
        <>
            <hr />
            <h4>useEffect() Hooks</h4>
            <button onClick={() => settoggle(!toggle)}>Toggle Unmount</button>
            {toggle && <UnMount />}
        </>
    )
}
