import React, { useEffect } from 'react'

export default function CallBackChild({ count, otherCount }) {
    useEffect(() => {
        console.log(count);
        console.log(otherCount);

    })
    return (
        <>
            <div>CallBackChild</div>
            <hr />
        </>
    )
}
