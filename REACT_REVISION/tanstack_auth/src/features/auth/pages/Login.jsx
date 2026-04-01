import { useNavigate, useRouteContext } from '@tanstack/react-router'
import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAuth } from '../services/userApi'
import { toast, ToastContainer } from 'react-toastify'
import { logIn } from '../userSclice'

export default function Login() {
    const context = useRouteContext({ from: "/login" })
    console.log(context);

    const dispatch = useDispatch()

    const [loginValue, setlaginValue] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()


    const handleChange = useCallback((event) => {
        const name = event.target.name
        const value = event.target.value

        setlaginValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }, [])
    const loginSave = (event) => {
        event.preventDefault()
        // console.log(loginValue);
        const checkUser = userAuth.find((value, index) => value.email == loginValue.email)
        if (checkUser) {
            if (checkUser.password == loginValue.password) {
                toast.success("Login Successfully....!!");
                // console.log(checkUser);
                dispatch(logIn(checkUser))
                if (checkUser.role == "user") {
                    return navigate({ to: "/user/register" })
                }
                if (checkUser.role == "admin") {
                    return navigate({ to: "/admin/list" })
                }
            }
            else {
                toast.error("Password Not Matched....!!");
            }
        }
        else {
            toast.error("Email Doesn't Exists....!!");
        }
    }
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <ToastContainer />
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
            <ToastContainer />
        </div>
    )
}
