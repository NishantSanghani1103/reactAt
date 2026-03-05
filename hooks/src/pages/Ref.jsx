import React, { useRef, useState } from 'react'

export default function Ref() {
    const inputRef = useRef("")
    const [val, setval] = useState("")
    const handleOnChange = () => {
        setval(inputRef.current.value);
        // inputRef.current && inputRef.current.focus()

    }
    return (
        <>

            <h4>useRef()  Hooks </h4>
            <input ref={inputRef} type="text" onChange={handleOnChange} placeholder='Enter Name' />
            <p>Name Is :{val} </p>
            <hr />
        </>

    )
}
