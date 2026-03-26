import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import z from "zod"

const formSchema = z.object({
    fullName: z.string().min(2, "Minimum Length Should Be 2 Charater...!!"),
    email: z.string().min(1, "email is required").email("Invalid Email").optional(),
    age: z.coerce.number().min(1, "Age Is Required").refine((value) => value > 18, "Age Should Be More Than 18...!!"),
    password: z.string(),
    cofirmPassword: z.string(),
    dateOfBirth: z.string().min(1, "Date Is Required...!!"),
    gender: z.enum(["male", "female"], {
        message: "Please Select Gender...!!"
    }),
    hobbies: z.array(z.string()).min(1, "Select at least one hobby"),
    country: z.string().min(1, "Please select country"),
    address: z.string().min(1, "Address Is Required"),
    terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept terms" })
    })
}).refine((data) => data.password == data.cofirmPassword, { message: "Confirm Password Not Matched...!!", path: ["cofirmPassword"] })


export default function UserForm({ formSave, setformSave }) {


    const { register, handleSubmit, formState: { errors, isSubmitting, touchedFields }, reset } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onTouched'
    })
    const saveData = (data) => {
        // console.log(data);

        // console.log(formSave);
        const checkUser = formSave.find((value, index) => {
            return value.email == data.email
        })
        if (checkUser) {
            alert("User Already Exists...!!")
        }
        else {

            setformSave([...formSave, data])
            reset()
        }

        

    }
    useEffect(() => {
        // console.log(formSave);
        localStorage.setItem("USER", JSON.stringify(formSave))
    }, [formSave])
    return (
        <div className="col-md-6">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h4>User Details Form</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(saveData)}>
                        {/* Text */}
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" {...register("fullName")} />
                            {
                                touchedFields.fullName
                                &&
                                errors.fullName
                                &&
                                <p className='text-danger'>{errors.fullName.message}</p>
                            }
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                {...register("email")}
                            />
                            {
                                touchedFields.email
                                &&
                                errors.email
                                &&
                                <p className='text-danger'>{errors.email.message}</p>
                            }
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"
                                {...register("password")}
                            />
                            {
                                touchedFields.password
                                &&
                                errors.password
                                &&
                                <p className='text-danger'>{errors.password.message}</p>
                            }
                        </div>
                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control"
                                {...register("cofirmPassword")}
                            />
                            {
                                touchedFields.cofirmPassword
                                &&
                                errors.cofirmPassword
                                &&
                                <p className='text-danger'>{errors.cofirmPassword.message}</p>
                            }
                        </div>
                        {/* Number */}
                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control"
                                {...register("age")}
                            />

                            {
                                touchedFields.age
                                &&
                                errors.age
                                &&
                                <p className='text-danger'>{errors.age.message}</p>
                            }
                        </div>

                        {/* Date */}
                        <div className="mb-3">
                            <label className="form-label">DOB</label>
                            <input type="date" className="form-control"
                                {...register("dateOfBirth")}
                            />

                            {
                                touchedFields.dateOfBirth
                                &&
                                errors.dateOfBirth
                                &&
                                <p className='text-danger'>{errors.dateOfBirth.message}</p>
                            }
                        </div>

                        {/* Radio */}
                        <div className="mb-3">
                            <label className="form-label d-block">Gender</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender"
                                    value={"male"}
                                    {...register("gender")}
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value={"female"} name="gender"
                                    {...register("gender")}
                                />
                                <label className="form-check-label">Female</label>
                            </div>

                            {
                                touchedFields.gender
                                &&
                                errors.gender
                                &&
                                <p className='text-danger'>{errors.gender?.message}</p>
                            }
                        </div>

                        {/* Checkbox */}
                        <div className="mb-3">
                            <label className="form-label d-block">Hobbies</label>
                            <div className="form-check">
                                <input className="form-check-input" value={"reading"} type="checkbox"{...register("hobbies")} />
                                <label className="form-check-label">Reading</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value={"tranvelling"} type="checkbox"{...register("hobbies")} />
                                <label className="form-check-label">Traveling</label>
                            </div>

                            {
                                touchedFields.hobbies
                                &&
                                errors.hobbies
                                &&
                                <p className='text-danger'>{errors.hobbies?.message}</p>
                            }
                        </div>

                        {/* Select */}
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <select className="form-select"{...register("country")}>
                                <option value={"india"}>India</option>
                                <option value={"usa"}>USA</option>
                                <option value={"uk"}>UK</option>
                            </select>

                            {
                                touchedFields.country
                                &&
                                errors.country
                                &&
                                <p className='text-danger'>{errors.country.message}</p>
                            }
                        </div>




                        {/* Textarea */}
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea className="form-control"{...register("address")} rows="3"></textarea>

                            {
                                touchedFields.address
                                &&
                                errors.address
                                &&
                                <p className='text-danger'>{errors.address.message}</p>
                            }
                        </div>
                        <div>
                            <input type="checkbox" {...register("terms")} /> Accept Terms

                            {
                                touchedFields.terms
                                &&
                                errors.terms
                                &&
                                <p className='text-danger'>{errors.terms.message}</p>
                            }
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
