import React from 'react'

 function ChildMemo() {
    console.log("childMemo");
    
    return (
        <div>ChildMemo</div>
    )
}
export default React.memo(ChildMemo)