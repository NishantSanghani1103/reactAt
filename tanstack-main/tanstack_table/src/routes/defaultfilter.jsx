/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import data from "../data/student.json"
import { coulmnDefDefaultFilter } from '../component/coulmns'
import { useState } from 'react'
export const Route = createFileRoute('/defaultfilter')({
  component: RouteComponent,
})

function RouteComponent() {
  const [filterDropDown, setfilterDropDown] = useState([])
  const table = useReactTable({
    data,
    columns: coulmnDefDefaultFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    state: {
      columnFilters: filterDropDown
    },
    onColumnFiltersChange: setfilterDropDown
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
                              {
                                val.column.getCanFilter() &&
                                <select
                                  value={val.column.getFilterValue() ?? ""}
                                  onChange={(e) =>
                                    val.column.setFilterValue(e.target.value || undefined)
                                  }
                                >
                                  <option value="">All</option>

                                  {
                                    [...new Set(data.map(row => row[val.column.columnDef.accessorKey]))]
                                      .filter(Boolean)
                                      .map((v, i) => (
                                        <option key={i} value={v}>
                                          {v}
                                        </option>
                                      ))
                                  }
                                </select>
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
