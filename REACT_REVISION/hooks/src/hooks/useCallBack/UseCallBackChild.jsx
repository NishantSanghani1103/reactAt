import React from 'react'

 function UseCallBackChild() {
    console.log("UseCallback Child Rendered...");

    return (
        <div>UseCallBackChild</div>
    )
}
export default React.memo(UseCallBackChild)