import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import { coulmnDefMultipleFilterCondition } from '../component/coulmns'
import data from "../data/student.json"
import { useEffect, useState } from 'react'
export const Route = createFileRoute('/filtermultiplevalue')({
    component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
    const [nameFilter, setnameFilter] = useState([])
    const table = useReactTable({
        data,
        columns: coulmnDefMultipleFilterCondition,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    })

    useEffect(() => {
        const fltr = table.setColumnFilters([{ id: "name", value: nameFilter }])
        console.log(fltr);

    }, [nameFilter])
    return (
        <>
        {
            console.log(nameFilter)
            
        }
            <hr />
            <select name="" onChange={(e) => setnameFilter([...nameFilter, e.target.value])} id="" multiple={true}>
                {
                    ["Dipali", "Aayushman Mehrotra", "Sanka Verma"].map((value, index) => {
                        return (
                            <option value={value} key={index}>
                                {value}
                            </option>
                        )
                    })
                }
            </select>
            <section className='container'>
                <main className='container-fluid my-5'>
                    <table className="table table-striped table-bordered table-hover text-center align-middle">
                        <thead className="table-dark">
                            {
                                table.getHeaderGroups().map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            {
                                                value.headers.map((val, ind) => {
                                                    return (
                                                        <th key={ind}>
                                                            {
                                                                flexRender(
                                                                    val.column.columnDef.header,
                                                                    val.getContext()
                                                                )
                                                            }
                                                        </th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </thead>

                        <tbody>
                            {
                                table.getRowModel().rows.map((value, index) => {
                                    return (
                                        <tr key={value.id}>
                                            {
                                                value.getVisibleCells().map((val, ind) => {
                                                    return (
                                                        <td key={ind}>
                                                            {
                                                                flexRender(
                                                                    val.column.columnDef.cell,
                                                                    val.getContext()
                                                                )
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
                    </table>
                </main>
            </section>

        </>
    )
}
