import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../../data/userData'
import { logIn } from '../../slice/userSlice'

export default function Login() {
    const [loginValue, setlaginValue] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setlaginValue({
            ...loginValue,
            [name]: value
        })
    }
    const loginSave = (event) => {
        event.preventDefault()
        console.log(loginValue);
        const checkUser = userAuth.find((value, index) => value.email == loginValue.email)
        if (checkUser) {
            if (checkUser.password == loginValue.password) {
                alert("Authenticated....!!");
                dispatch(logIn(checkUser))
                if (checkUser.role == "admin") {
                    return navigate("/admin")
                }
                if (checkUser.role == "user") {
                    return navigate("/user")
                }
                else {
                    alert("Invalid")
                }
            }
            else {
                alert("Password Not Matched....!!");
            }
        }
        else {
            alert("Email Doesn't Exists....!!");
        }
    }
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={loginSave}>
                    {/* Email Field */}
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name='email'
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name='password'
                            onChange={handleChange}
                        />
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-3">
                    <small>
                        Don't have an account? <a href="#">Register</a>
                    </small>
                </div>
            </div>
        </div>
    )
}
