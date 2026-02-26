import React, { useEffect, useState } from 'react'

export default function LoginRegister() {
    const [formData, setformData] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        gender: ""
    })
    const [localData, setlocalData] = useState(() => {
        const data = JSON.parse(localStorage.getItem("USER") || "[]");
        return Array.isArray(data) ? data : [];
    });
    const saveData = (event) => {
        event.preventDefault()
        let newData = [...localData, formData]

        setlocalData(newData)

        localStorage.setItem("USER", JSON.stringify(newData))
    }
    const deleteRecord = (index) => {
        let newData = localData.filter((val, ind) => ind != index)
        setlocalData(newData)
        localStorage.setItem("USER", JSON.stringify(newData))
    }

    return (
        <>
            {
                console.log(localData)

            }
            <section className="container my-5">
                <div className="row g-4">
                    {/* LEFT SIDE - FORM */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-primary text-white">
                                <h5 className="m-0">User Registration</h5>
                            </div>

                            <div className="card-body">
                                <form onSubmit={saveData}>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" onChange={(e) => {
                                                let obj = { ...formData }
                                                obj['fName'] = e.target.value
                                                setformData(obj)
                                            }} className="form-control" placeholder="Enter first name" />
                                        </div>

                                        <div className="col-12 col-sm-6 mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Enter last name"
                                                onChange={(e) => {
                                                    let obj = { ...formData }
                                                    obj['lName'] = e.target.value
                                                    setformData(obj)
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email"
                                            onChange={(e) => {
                                                let obj = { ...formData }
                                                obj['email'] = e.target.value
                                                setformData(obj)
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Mobile</label>
                                        <input type="tel" className="form-control" placeholder="Enter mobile number"
                                            onChange={(e) => {
                                                let obj = { ...formData }
                                                obj['phone'] = e.target.value
                                                setformData(obj)
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Gender</label>
                                        <select className="form-select" onChange={(e) => {
                                            let obj = { ...formData }
                                            obj['gender'] = e.target.value
                                            setformData(obj)
                                        }}>
                                            <option>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT SIDE - RECORD DISPLAY */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-dark text-white">
                                <h5 className="m-0">Submitted Records</h5>
                            </div>

                            <div className="card-body">
                                {
                                    localData.map((value, index) => {
                                        let { fName, lName, email, phone, gender } = value
                                        return (
                                            <div className="border rounded p-3 mb-3 position-relative">
                                                <button onClick={() => deleteRecord(index)} className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2">
                                                    Delete
                                                </button>
                                                <p className="m-1"><strong>First Name:</strong> {fName}</p>
                                                <p className="m-1"><strong>Last Name:</strong> {lName}</p>
                                                <p className="m-1"><strong>Email:</strong>{email}</p>
                                                <p className="m-1"><strong>Mobile:</strong> {phone}</p>
                                                <p className="m-1"><strong>Gender:</strong> {gender}</p>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}
