import React, { useRef, useState, useTransition } from 'react'
import { useFormStatus } from 'react-dom'

export default function FormElement() {

    const [inputValue, setinputValue] = useState("")
    const [checkBoxValue, setcheckBoxValue] = useState([])
    const [radioBoxValue, setradioBoxValue] = useState("male")
    const [dropDownBoxValue, setdropDownBoxValue] = useState("Select City")
    const [nameValue, setnameValue] = useState([])
    const [nameInputValue, setnameInputValue] = useState("")
    const [pending, setpending] = useTransition()
    const [objectU, setobjectU] = useState({
        name: "Nishant",
        address: {
            city: "Amreli",
            Country: "India"
        }
    })
    const checkedValue = (event) => {
        if (event.target.checked) {
            setcheckBoxValue([...checkBoxValue, event.target.value]);
        }
        else {
            setcheckBoxValue(checkBoxValue.filter((val) => val != event.target.value))
        }
    }

    const radioValue = (event) => {
        setradioBoxValue(event.target.value);
    }
    const dropDownValue = (event) => {
        setdropDownBoxValue(event.target.value)
        console.log(event.target.value);

    }

    const inoutRef = useRef()
    const inputRefHandler = () => {
        console.log(inoutRef.current.value);

        if (inoutRef.current.style.display == "none") {
            inoutRef.current.style.display = "block"
        }
        else {
            inoutRef.current.style.display = "none"
        }

    }

    const uncntrollHandler = () => {
        const v = document.querySelector("#uncontrollText").value
        console.log(v);

    }

    const formStatusHandle = async () => {

        await new Promise(res => setTimeout(res, 2000))

        console.log("submited");
    }

    function FormStat() {
        const frmStatus = useFormStatus()
        // console.log(frmStatus.pending);
        return (
            <>
                <input type="text" placeholder='Enter Name' name="" id="" />
                <br /><br />
                <input type="text" placeholder='Enter Email' />
                <br /><br />
                <button disabled={frmStatus.pending}>{frmStatus.pending ? "Submitting..." : "Submit"}</button>
            </>
        )
    }

    const handleTransition = () => {
        setpending(async () => {
            return new Promise(res => setTimeout(res, 2000))
        })
    }
    const nameSave = (event) => {
        event.preventDefault()
        setnameValue([...nameValue, nameInputValue])
    }


    const changeObject = (val) => {
        setobjectU({
            ...objectU,
            name: val
        })

    }

    return (
        <>
            <section className='container'>
                <input type="text"  value={inputValue} placeholder='Enter Value' onChange={(e) => setinputValue(e.target.value)} />
                <p>{inputValue}</p>
                <button onClick={() => setinputValue("")}>clear</button>

                <div id='handleCheckBox'>
                    <h3>CheckBox</h3>
                    <form action="" className='mb-4' onSubmit={checkedValue}>
                        <input type="checkbox" value="red" name="" onChange={checkedValue} id="" />&nbsp;&nbsp;Red
                        <br /><br />
                        <input type="checkbox" name="" id="" value="green" onChange={checkedValue} />&nbsp;&nbsp;Green
                        <br /><br />
                        <input type="checkbox" name="" id="" value="blue" onChange={checkedValue} />&nbsp;&nbsp;Blue
                        <br /><br />
                        <input type="checkbox" name="" id="" value="yellow" onChange={checkedValue} />&nbsp;&nbsp;Yellow
                    </form>
                    {
                        checkBoxValue.length == 0
                            ?
                            <p>Color Value Not Selected</p>
                            :
                            <p>{checkBoxValue.join(" , ")}</p>
                    }

                </div>

                <div id='radioButton'>
                    <p>Gender</p>
                    <input type="radio" name="gender" id="" value="male" onChange={radioValue} checked={radioBoxValue == "male"} />&nbsp;&nbsp;
                    <label htmlFor="">Male</label>
                    <br />
                    <br />
                    <input type="radio" name="gender" id="" value="female" onChange={radioValue} />&nbsp;&nbsp;
                    <label htmlFor="">Female</label>
                    <p>{radioBoxValue}</p>
                </div>

                <div id='dropDownSelect'>
                    <select onChange={dropDownValue} defaultValue={null} name="" id="">
                        <option value={null}>Select City</option>
                        <option value={"Rajkot"}>Rajkot</option>
                        <option value={"Amreli"}>Amreli</option>
                    </select>

                    <p className='my-2'> Selected City : {dropDownBoxValue}</p>
                </div>

                <div id='useref'>
                    <h5>for the useRef</h5>

                    <input ref={inoutRef} type="text" placeholder='enter name' />&nbsp;&nbsp;
                    <button onClick={inputRefHandler} className='p-1'>change input</button>
                </div>

                <div className='my-5 ' id='uncontrolleedComponent'>
                    <input id='uncontrollText' type="text" placeholder='Uncontroll Component' />
                    <button onClick={uncntrollHandler}>Save Data</button>
                </div>

                <div className='my-4' id='formStatus'>
                    <form action={formStatusHandle} >
                        <FormStat />
                    </form>
                </div>

                <div className='my-2' id='transition' >
                    {
                        pending
                        &&
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
                    }
                    <button onClick={handleTransition} disabled={pending} >Transition Button</button>
                </div>

                <div className='my-2' id='derivedState'>
                    <h3>Total User : {nameValue.length}</h3>
                    <h3>Latest User : {nameValue.findLast((val) => val)} </h3>
                    <h3>Unique User : {[...new Set(nameValue)].length}</h3>
                    <form action="" onSubmit={nameSave}>
                        <input type="text" onChange={(e) => setnameInputValue(e.target.value)} placeholder='Enter Value' />
                        <button type='submit'>Add Value</button>
                    </form>
                    <ul>
                        {
                            nameValue.map((value) => <li>
                                {value}
                            </li>)
                        }

                    </ul>
                </div>

                <div id='ubjectUpdate'>
                    <input type="text" onChange={(e) => changeObject(e.target.value)} placeholder='update name' />
                    <input type="text" placeholder='update city' />
                    <input type="text" placeholder='update address' />
                    <h3>{objectU.name}</h3>
                    <h3>{objectU.address.city}</h3>
                    <h3>{objectU.address.Country}</h3>
                </div>

            </section>
        </>
    )
}
