/* eslint-disable react-refresh/only-export-components */
import { revalidateLogic, useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/asyncvalidation')({
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
    },
    validationLogic: revalidateLogic(
      // {
      //   mode: "submit",
      //   modeAfterSubmission:"blur"
      // }
    )
  })

  const saveData = (event) => {
    event.preventDefault()
    form.handleSubmit()
  }

  const name = useStore(form.store, (state) => state.values.name)
  // console.log(name);


  return (
    <div>
      {
        <pre>{form.state.meta}</pre>
      }
      <form onSubmit={saveData}>

        {/* Name Field */}
        <form.Field
          name="name"
          validators={
            {
              onChangeAsyncDebounceMs: 2000,
              onChangeAsync: async ({ value }) => {
                const res = await fetch("https://dummyjson.com/test")
                const data = await res.json()
                console.log(data);
                if (value.length <= 2) {
                  return "2 Is Required"
                }
              },

              // we needs to use onchange with  onChangeAsync
              // onChange: ({ value }) =>
              //   value.length <= 2 ? "Minimum Length 2 Is Required...!!" : undefined,
              onDynamic: ({ value }) => {
                return value.length <= 2 ? "Minimum Length 2 Is Required...!!" : undefined
              }
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

                {field.state.meta.isTouched && field.state.meta.errors?.[0] && (
                  <p style={{ color: 'red' }}>
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </>
            )}
        </form.Field>

        {/* <form.Field name='email'
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
        </form.Field> */}
        <form.Subscribe>
          {
            (field) => {
              return (
                <button type="submit" disabled={!field.canSubmit}>Submit</button>
              )
            }
          }
        </form.Subscribe>
      </form>
    </div>
  )
}