import React from 'react'

 function UseMemoChild({name}) {
    console.log(name);
    
    console.log("UseMemo Child Rendered....");

    return (
        <div>UseMemoChild</div>
    )
}
export default React.memo(UseMemoChild)