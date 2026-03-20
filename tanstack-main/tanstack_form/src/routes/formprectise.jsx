/* eslint-disable react-refresh/only-export-components */
import { useForm } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/formprectise')({
    component: RouteComponent,
})

function RouteComponent() {
    const formInstance = useForm({
        defaultValues: {
            name: "",
            age: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: ({ value }) => {
            console.log(value);

        }
    })
    const saveData = (event) => {
        event.preventDefault()
        formInstance.handleSubmit()
    }
    return (
        <>
            <section className='container'>
                <main className='container-fluid'>
                    <form action="" onSubmit={saveData}>
                        <formInstance.Field
                            name='name'
                            validators={
                                {
                                    onChange: ({ value }) => {
                                        return !value ? "Name Is Required" : ""
                                    }
                                }
                            }
                        >
                            {
                                (field) => {
                                    return (
                                        <>

                                            <input type="text" placeholder='Enter Name'
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            {
                                                field.state.meta.isTouched
                                                &&
                                                field.state.meta.errors[0]
                                                &&
                                                <p>{field.state.meta.errors[0]}</p>
                                            }
                                        </>
                                    )
                                }
                            }
                        </formInstance.Field>


                        <formInstance.Field
                            name='email'
                            validators={
                                {
                                    onChange: ({ value }) => {
                                        return !value ? "Email Is Required" : ""
                                    }
                                }
                            }
                        >
                            {
                                (field) => {
                                    return (
                                        <>

                                            <input type="text" placeholder='Enter Email'
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            {
                                                field.state.meta.isTouched
                                                &&
                                                field.state.meta.errors[0]
                                                &&
                                                <p>{field.state.meta.errors[0]}</p>
                                            }
                                        </>
                                    )
                                }
                            }

                        </formInstance.Field>


                        <formInstance.Field
                            name='password'
                            validators={
                                {
                                    onChange: ({ value }) => {
                                        return value.length < 8 ? "Maximum Length 8" : ""
                                    }
                                }
                            }
                        >
                            {
                                (field) => {
                                    return (
                                        <>
                                            <input type="password" placeholder='Enter Password'
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            {
                                                field.state.meta.isTouched
                                                &&
                                                field.state.meta.errors[0]
                                                &&
                                                <p>{field.state.meta.errors[0]}</p>
                                            }
                                        </>
                                    )
                                }
                            }

                        </formInstance.Field>

                        <formInstance.Field
                            name='confirmPassword'

                            validators={

                                {
                                    // onChangeListenTo:["password"],
                                    onSubmit: ({ value, fieldApi }) => {
                                        console.log(value);

                                        const passwrd = fieldApi.form.getFieldValue("password")
                                        return passwrd != value ? "Confirm Password Doesn't Match...!!" : ""
                                    }
                                }
                            }
                        >
                            {
                                (field) => {
                                    return (
                                        <>

                                            <input type="password" placeholder='Enter Confirm Password'
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                            />
                                            {
                                                field.state.meta.isTouched
                                                &&
                                                field.state.meta.errors[0]
                                                &&
                                                <p>{field.state.meta.errors[0]}</p>
                                            }
                                        </>
                                    )
                                }
                            }

                        </formInstance.Field>
                        <button type='submit' disabled={!formInstance.state.isValid}>Submit</button>
                    </form>
                </main>
            </section>
        </>
    )
}
