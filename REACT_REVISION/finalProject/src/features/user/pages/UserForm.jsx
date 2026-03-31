import React from 'react'
import { useForm } from 'react-hook-form'
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { addUser } from '../userFormSlice';
import { toast, ToastContainer } from 'react-toastify';
const formSchema = z.object({
    fullName: z.string().min(3, "minimum length should be 3 charater...!!"),
    email: z.string().min(1, "email is required"),
    password: z.string().min(1, "password is required"),
    confirmPassword: z.string(),
    phoneNumber: z.coerce.number().min(10, "minimum length should be 10...!!"),
    gender: z.enum(["male", "female"], {
        message: "gender is required...!!"
    }),
    address: z.string().min(1, "address is required...!!"),
    city: z.string().min(1, "city is required...!!"),

    // terms: z.boolean().refine((value) => value == true, {
    //     message: "Please Accept Terms"
    // })

    //   or

    terms: z.literal(true, {
        message: "you must accept terms and condition"
    })
}).refine((value) => value.password == value.confirmPassword, {
    message: "Confirm Password Doest Not Matched....!!",
    path: ["confirmPassword"]
})

export default function UserForm() {
    const dispatch = useDispatch()
    const { register, reset, handleSubmit, formState: { errors, touchedFields } } = useForm(
        {
            resolver: zodResolver(formSchema),
            mode: "onTouched",
            reValidateMode: "onChange"
        }
    )

    const saveUser = (data) => {
        console.log(data);
        handleSubmit()
        dispatch(addUser(data))
        toast.success("User Added SuccessFully....!!")
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

                            <form onSubmit={handleSubmit(saveUser)}>

                                {/* Full Name */}
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${touchedFields.fullName && errors.fullName && "border-danger"}`}
                                        placeholder="Enter your full name"
                                        {...register("fullName")}
                                    />
                                    {
                                        touchedFields.fullName
                                        &&
                                        errors.fullName
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.fullName.message}</p>

                                    }
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className={`form-control ${touchedFields.email && errors.email && "border-danger"}`}
                                        placeholder="Enter your email"
                                        {...register("email")}
                                    />
                                    {
                                        touchedFields.email
                                        &&
                                        errors.email
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.email.message}</p>

                                    }
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${touchedFields.password && errors.password && "border-danger"}`}
                                        placeholder="Enter password"
                                        {...register("password")}

                                    />

                                    {
                                        touchedFields.password
                                        &&
                                        errors.password
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.password.message}</p>

                                    }
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${touchedFields.confirmPassword && errors.confirmPassword && "border-danger"}`}
                                        placeholder="Enter password"
                                        {...register("confirmPassword")}
                                    />
                                    {
                                        touchedFields.confirmPassword
                                        &&
                                        errors.confirmPassword
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.confirmPassword.message}</p>

                                    }
                                </div>
                                {/* Phone */}
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        className={`form-control ${touchedFields.phoneNumber && errors.phoneNumber && "border-danger"}`}
                                        placeholder="Enter phone number"
                                        {...register("phoneNumber")}
                                    />
                                    {
                                        touchedFields.phoneNumber
                                        &&
                                        errors.phoneNumber
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.phoneNumber.message}</p>

                                    }
                                </div>

                                {/* Gender */}
                                <div className="mb-3">
                                    <label className="form-label d-block">Gender</label>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" {...register("gender")} value={"male"} className="form-check-input" name="gender" />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" value={"female"} {...register("gender")} className="form-check-input" name="gender" />
                                        <label className="form-check-label">Female</label>
                                    </div>

                                    {
                                        touchedFields.gender
                                        &&
                                        errors.gender
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.gender.message}</p>

                                    }
                                </div>

                                {/* Address */}
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea
                                        className={`form-control ${touchedFields.address && errors.address && "border-danger"}`}
                                        rows="3"
                                        placeholder="Enter your address"
                                        {...register("address")}
                                    ></textarea>

                                    {
                                        touchedFields.address
                                        &&
                                        errors.address
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.address.message}</p>

                                    }
                                </div>

                                {/* City */}
                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <select className={`form-control ${touchedFields.city && errors.city && "border-danger"}`} {...register("city")}>
                                        <option value={""}>Select City</option>
                                        <option value={"rajkot"}>Rajkot</option>
                                        <option value={"ahmedabad"}>Ahmedabad</option>
                                        <option value={"surat"}>Surat</option>
                                    </select>
                                    {
                                        touchedFields.city
                                        &&
                                        errors.city
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.city.message}
                                        </p>

                                    }
                                </div>

                                {/* Terms */}
                                <div className="form-check mb-3">
                                    <input type="checkbox" {...register("terms")} className={`form-check-input ${touchedFields.terms && errors.terms && "border-danger"}`} />
                                    <label className="form-check-label">
                                        I agree to the terms and conditions
                                    </label>
                                    {
                                        touchedFields.terms
                                        &&
                                        errors.terms
                                        &&
                                        <p className='text-danger text-capitalize'>{errors.terms.message}</p>

                                    }
                                </div>

                                {/* Buttons */}
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => reset()} type="reset" className="btn btn-secondary">
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
