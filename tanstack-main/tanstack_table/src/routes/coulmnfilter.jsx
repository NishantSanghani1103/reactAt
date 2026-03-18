import { createFileRoute } from '@tanstack/react-router'
import data from "../data/student.json"
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import { coulmnDef } from '../component/coulmns'
import { useState } from 'react'

export const Route = createFileRoute('/coulmnfilter')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const obj = {
    tanProperty: "Nishant"
  }
  const [columnFilters, setColumnFilters] = useState([])
  const table = useReactTable({
    data,
    columns: coulmnDef,
    defaultColumn:obj,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters: columnFilters
    },
    onColumnFiltersChange: setColumnFilters
  })
  return (
    <>
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
                          //  console.log(val.column.columnDef.tanProperty);
                          // console.log(val.column.getCanFilter());
                          return (
                            <th key={ind}>
                              {
                                flexRender(
                                  val.column.columnDef.header,
                                  val.getContext()
                                )
                              }
                              {
                                val.column.getCanFilter()
                                &&
                                <input
                                  type="text"
                                  value={val.column.getFilterValue() ?? ""}
                                  onChange={(e) =>
                                    val.column.setFilterValue(e.target.value)
                                  }
                                  placeholder="Search..."
                                  style={{ width: "100%" }}
                                />
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
