import React, { useState } from 'react'
import UserForm from './components/UserForm'
import UserDetailsTable from './components/UserDetailsTable'

export default function UserRegister() {
     const [formSave, setformSave] = useState(JSON.parse(localStorage.getItem("USER")) ?? [])
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {/* Form Section */}

                    <UserForm setformSave={setformSave} formSave={formSave} />
                    {/* Table Section */}
                    <UserDetailsTable formSave={formSave} setformSave={setformSave}  />
                </div>
            </div>
        </>
    )
}
