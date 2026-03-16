import React, { useReducer } from 'react'
const initialValue = {
    firstName: "",
    lastName: "",
    age: ""
}

const reducer = (state, action) => {
    if (action.type == "value") {
        return {
            ...state,
            [action.name]: action.value
        }
    }
    else {
        return initialValue
    }
}

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialValue)
    const saveData = (event) => {
        event.preventDefault()
        console.log(state);
        dispatch({ type: "reset" })
    }
    return (
        <div>
            <form action="" onSubmit={saveData} >
                <label htmlFor="">FirstName</label>
                &nbsp;<input type="text" value={state.firstName} name='firstName' placeholder='Enter FirstName' onChange={(e) => dispatch({
                    type: "value",
                    name: e.target.name,
                    value: e.target.value
                })} />
                <br /><br />

                <label htmlFor="">LastName</label>
                &nbsp;<input type="text" name='lastName' placeholder='Enter LastName'
                    value={state.lastName}
                    onChange={(e) => dispatch({
                        type: "value",
                        name: e.target.name,
                        value: e.target.value
                    })}
                />
                <br /><br />

                <label htmlFor="">Age</label>
                &nbsp;<input type="text" name='age' placeholder='Enter Age'
                    value={state.age}
                    onChange={(e) => dispatch({
                        type: "value",
                        name: e.target.name,
                        value: e.target.value
                    })}

                />
                <br /><br />

                <input type="submit" />
            </form>

        </div>
    )
}
