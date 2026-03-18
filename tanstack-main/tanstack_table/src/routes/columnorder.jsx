/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { coulmnDef } from '../component/coulmns'
import data from "../data/student.json"
import { useState } from 'react'
export const Route = createFileRoute('/columnorder')({
  component: RouteComponent,
})

function RouteComponent() {
  const [columnOrder, setcolumnOrder] = useState([])
  const table = useReactTable({
    data,
    columns: coulmnDef,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnOrder: columnOrder
    },
    onColumnOrderChange: setcolumnOrder
  })
  return (
    <>
    <button onClick={()=>setcolumnOrder(["date_of_birth","email","Name Age"])}>Change Order</button>
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
    </>)
}
