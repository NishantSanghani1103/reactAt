/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import data from "../data/student.json"
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { coulmnDef } from '../component/coulmns'
export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    const table = useReactTable({
        data,
        columns: coulmnDef,
        getCoreRowModel: getCoreRowModel()
    })
    // console.log(table.getHeaderGroups());
    // console.log(table.getRowModel());

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
