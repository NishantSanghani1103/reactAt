import React from 'react'

function UseCallBackChild() {
    console.log("UseCallBack Child");
    
    return (
        <div>UseCallBackChild</div>
    )
}
export default React.memo(UseCallBackChild)