import React, { useState } from 'react'

export default function Form() {

    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        age: ""
    })
    const saveData = (event) => {

        const name = event.target.name
        const value = event.target.value
        // console.log(value);


        setformData({
            ...formData,
            [name]: value
        })


    }
    const forSave = (event) => {
        event.preventDefault()
        console.log(formData);
    }

    return (
        <div>
            <form action="" onSubmit={forSave}>
                <label htmlFor="">FirstName</label>
                &nbsp;<input type="text" name='firstName' placeholder='Enter FirstName' onChange={saveData} />
                <br /><br />

                <label htmlFor="">LastName</label>
                &nbsp;<input type="text" name='lastName' placeholder='Enter LastName' onChange={saveData} />
                <br /><br />

                <label htmlFor="">Age</label>
                &nbsp;<input type="text" name='age' placeholder='Enter Age' onChange={saveData} />
                <br /><br />

                <input type="submit" />
            </form>

        </div>
    )
}
