/* eslint-disable react-refresh/only-export-components */
import { useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { formValue } from '../data/formData'
import { useState } from 'react'

export const Route = createFileRoute('/multiptypes')({
    component: RouteComponent,
})

function RouteComponent() {
    const [selectedSkill, setSelectedSkill] = useState("")
    const formInstance = useForm(
        {
            defaultValues: formValue,
            onSubmit: ({ value }) => {
                console.log(value);

            }
        }
    )
    const value = useStore(formInstance.store, (store) => store.values)
    const handleSubmit = (event) => {
        event.preventDefault()
        formInstance.handleSubmit()
    }
    return (
        <>
            <section className='container'>
                <main className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div>
                                <pre>{JSON.stringify({ value }, null, 2)}</pre>
                            </div>
                        </div>
                        <div className='col-lg-8 border'>
                            <div className=''>
                                <form className='d-flex flex-column w-50 gap-2' action="" onSubmit={handleSubmit}>
                                    <formInstance.Field
                                        name='firstName'
                                        validators={
                                            {
                                                onChange: ({ value }) => {
                                                    return !value ? "Name Is Required..." : ""
                                                }
                                            }
                                        }
                                        listeners={
                                            {
                                                onChange: ({ value }) => {
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
                                                        <input type="text" placeholder='Enter First Name'
                                                            value={field.state.value}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                        />
                                                        {
                                                            field.state.meta.isTouched
                                                            &&
                                                            field.state.meta.errors[0]
                                                            &&
                                                            <p className="text-danger">{field.state.meta.errors[0]}</p>
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
                                                                    return !value ? "LastName Is Required..." : ""
                                                                }
                                                            }
                                                        }>
                                                        {
                                                            (field) => {
                                                                return (
                                                                    <>
                                                                        <input type="text" placeholder='Enter First Name'
                                                                            value={field.state.value}
                                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                                        />
                                                                        {
                                                                            field.state.meta.isTouched
                                                                            &&
                                                                            field.state.meta.errors[0]
                                                                            &&
                                                                            <p className="text-danger">{field.state.meta.errors[0]}</p>
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

                                    <formInstance.Field name='address.street'
                                        validators={
                                            {
                                                onChange: ({ value }) => {
                                                    return !value ? "Street Required" : ""
                                                }
                                            }
                                        }
                                        listeners={
                                            {
                                                onChange: ({ value }) => {
                                                    if (!value) {
                                                        formInstance.setFieldValue("address.city", "")
                                                    }
                                                }
                                            }
                                        }
                                    >
                                        {
                                            (field) => {
                                                return (
                                                    <>
                                                        <input type="text" placeholder='Enter Street'
                                                            value={field.state.value}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                        />
                                                        {
                                                            field.state.meta.isTouched
                                                            &&
                                                            field.state.meta.errors[0]
                                                            &&
                                                            <p className="text-danger">{field.state.meta.errors[0]}</p>
                                                        }
                                                    </>
                                                )
                                            }
                                        }
                                    </formInstance.Field>

                                    <formInstance.Subscribe selector={(state) => state.values.address.street}>
                                        {
                                            (street) => {
                                                return (
                                                    street
                                                    &&
                                                    <formInstance.Field name='address.city'
                                                        validators={
                                                            {
                                                                onChange: ({ value }) => {
                                                                    return !value ? "City Required" : ""
                                                                }
                                                            }
                                                        }>
                                                        {
                                                            (field) => {
                                                                return (
                                                                    <>
                                                                        <input type="text" placeholder='Enter City'
                                                                            value={field.state.value}
                                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                                        />
                                                                        {
                                                                            field.state.meta.isTouched
                                                                            &&
                                                                            field.state.meta.errors[0]
                                                                            &&
                                                                            <p className="text-danger">{field.state.meta.errors[0]}</p>
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

                                    <formInstance.Field name='skills' mode='array'>
                                        {
                                            (field) => {
                                                return (
                                                    <>
                                                        <div className='d-flex align-items-center gap-4'>
                                                            <select name="" id="" value={selectedSkill}
                                                                onChange={(e) => setSelectedSkill(e.target.value)}>
                                                                <option value="">Select Skills</option>
                                                                <option value="Node">Node</option>
                                                                <option value="Express">Express</option>
                                                            </select>
                                                            <button className='w-100' onClick={() => {
                                                                if (selectedSkill == "") {
                                                                    return
                                                                }
                                                                field.pushValue(selectedSkill)
                                                                setSelectedSkill("")
                                                            }
                                                            }>Add SKill</button>
                                                        </div>
                                                        {
                                                            field.state.value.map((value, index) => {
                                                                return (
                                                                    <>
                                                                        <div key={index} className='d-flex align-items-center gap-2' style={{ fontSize: "14px" }}>
                                                                            <p>{value}</p>
                                                                            <input type="text" value={value} onChange={(e) => {
                                                                                const obj = [...field.state.value]
                                                                                obj[index] = e.target.value
                                                                                field.handleChange(obj)

                                                                            }
                                                                            } />
                                                                            <button style={{ fontSize: "14px" }}
                                                                                onClick={() => field.removeValue(index)}
                                                                            >Delete</button>
                                                                            {/* <button
                                                                                type="button"
                                                                                onClick={() => field.pushValue("Nishantr")}
                                                                            >
                                                                                Add Skill
                                                                            </button> */}
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            }
                                        }
                                    </formInstance.Field>

                                    <formInstance.Field name='acceptTems'
                                        validators={
                                            {
                                                onSubmit: ({ value }) => {

                                                    return !value ? "Please Accept Condition" : ""
                                                }
                                            }
                                        }

                                    >
                                        {
                                            (field) => {
                                                return (
                                                    <>
                                                        <div className=''>
                                                            <input type="checkbox" value={field.state.value} checked={field.state.value} onChange={(e) => field.handleChange(e.target.checked)} />
                                                            <label htmlFor=""> Accepet Tems</label>
                                                        </div>
                                                        {
                                                            field.state.meta.isTouched
                                                            &&
                                                            field.state.meta.errors[0]
                                                            &&
                                                            <p className='text-danger'>{field.state.meta.errors[0]}</p>
                                                        }
                                                    </>
                                                )
                                            }
                                        }
                                    </formInstance.Field>
                                    <formInstance.Subscribe selector={(state) => state.canSubmit
                                    }>
                                        {
                                            (canSubmit) => {
                                                return (
                                                    <button disabled={!canSubmit} type='submit'>Submit</button>
                                                )
                                            }
                                        }

                                    </formInstance.Subscribe>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

            </section >
        </>

    )
}
