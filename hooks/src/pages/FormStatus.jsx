import React from 'react'
import { useFormStatus } from 'react-dom'


export default function FormStatus() {



    const formStatusHandle = async () => {

        await new Promise(res => setTimeout(res, 2000))

        console.log("submited");
    }


    return (
        <>
            <hr />
            <form action={formStatusHandle}>
                <FormFields />
            </form>
        </>
    )
}
function FormFields() {
    const frm = useFormStatus()
    console.log(frm);

    return (
        <>
            <input type="text" placeholder='Enter Name' name="" id="" /> <br /><br />
            <input type="text" placeholder='Enter Email' /> <br /><br />
            <button disabled={frm.pending}>{frm.pending ? "Submiting..." : "Submit"}</button>
        </>
    )
}