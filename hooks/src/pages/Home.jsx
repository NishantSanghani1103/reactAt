import React, { useState } from 'react'
import UnMount from './UnMount'

export default function Home() {
    const [btn, setbtn] = useState(true)
    return (
        <>
            <h4>useEffect() UnMount</h4>
            <div>Home</div>
            <button onClick={() => setbtn(!btn)}>Toggle</button>
            {
                btn && <UnMount />
            }
            <hr />
        </>
    )
}
