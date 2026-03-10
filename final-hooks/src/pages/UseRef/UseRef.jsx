import React, { useRef } from 'react'

export default function UseRef() {
    const inputRef = useRef()
    const handleButton = () => {
        inputRef.current.value
        inputRef.current.style.background = "red"
        inputRef.current.focus()
    }
    return (
        <div>
            <hr />
            <input type="text" ref={inputRef} />    
            <br />
            <button onClick={handleButton}>Chnage Input</button>
        </div>
    )
}
