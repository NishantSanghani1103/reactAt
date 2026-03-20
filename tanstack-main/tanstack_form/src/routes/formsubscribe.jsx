/* eslint-disable react-refresh/only-export-components */
import { useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/formsubscribe')({
    component: RouteComponent,
})
function RouteComponent() {
    const formInstance = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: ""
        },
        onSubmit: ({ value }) => {
            console.log(value);
        }
    })
    const saveData = (event) => {
        event.preventDefault()
        formInstance.handleSubmit()
    }
    const value = useStore(formInstance.store, (state) => state.values)
    return (
        <>
            {
                <pre>{JSON.stringify(value,null,2)}</pre>
            }
            <section className='container'>
                <main className='container-fluid'>
                    <form action="" onSubmit={saveData}>
                        <formInstance.Field
                            name='firstName'
                            validators={
                                {
                                    onChange: ({ value }) => {
                                        return !value ? "Name Is Required" : ""
                                    }
                                }
                            }
                            listeners={
                                {
                                    onChange: ({ value }) => {
                                        console.log(value);
                                        if (!value) {
                                            formInstance.setFieldValue("lastName", "")
                                        }
                                    }
                                }
                            }
                        >
                            {
                                (field) => {
                                    return (
                                        <>
                                            <input type="text" placeholder='Enter FirstName'
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

                        <formInstance.Subscribe selector={(state) => state.values.firstName}>
                            {
                                (firstName) => {
                                    return (
                                        firstName
                                        &&
                                        <formInstance.Field
                                            name='lastName'
                                            validators={
                                                {
                                                    onChange: ({ value }) => {
                                                        return value.length < 3 ? "Minimum Length Required" : ""
                                                    }
                                                }
                                            }
                                            listeners={
                                                {
                                                    onChange: ({ value }) => {
                                                        if (!value) {
                                                            formInstance.setFieldValue("age", "")
                                                        }
                                                    }
                                                }
                                            }
                                        >
                                            {
                                                (field) => {
                                                    return (
                                                        <>
                                                            <input type="text" placeholder='Enter Last Name'
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
                                    )

                                }
                            }
                        </formInstance.Subscribe>
                        <formInstance.Subscribe selector={(store) => store.values.lastName
                        }>
                            {
                                (lastName) => {
                                    return (
                                        lastName
                                        &&
                                        <formInstance.Field
                                            name='age'
                                            validators={
                                                {
                                                    onSubmit: ({ value }) => {
                                                        return value < 18 ? "Not Eligible" : ""
                                                    }
                                                }
                                            }
                                        >
                                            {
                                                (field) => {
                                                    return (
                                                        <>
                                                            <input type="text" placeholder='Enter Age'
                                                                value={field.state.value}
                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                            />
                                                            {
                                                                field.state.meta.isTouched
                                                                &&
                                                                field.state.meta.errors[0]
                                                                &&
                                                                <p style={{ color: "red" }}>{field.state.meta.errors[0]}</p>
                                                            }
                                                        </>
                                                    )
                                                }
                                            }

                                        </formInstance.Field>
                                    )
                                }
                            }
                        </formInstance.Subscribe>
                        <button type='submit'>Submit</button>
                    </form>
                </main>
            </section>
        </>
    )
}
