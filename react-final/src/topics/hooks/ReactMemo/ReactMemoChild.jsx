import React from 'react'

function ReactMemoChild() {
    console.log("Memo Child");
    
    return (
        <div>ReactMemoChild</div>
    )
}
export default React.memo(ReactMemoChild)