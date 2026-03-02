import React, { memo } from 'react'

 function CallBackChild() {
    console.log("child component");
    
    return (
        <div>CallBackChild</div>
    )
}
export default memo(CallBackChild)
