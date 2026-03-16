import React from 'react'

function useMemoChild() {
    // console.log("Memo Child");
    
    return (
        <div>useMemoChild</div>
    )
}
export default React.memo(useMemoChild)