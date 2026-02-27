import React, { useEffect, useState } from 'react'

export default function DateBg() {
    const date = new Date()
    console.log();
    const [d, setd] = useState("")
    const [changeBgColor, setchangeBgColor] = useState("black")
    const [defaultValue, setdefaultValue] = useState(true)
    const dateChange = () => {
        setTimeout(() => {
            setd(date.toLocaleString().split(",")[1])
            setdefaultValue(false)
        }, 1000);

    }
    useEffect(() => {
        dateChange()
    }, [d])

    return (
        <>{
            console.log(d)

        }
            <section className='container-fluid'>
                <div className='container p-2 border my-5'>
                    <div>
                        <select name="" defaultValue={"black"} onChange={(e) => setchangeBgColor(e.target.value)} className='' id="">
                            <option value="black">Black</option>
                            <option value="danger">Red</option>
                            <option value="success">Green</option>
                            <option value="primary">Blue</option>
                        </select>
                    </div>
                    {
                        d != ""
                            ?
                            <p className={`d-inline-block bg-${changeBgColor} text-white px-3 py-1 rounded my-2`}>{d}</p>
                            :
                            <p className='d-inline-block bg-black text-white px-3 py-1 rounded my-2'>Loading...</p>
                    }


                </div>

            </section>
        </>
    )
}
