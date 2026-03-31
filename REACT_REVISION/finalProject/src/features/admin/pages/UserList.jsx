/* eslint-disable react-hooks/incompatible-library */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../user/userFormSlice';
import { toast, ToastContainer } from 'react-toastify';
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { userColumns } from '../components/userColumn';


export default function UserList() {
    const [column, setcolumn] = useState([])
    const [sort, setsort] = useState()
    const [filter, setfilter] = useState("")
    const { userRegister } = useSelector((store) => store.userRegister)
    const dispatch = useDispatch()
    console.log(userRegister);

    const deleteData = (index) => {
        dispatch(deleteUser(index))
        toast.success("Delete Successfully...!!")
    }
    const tableInstance = useReactTable({
        data: userRegister,
        columns: userColumns(deleteData),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sort,
            globalFilter: filter,
            columnOrder: column
        },
        onSortingChange: setsort,
        onGlobalFilterChange: setfilter,
        onColumnOrderChange: setcolumn
    })


    return (
        <div className="container mt-5">
            <div className='mb-4'>
                <input type="text" placeholder='Search User' className='px-2' value={filter} onChange={(e) => setfilter(e.target.value)} /> &nbsp;
                <button onClick={()=>setcolumn(["id","email","fullName"])}>Change Column Order</button>
            </div>
            <ToastContainer />
            <div className="card shadow">
                <div className="card-header bg-dark text-white">
                    <h4 className="mb-0">User Management</h4>
                </div>


                <div className="card-body">

                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead className="table-secondary">
                            {
                                tableInstance.getHeaderGroups().map((header, headerIndex) => {
                                    return (
                                        <tr key={headerIndex}>
                                            {
                                                header.headers.map((value, index) => {
                                                    return (
                                                        <th key={index} onClick={value.column.getToggleSortingHandler()}>
                                                            {
                                                                flexRender(
                                                                    value.column.columnDef.header,
                                                                    value.getContext()
                                                                )
                                                            }
                                                            {
                                                                {
                                                                    asc: " (UP)",
                                                                    desc: " (DOWN)"
                                                                }[value.column.getIsSorted() ?? null]
                                                            }
                                                        </th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            {
                                tableInstance.getRowModel().rows.length == 0
                                    ?
                                    <tr><td className='text-center' colSpan={8}>No Records Found...!!</td></tr>
                                    :
                                    tableInstance.getRowModel().rows.map((row, rowIndex) => {
                                        return (
                                            <tr key={rowIndex}>
                                                {
                                                    row.getVisibleCells().map((value, index) => {
                                                        return (
                                                            <td key={index}>
                                                                {
                                                                    flexRender(value.column.columnDef.cell, value.getContext())
                                                                }
                                                            </td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>

                        {/* <tbody>
                            {
                                userRegister.length == 0
                                    ?
                                    <tr><td className='text-center' colSpan={8}>No Records Found...!!</td></tr>
                                    :
                                    userRegister.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{value.fullName}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phoneNumber}</td>
                                                <td>{value.gender}</td>
                                                <td>{value.city}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={() => deleteData(index)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }

                        </tbody> */}
                    </table>

                </div>
            </div>

        </div>
    )
}
