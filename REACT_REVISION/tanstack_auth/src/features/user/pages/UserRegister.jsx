
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

export default function UserRegister() {
    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        gender: "",
        address: "",
        city: "",
        terms: ""
    })

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target

        setformData({
            ...formData,
            [name]: type == 'checkbox' ? checked :  value
        })
    }
    const saveData = (event) => {
        event.preventDefault()
        console.log(formData);

    }
    return (
        <div className="container mt-5">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">User Registration Form</h4>
                        </div>

                        <div className="card-body">

                            <form onSubmit={saveData}>

                                {/* Full Name */}
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        placeholder="Enter your full name"
                                        name='fullName'
                                        onChange={handleChange}
                                    />

                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className={`form-control`}
                                        placeholder="Enter your email"
                                        name='email'
                                        onChange={handleChange}
                                    />

                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control`}
                                        placeholder="Enter password"
                                        name='password'
                                        onChange={handleChange}

                                    />


                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`form-control`}
                                        placeholder="Enter password"
                                        name='confirmPassword'
                                        onChange={handleChange}
                                    />

                                </div>
                                {/* Phone */}
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        placeholder="Enter phone number"
                                        name='phoneNumber'
                                        onChange={handleChange}
                                    />

                                </div>

                                {/* Gender */}
                                <div className="mb-3">
                                    <label className="form-label d-block">Gender</label>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" value={"male"} className="form-check-input" name="gender" onChange={handleChange} />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" value={"female"} onChange={handleChange} className="form-check-input" name="gender" />
                                        <label className="form-check-label">Female</label>
                                    </div>

                                </div>

                                {/* Address */}
                                {/* <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea
                                        className={`form-control `}
                                        rows="3"
                                        placeholder="Enter your address"
                                        name='address'
                                        onChange={handleChange}
                                    ></textarea>


                                </div> */}

                                {/* City */}
                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <select name='city' onChange={handleChange} className={`form-control `} >
                                        <option value={""}>Select City</option>
                                        <option value={"rajkot"}>Rajkot</option>
                                        <option value={"ahmedabad"}>Ahmedabad</option>
                                        <option value={"surat"}>Surat</option>
                                    </select>

                                </div>

                                {/* Terms */}
                                <div className="form-check mb-3">
                                    <input name='terms' type="checkbox" onChange={handleChange} className={`form-check-input `} />
                                    <label className="form-check-label">
                                        I agree to the terms and conditions
                                    </label>

                                </div>

                                {/* Buttons */}
                                <div className="d-flex justify-content-between">
                                    <button type="reset" className="btn btn-secondary">
                                        Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
