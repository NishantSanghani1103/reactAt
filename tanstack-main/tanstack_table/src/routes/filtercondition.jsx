/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import data from "../data/student.json"
import { columnDefFilterCondition } from '../component/coulmns'
import { useEffect } from 'react'
export const Route = createFileRoute('/filtercondition')({
    component: RouteComponent,
})

function RouteComponent() {
    const tableInstance = useReactTable({
        data,
        columns: columnDefFilterCondition,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    })
    useEffect(() => {
        // const a = tableInstance.getState()
        // console.log(a);

        // tableInstance.getHeaderGroups().map((value, index) => {
        //     console.log(value);
        //     value.headers.map((val, ind) => {
        //         console.log(val.column);

        //         if(val.column.id=="name"){
        //             val.column.setFilterValue("Dh")


        //         }
        //          console.log(val.column.getFilterValue());
        //     })
        // })

        const colName = tableInstance.getColumn("name")
        if (colName) {
            colName.setFilterValue("Dipali Marar")
        }

        const colEmail = tableInstance.getColumn("email")
        if (colEmail) {
            colEmail.setFilterValue("Daevika_Gill46@yahoo.co.in")
        }

    }, [tableInstance])
    return (
        <>
            <section className='container my-5'>
                <main className='container-fluid'>
                    <table className="table table-striped table-bordered table-hover text-center align-middle">
                        <thead className="table-dark">
                            {
                                tableInstance.getHeaderGroups().map((headerValue, headerIndex) => {

                                    return (
                                        <tr key={headerIndex}>
                                            {
                                                headerValue.headers.map((headingValue, headingIndex) => {
                                                    console.log();
                                                    return (
                                                        <th key={headingIndex}>
                                                            {
                                                                flexRender(
                                                                    headingValue.column.columnDef.header,
                                                                    headingValue.getContext()
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
                                tableInstance.getRowModel().rows.map((rowValue, rowIndex) => {

                                    return (
                                        <tr key={rowIndex}>
                                            {
                                                rowValue.getVisibleCells().map((rowDetails, rowDetailsIndex) => {
                                                    return (
                                                        <td key={rowDetailsIndex}>
                                                            {
                                                                flexRender(rowDetails.column.columnDef.cell,
                                                                    rowDetails.getContext()

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
