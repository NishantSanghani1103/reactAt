import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state += action.value;
        case "decrement":
            return state -= 1;
        case "reset":
            return state = 0;
        default:
            return state;
    }
}
export default function Reducer() {

    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h4>useReducer() Hooks</h4>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>+</button>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <br />
            <br />
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <hr />
        </div>
        
    )
}
