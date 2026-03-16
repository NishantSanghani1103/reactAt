import React from 'react'

 function UseCallBackChild() {
    console.log("CallBack Child Render");
    
    return (
        <div>UseCallBackChild</div>
    )
}
export default React.memo(UseCallBackChild)