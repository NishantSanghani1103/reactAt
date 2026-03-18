/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { coulmnDef } from '../component/coulmns'
import data from "../data/student.json"
import { useEffect } from 'react'
export const Route = createFileRoute('/pagination')({
  component: RouteComponent,
})

function RouteComponent() {
  const table = useReactTable({
    data,
    columns: coulmnDef,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
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
            <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>{"<<"}</button>
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous Page</button>
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next Page</button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} >{">>"}</button>
          </div>
          <div>
            <ul>
              <li>
                Total Pages : {table.getPageCount() - 1}
              </li>
              <li>
                You Are On Page : {table.options.state.pagination.pageIndex}
              </li>
              <li>
                <input type="text" placeholder='Enter Page Number' defaultValue={0} onChange={(e) => table.setPageIndex(e.target.value)} />
              </li>
              <li>
                <select value={table.options.state.pagination.pageSize} onChange={(e) => table.setPageSize(e.target.value)} name="" id="">
                  {
                    [10, 20, 30].map((value, index) => <option key={index} value={value}>{value}</option>)
                  }
                </select>
              </li>
            </ul>
          </div>
        </main>
      </section>

    </>
  )
}
