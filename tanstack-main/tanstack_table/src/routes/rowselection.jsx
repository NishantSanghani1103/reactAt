/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import data from "../data/student.json"
import { coulmnDef, coulmnDefRowSelection } from '../component/coulmns'
import { useState } from 'react'
export const Route = createFileRoute('/rowselection')({
  component: RouteComponent,
})


function RouteComponent() {
  const [rowSelection, setrowSelection] = useState({})
  const table = useReactTable({
    data,
    columns: coulmnDefRowSelection,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection
    },
    onRowSelectionChange: setrowSelection
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
          <div>
            <ul>
              {
                table.getSelectedRowModel().flatRows.map((value, index) => {
                  console.log(value);
                  
                  return (
                    <li key={index}>{JSON.stringify(value.original)}</li>
                  )
                })
              }


            </ul>
          </div>
        </main>
      </section>

    </>
  )
}
