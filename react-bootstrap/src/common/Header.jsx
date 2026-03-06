import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
export default function Header() {
    return (
        <header className='container-fluid bg-white shadow-lg' id='header'>
            <main className='container py-2' >
                <div className='row justify-content-between align-items-center'>
                    <div className='col-5'>
                        <div className='d-flex   gap-5  align-items-center '>
                            <div>
                                <img src="/images/download.png" style={{ width: "56px" }} alt="" />
                            </div>
                            <div className='text-center '>
                                <img src="/images/download.png" className='m-0 p-0' style={{ width: "40px" }} alt="" />
                                <p className='text-danger m-0 p-0' style={{ fontSize: "11px" }}>Bus Ticket</p>
                                <div className='border-bottom  border-danger border-2'></div>
                            </div>
                            <div className=' text-center '>
                                <img src="/images/download (1).svg" className='text-black' style={{ width: "40px" }} alt="" />
                                <p className='text-blck m-0 pt-2' style={{ fontSize: "11px" }}>Train Ticket</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-5  '>
                        <div className='d-flex   justify-content-end gap-5 w-100  align-items-center'>
                            <div className='d-flex gap-2'>
                                <TfiMenuAlt />
                                <p className='fw-bold m-0 p-0' style={{ fontSize: "12px" }}>Bookings</p>
                            </div>

                            <div className='d-flex gap-2'>
                                <IoMdHelpCircleOutline />
                                <p className='fw-bold m-0 p-0' style={{ fontSize: "12px" }}>Help</p>
                            </div>

                            <div className='d-flex gap-2'>
                                <MdOutlineAccountCircle />
                                <p className='fw-bold m-0 p-0' style={{ fontSize: "12px" }}>Account</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </header>
    )
}
