import React, { useState } from 'react'
import { faqData } from './faqItems'
import { FaMinus, FaPlus } from "react-icons/fa6";
export default function Home() {

    const [currentId, setcurrentId] = useState(1)

    return (
        <>
            <section className='container-fluid ' id='faq'>
                <div className='container p-0 border my-5'>
                    {
                        faqData.map((value, index) => {
                            return (
                                <div className='mb-2'>
                                    <div className='d-flex bg-success-subtle align-items-center justify-content-between'>
                                        <p className=' w-100 p-2 n align-items-center  text-capitalize m-0' onClick={() => setcurrentId(currentId == null ? value.id : null)}>{value.question}
                                        </p>
                                        {
                                            currentId == value.id
                                                ?
                                                <FaMinus />
                                                :
                                                <FaPlus />
                                        }

                                    </div>
                                    <p className={`bg-white  shadow-lg m-0 p-2 ${currentId == value.id ? 'd-block' : 'd-none'}`}>{value.ans}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
