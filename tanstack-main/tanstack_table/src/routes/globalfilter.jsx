/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import data from "../data/student.json"
import { coulmnDef } from '../component/coulmns'
import { useState } from 'react'
export const Route = createFileRoute('/globalfilter')({
  component: RouteComponent,
})

function RouteComponent() {
  const [filter, setfilter] = useState("")
  const table = useReactTable({
    data,
    columns: coulmnDef,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter
    },
    onGlobalFilterChange: setfilter
  })

  return (
    <>
      <input type="text" value={filter} onChange={(e)=>setfilter(e.target.value)} />
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
