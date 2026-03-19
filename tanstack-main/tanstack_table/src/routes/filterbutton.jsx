/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import { coulmnDef } from '../component/coulmns'
import data from "../data/student.json"
import { useEffect } from 'react'
export const Route = createFileRoute('/filterbutton')({
    component: RouteComponent,
})

function RouteComponent() {
    const table = useReactTable({
        data,
        columns: coulmnDef,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    })
    const handleFilter = (value) => {
        const columns = table.getAllColumns()
        console.log(columns);
        const flt = columns.filter((value, index) => value.id == "name")[0]
        flt.setFilterValue(value)

    }

    useEffect(() => {
        const filterData=table.setColumnFilters([{id:"name",value:"Dipali"}])
        console.log(filterData);
        
    }, [])

    return (
        <>
            <button onClick={() => handleFilter("Marar")}>Marar</button>
            <button onClick={() => handleFilter("Dipali")}>Dipali</button>
            <button onClick={() => handleFilter("Verma")}>Verma</button>
            <hr />
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
