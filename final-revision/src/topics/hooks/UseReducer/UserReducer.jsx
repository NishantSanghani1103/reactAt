import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        default:
            return state
    }
}

export default function UserReducer() {


    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <p>Count : {state}</p>
            <button onClick={() => dispatch({ type: "Increment" })}>Increnmet</button>
            <br /><br />
            <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
        </div>
    )
}
