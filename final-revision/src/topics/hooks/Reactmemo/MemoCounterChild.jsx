import React, { useState } from 'react'

function MemoCounterChild() {
    console.log("Memo Child Render");
    const [childMemoCounter, setchildMemoCounter] = useState(0)
    return (
        <>
            <div>MemoCounterChild ({childMemoCounter})</div>
            {/* <button onClick={() => setchildMemoCounter(childMemoCounter + 1)}>childMemo +</button> */}
        </>
    )
}
export default React.memo(MemoCounterChild)