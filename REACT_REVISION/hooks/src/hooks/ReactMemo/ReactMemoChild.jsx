import React from 'react'

function ReactMemoChild() {
    console.log("React Memo Child Rendered....");

    return (
        <div>ReactMemoChild</div>
    )
}
export default React.memo(ReactMemoChild)