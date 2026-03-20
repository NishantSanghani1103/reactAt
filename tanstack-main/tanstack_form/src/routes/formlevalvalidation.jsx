/* eslint-disable react-refresh/only-export-components */
import { useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { formValue } from '../data/formData'

export const Route = createFileRoute('/formlevalvalidation')({
    component: RouteComponent,
})

function RouteComponent() {
    const formInstance = useForm({
        defaultValues: formValue,
        onSubmit: ({ value }) => {
            console.log(value);
        },
        // validators: {
        //     onBlur: ({ value }) => {
        //         if (value.firstName == "") {
        //             return "FirstName Is Required...!!"
        //         }

        //     }
        // }
        validators: {

            onChange: ({ value }) => {
                return {
                    fields: {
                        firstName: value.firstName.length < 2 ? "Minimu Length 2" : undefined
                    }
                }
            },

            onChangeAsync: async ({ value }) => {
                const res = await fetch("https://dummyjson.com/test")
                const data = await res.json()
                console.log(data);

                if(value.firstName.length<2){
                    return "Value Must Be 2"
                }

            }
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        formInstance.handleSubmit()
    }
    const value = useStore(formInstance.store, (store) => store.values)
    const error = useStore(formInstance.store, (state) => state.errors)

    return (
        <>
            <pre>{JSON.stringify(value, null, 2)}</pre>
            <section className='container'>
                <div className='container-fluid'>
                    {
                        <p className='text-danger'>{error?.join(",")}</p>
                    }
                    <form onSubmit={handleSubmit} action="">
                        <formInstance.Field name='firstName'>
                            {
                                (field) => {
                                    return (
                                        <>
                                            <input type="text" placeholder='Enter First Name' value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
                                            {
                                                field.state.meta.isTouched
                                                &&
                                                <p className='text-danger'>{field.state.meta.errors?.join(",")}</p>
                                            }
                                        </>
                                    )
                                }
                            }
                        </formInstance.Field>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}
