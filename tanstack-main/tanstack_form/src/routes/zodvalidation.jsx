/* eslint-disable react-refresh/only-export-components */
import { useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import z from "zod"
export const Route = createFileRoute('/zodvalidation')({
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

  const name = useStore(form.store, (state) => state.values.name)
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
          validators={
            {
              onChange: z.string().min(2, "minimum length should be 2 character...!!")
                .max(50)
            }
          }
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

                {field.state.meta.isTouched
                  && field.state.meta.errors?.[0] && (
                    <p style={{ color: 'red' }}>
                      {field.state.meta.errors.map((value, index) => value.message).join(",")}
                    </p>
                  )}
              </>
            )}
        </form.Field>

        <form.Field name='email'
          validators={
            {
              onChange: z.email().refine((value) => value == "n@gmail.com", "Invalid Email")
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
                      {field.state.meta.errors.map((value, index) => value.message).join(",")}
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
              onChange: z.coerce.number().refine((val) => val > 18,"Not Eligible")
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
                      {field.state.meta.errors.map((value, index) => value.message).join(",")}
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