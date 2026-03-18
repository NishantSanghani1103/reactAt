import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import data from "../data/student.json"
import { coulmnDef } from '../component/coulmns'
import { useState } from 'react'
export const Route = createFileRoute('/sort')({
    component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
    const [sort, setsort] = useState()
    const table = useReactTable({
        data,
        columns: coulmnDef,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sort
        },
        onSortingChange: setsort
    })
    return (
        <>
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
                                                        <th key={ind} onClick={val.column.getToggleSortingHandler()}>
                                                            {
                                                                flexRender(
                                                                    val.column.columnDef.header,
                                                                    val.getContext()
                                                                )
                                                            }
                                                            {
                                                                {
                                                                    asc: "Up",
                                                                    desc: "Down"
                                                                }[val.column.getIsSorted() ?? null]
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
