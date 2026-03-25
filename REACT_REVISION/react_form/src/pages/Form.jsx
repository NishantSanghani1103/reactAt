import React, { useState } from 'react'

export default function Form() {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "male",
        skills: "",
        teams: false
    })
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setformData({
            ...formData,
            [name]: type == "checkbox" ? checked : value
        })
    }
    const saveData = (event) => {
        event.preventDefault()
        console.log(formData)
        setformData({
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            teams: false
        })
    }
    return (
        <>
            <section className='max-w-full my-5'>
                <main className='max-w-330 mx-auto'>
                    <form action="" onSubmit={saveData}>
                        <ul>
                            <li className='flex flex-col'>
                                <label htmlFor="">FirstName </label>
                                <input type="text" name='firstName' placeholder='Enter FirstName' className='border border-gray-300 px-2 w-fit' value={formData.firstName} onChange={handleChange} />
                            </li>

                            <li className='flex flex-col my-2'>
                                <label htmlFor="">LastName </label>
                                <input type="text" placeholder='Enter LastName' name='lastName' className='border border-gray-300 px-2 w-fit' value={formData.lastName} onChange={handleChange} />
                            </li>
                            <li className='flex flex-col my-2'>
                                <label htmlFor="">Age </label>
                                <input type="number" placeholder='Enter Age' name='age' className='border border-gray-300 px-2 w-fit' value={formData.age} onChange={handleChange} />
                            </li>

                            <li className='flex flex-col my-2'>
                                <p htmlFor="">Gender </p>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type="radio" className='border border-gray-300 px-2 w-fit ' name='gender' checked={formData.gender == "male"} onChange={handleChange} value="male" />
                                        <label htmlFor="">Male</label>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <input type="radio" name='gender' className='border border-gray-300 px-2 w-fit ' checked={formData.gender == "female"} value="female" onChange={handleChange} />
                                        <label htmlFor="">Female</label>
                                    </div>
                                </div>
                                <div className='flex gap-1 items-center'>

                                </div>
                            </li>

                            <li className='flex flex-col my-2'>
                                <div className='flex items-center gap-1'>
                                    <input
                                        type="checkbox"
                                        placeholder='Enter Age'
                                        className='border border-gray-300 px-2 w-fit'
                                        name='teams'
                                        checked={formData.teams}
                                        onChange={handleChange} />

                                    <label htmlFor="">Accept Teams </label>
                                </div>
                            </li>

                            <li className=''>
                                <select name="skills" id="" onChange={handleChange} className='border border-gray-200'>
                                    <option value="">Select Skills</option>
                                    <option value="react">React</option>
                                    <option value="node">Node</option>
                                </select>
                            </li>
                            <li className='flex flex-col my-2'>
                                <input type="submit" className='border border-gray-200 cursor-pointer w-fit px-2' />
                            </li>
                        </ul>

                    </form>
                </main>
            </section>
        </>
    )
}
