import React, { useId } from 'react'

export default function InputId() {
    const id = useId()
    return (
        <>
            <label htmlFor={id}></label>

            <input id={id} type="text" placeholder='EnterName' />
            
        </>
    )
}
