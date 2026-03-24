/* eslint-disable react-refresh/only-export-components */
import { useForm } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { formValue } from '../data/formData'
import z from "zod"
export const Route = createFileRoute('/zodschema')({
    component: RouteComponent,
})

const formSchema = z.object({
    firstName: z.string().min(2, "Minimum Length Should Be 2"),
    lastName: z.string().min(2, "Minimum Length Should Be 2"),
    age: z.coerce.number().refine((value) => value > 18, "Age Must Be More Than 18")
})

function RouteComponent() {
    const formInstace = useForm({
        defaultValues: formValue,
        onSubmit: ({ value }) => {
            console.log(value);
        },
        validators: {
            onChange: formSchema
        }

    })
    const save = (event) => {
        event.preventDefault()
        formInstace.handleSubmit()
    }
    return (
        <>
            <form onSubmit={save} action="">
                <formInstace.Field name='firstName'>
                    {
                        (field) => {
                            return (
                                <>
                                    {/* <pre>{JSON.stringify(field.state.meta, null, 2)}</pre> */}
                                    <input type="text" value={field.state.value} placeholder='Enter FirstName' onChange={(e) => field.handleChange(e.target.value)} />

                                    {
                                        field.state.meta.isTouched
                                        &&
                                        <p style={{ color: 'red' }}>
                                            {field.state.meta.errors.map((value, index) => value.message).join(",")}
                                        </p>
                                    }
                                </>
                            )
                        }
                    }

                </formInstace.Field>


                <formInstace.Field name='lastName'>
                    {
                        (field) => {
                            return (
                                <>
                                    {/* <pre>{JSON.stringify(field.state.meta, null, 2)}</pre> */}
                                    <input type="text" value={field.state.value} placeholder='Enter LastName' onChange={(e) => field.handleChange(e.target.value)} />

                                    {
                                        field.state.meta.isTouched
                                        &&
                                        <p style={{ color: 'red' }}>
                                            {field.state.meta.errors.map((value, index) => value.message).join(",")}
                                        </p>
                                    }
                                </>
                            )
                        }
                    }

                </formInstace.Field>

                <formInstace.Field name='age'>
                    {
                        (field) => {
                            return (
                                <>
                                    {/* <pre>{JSON.stringify(field.state.meta, null, 2)}</pre> */}
                                    <input type="text" value={field.state.value} placeholder='Enter Age' onChange={(e) => field.handleChange(e.target.value)} />

                                    {
                                        field.state.meta.isTouched
                                        &&
                                        <p style={{ color: 'red' }}>
                                            {field.state.meta.errors.map((value, index) => value.message).join(",")}
                                        </p>
                                    }
                                </>
                            )
                        }
                    }

                </formInstace.Field>
                <input type="submit" />
            </form>
        </>
    )
}
