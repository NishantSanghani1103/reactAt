import React, { useState, useTransition } from 'react'

export default function MultipleValues() {
    const [formValue, setformValue] = useState({
        fName: "",
        lName: "",
        eml: ""
    })
    const [pending, setPending] = useTransition()
    const handleChange = (event) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value

        setformValue({
            ...formValue,
            [name]: value
        })
    }
    const saveData = (event) => {
        event.preventDefault()

        setPending(() => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(console.log(formValue))
                }, 2000)
                setformValue({
                    fName: "",
                    lName: "",
                    eml: ""
                })

            })
        })

    }
    return (
        <>
            <div>MultipleValues</div>

            <input type="text" name="fName" id="" value={formValue.fName} placeholder='Enter FirstName' onChange={handleChange} />
            <br /><br />
            <input type="text" name="lName" id="" value={formValue.lName} placeholder='Enter LastName' onChange={handleChange} />
            <br /><br />
            <input type="text" name="eml" id="" value={formValue.eml} placeholder='Enter Email' onChange={handleChange} />
            <br /><br />
            <button disabled={pending} onClick={saveData} name='submit'>{pending ? "Submitting..." : "Submit"}</button>


        </>
    )
}
