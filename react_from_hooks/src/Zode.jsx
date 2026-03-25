import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { email, z } from "zod"
const formSchema = z.object({
    firstName: z.string().min(5, "Minimu Length Should Be 5").max(20, "Max Length Should be 20"),
    lastName: z.string().min(5, "Minimu Length Should Be 5").max(20, "Max Length Should be 20"),
    mobile: z.coerce.number().min(10, "Min Lenght Should Be 10"),
    age: z.coerce.number().min(18, "Minimum Age Should Be 18"),
    email: z.email("Email Is Invalid"),
    confirm: z.string(),
    password: z.string(),
    gender: z.enum(["male", "female"], {
        message: "Please select gender"
    }),
    terms:z.boolean()
}).refine((data) => data.password == data.confirm, {
    message: "Confirm Password Not Matched....",
    path: ["confirm"]
})

export default function Zode() {
    const { register, reset, setError, handleSubmit, formState: { errors, touchedFields, isSubmitting } } = useForm({
        resolver: zodResolver(formSchema)
    })
    const saveData = async (data) => {
        await new Promise((res) => setTimeout((res), 2000))
        console.log(data);
        reset()
    }
    return (

        <form action="" onSubmit={handleSubmit(saveData)}>
            <div>
                <h1>Zode Validation Handling</h1>
                <label htmlFor="">FirstName : </label>
                <input type="text" {...register("firstName")} />
                {
                    errors.firstName
                    &&
                    <p>{errors.firstName.message}</p>
                }

            </div>
            <br /><br />
            <div>
                <label htmlFor="">LasName : </label>
                <input type="text" {...register("lastName",)} />
                {
                    errors.lastName
                    &&
                    <p>{errors.lastName.message}</p>
                }
            </div>
            <br /><br />
            <div>
                <label htmlFor="">Mobile : </label>
                <input type="text" {...register("mobile")} />
                {
                    errors.mobile
                    &&
                    <p>{errors.mobile.message}</p>
                }
            </div>
            <br /><br />
            <div>
                <label htmlFor="">Email : </label>
                <input type="text" {...register("email")} />
                {
                    errors.email
                    &&
                    <p>{errors.email.message}</p>
                }

            </div>
            <br /><br />
            <div>
                <label htmlFor="">Age : </label>
                <input type="text" {...register("age")} />
                {
                    errors.age
                    &&
                    <p>{errors.age.message}</p>
                }
            </div>
            <br /><br />
            <div>
                <label htmlFor="">Password : </label>
                <input type="text" {...register("password")} />
                {

                    errors.password
                    &&
                    <p>{errors.password.message}</p>
                }

            </div>
            <br /><br />
            <div>
                <label htmlFor="">Confirm Password : </label>
                <input type="text" {...register("confirm")} />
                {

                    errors.confirm
                    &&
                    <p>{errors.confirm.message}</p>
                }

            </div>

            <div>
                <label htmlFor="">Gender : </label>
                <input type="radio" value={"male"}  {...register("gender")} />
                Male
                <input type="radio" value={"female"} {...register("gender")} />
                FeMale
            </div>
            <div>
                <div>
                    <input type="checkbox" {...register("terms")} /> Accept Terms
                </div>
                <input type="submit" disabled={isSubmitting} />
            </div>
        </form>
    )
}
