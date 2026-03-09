import React from 'react'

function UseMemoChild({ myObj }) {
    console.log(myObj);

    console.log("Use Memo Child");

    return (
        <div>UseMemoChild</div>
    )
}
export default React.memo(UseMemoChild)