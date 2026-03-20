/* eslint-disable react-refresh/only-export-components */
import { useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            age: ""
        },
        onSubmit: ({ value }) => {
            console.log(value)
        }
    })

    const saveData = (event) => {
        event.preventDefault()
        form.handleSubmit()
    }

    const name = useStore(form.store,(state)=>state.values.name)
    console.log(name);
    

    return (
        <div>
            {
                name
            }
            <form onSubmit={saveData}>

                {/* Name Field */}
                <form.Field
                    name="name"
                    validators={{
                        onChange: ({ value }) =>
                            !value ? "Name is required" : undefined,
                    }}
                >
                    {
                        (field) => (
                            <>
                                <pre>{JSON.stringify(field.state.meta, null, 2)}</pre>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />

                                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                                    <p style={{ color: 'red' }}>
                                        {field.state.meta.errors[0]}
                                    </p>
                                )}
                            </>
                        )}
                </form.Field>

                <form.Field name='email'
                    validators={
                        {
                            onChange: ({ value }) => {
                                console.log(value);
                                return !value ? "Email is required" : undefined
                            }
                        }
                    }
                >
                    {
                        (field) => {
                            return (
                                <>
                                    <pre>{JSON.stringify(field.state.meta, null, 2)}</pre>
                                    <input type="text" placeholder='Enter Email' value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    {
                                        field.state.meta.isTouched && field.state.meta.errors?.[0]
                                        &&
                                        <p style={{ color: 'red' }}>
                                            {field.state.meta.errors[0]}
                                        </p>
                                    }
                                </>
                            )
                        }
                    }

                </form.Field>

                <form.Field name='age'
                    validators={
                        {
                            onBlur: ({ value }) => {
                                return value < 18 && "Age Not Valid"
                            }
                        }
                    }
                >

                    {
                        (field) => {
                            return (
                                <>
                                    <pre>{JSON.stringify(field.state.meta, null, 2)}</pre>
                                    <input type="text" placeholder='Enter Age' value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <p>{field.state.value}</p>
                                    {
                                        field.state.meta.isTouched && field.state.meta.errors?.[0]
                                        &&
                                        <p style={{ color: 'red' }}>
                                            {field.state.meta.errors[0]}
                                        </p>
                                    }
                                </>
                            )
                        }
                    }
                </form.Field>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}