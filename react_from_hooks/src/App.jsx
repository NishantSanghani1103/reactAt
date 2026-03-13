/* eslint-disable no-useless-escape */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useForm } from 'react-hook-form'


function App() {

  const { register, reset, setError, handleSubmit, formState: { errors, touchedFields, isSubmitting } } = useForm({
    mode: onchange
  })
  // console.log(register);

  const saveData = async (data) => {
    await new Promise((res) => setTimeout((res), 5000))
    console.log(data);


  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(saveData)}>
        <div>
          <label htmlFor="">FirstName : </label>
          <input type="text" {...register("firstName",
            {
              required: true,
              minLength: { value: 5, message: "Mininum Length 5 Required" }
            }
          )} />
          {/* {
            errors.firstName
            &&
            <p>{errors.firstName.message}</p>
          } */}

        </div>
        <br /><br />
        <div>
          <label htmlFor="">LasName : </label>
          <input type="text" {...register("lastName",)} />

        </div>
        <br /><br />
        <div>
          <label htmlFor="">Mobile : </label>
          <input type="text" {...register("mobile")} />
        </div>
        <br /><br />
        <div>
          <label htmlFor="">Password : </label>
          <input type="text" {...register("password",
            {
              pattern:
                { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must contain 8+ characters, uppercase, lowercase, number and special character" }
            })} />
          {

            errors.password
            &&
            <p>{errors.password.message}</p>
          }

        </div>
        <br /><br />
        <div>
          <label htmlFor="">Age : </label>
          <input type="text" {...register("age")} />
        </div>
        <br /><br />
        <div>
          {
            errors.firstName
            &&
            <p>{errors.firstName.message}</p>
          }

          <input type="submit" disabled={isSubmitting} />
        </div>

      </form>
      <hr />
    </>
  )
}

export default App
