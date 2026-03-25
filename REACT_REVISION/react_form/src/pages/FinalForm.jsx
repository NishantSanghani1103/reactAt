import React, { useState, useTransition } from 'react'

export default function FinalForm() {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        skills: "",
        gender: "",
        date: "",
        terms: Boolean
    })

    const [pending, setpending] = useTransition()
    const handleChange = (event) => {

        const { name, value, type } = event.target
        console.log(name, value, type);
        setformData({
            ...formData,
            [name]: type == "checkbox" ? event.target.checked : value
        })
    }
    const saveData = (event) => {
        event.preventDefault()
        // console.log(formData);
        setpending(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(console.log(formData))
                }, 2000)
            })
        })
    }
    return (
        <form action="" onSubmit={saveData} className='m-5' >
            <ul>
                <li className='flex flex-col my-2 gap-2'>
                    <label htmlFor="">FirstName :</label>
                    <input type="text" placeholder='Enter FirstName' name='firstName' className='border w-fit p-1' onChange={handleChange} />
                </li>

                <li className='flex flex-col my-2 gap-2'>
                    <label htmlFor="">LastName :</label>
                    <input type="text" placeholder='Enter LastName' name='lastName' className='border w-fit p-1' onChange={handleChange} />
                </li>

                <li className='flex flex-col my-2 gap-2'>
                    <label htmlFor="">Age :</label>
                    <input type="number" min={1} placeholder='Enter Age' name='age' className='border w-fit p-1' onChange={handleChange} />
                </li>

                <li className='flex flex-col my-2 gap-2'>
                    <label htmlFor="">Gender :</label>
                    <div className='flex items-center gap-1 '>
                        <input type="radio" name='gender' value={"male"} onChange={handleChange} className='border w-fit ' />
                        <span>male</span>

                        <input type="radio" name='gender' value={"female"} onChange={handleChange} className='border w-fit ' />
                        <span>female</span>
                    </div>
                </li>

                <li className='flex flex-col my-2 gap-2'>
                    <label htmlFor="">Skills : </label>
                    <select name="skills" onChange={handleChange} className='w-fit border' id="">
                        <option value="">Select Skills</option>
                        <option value="react">React</option>
                        <option value="node">Node</option>
                    </select>
                </li>

                <li className='flex flex-col my-2 gap-2'>
                    <input type="date" className='w-fit' onChange={handleChange} name="date" id="" />
                </li>

                <li>
                    <div>
                        <input type="checkbox" onChange={handleChange} name='terms' />
                        <label htmlFor="">Accept Terms</label>
                    </div>
                </li>

                <li className='my-5'>
                    <button disabled={pending} className={`border px-2 ${pending && "bg-red-500"}  cursor-pointer`} type='submit'>{pending ? "Submiting..." : "Submit"}</button>
                </li>
            </ul>
        </form>
    )
}
