import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import data from "./data/student.json"
import { columnDef } from './component/columnDef'
function App() {
  const [count, setCount] = useState(0)
  const tableInstance = useReactTable({
    data,
    columns: columnDef,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <>
      <section className='container'>
        <main className='container-fluid my-5'>
          <table className="table table-striped table-bordered table-hover text-center align-middle">
            <thead className="table-dark">
              {
                tableInstance.getHeaderGroups().map((value, index) => {
                  console.log(value);

                  return (
                    <tr key={index}>
                      {
                        value.headers.map((val, ind) => {
                          console.log(val);

                          return (
                            <td key={ind}>
                              {
                                flexRender(
                                  val.column.columnDef.header,
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
            </thead>

            <tbody>
              {
                tableInstance.getRowModel().rows.map((value, index) => {
                  return (
                    <tr key={index}>
                      {
                        value.getVisibleCells().map((val, ind) => {
                          return (
                            <td key={ind}>
                              {flexRender(
                                val.column.columnDef.cell,
                                val.getContext()
                              )}
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

export default App
