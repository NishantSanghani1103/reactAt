import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, singleView, updateTask } from './reducer/toDoSlice';


function App() {
  const dispatch = useDispatch()
  const { task } = useSelector((store) => store.todo)
  const saveTask = (event) => {
    event.preventDefault()
    const value = event.target.task.value;
    dispatch(addTask(value))
    event.target.reset()
  }
  const handelDelete = (val) => {
    if (confirm("Are You Want To Delete Task ? "))
      dispatch(removeTask(val))
  }
  return (
    <>
      <div className="container py-5">

        <div className="row justify-content-center">
          <div className="col-md-6">

            <div className="card shadow-lg border-0 rounded-4">

              <div className="card-header bg-dark text-white text-center rounded-top-4">
                <h3 className="mb-0">Todo App</h3>
              </div>

              <div className="card-body">

                {/* Input Section */}
                <form onSubmit={saveTask} className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your task..."
                    name='task'

                  />

                  <button className="btn btn-dark">
                    Add
                  </button>

                </form>

                {/* Todo List */}
                <ul className="list-group">
                  {
                    task.map((value, index) => {
                      return (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                          {value}
                          <div>
                            <button onClick={() => handelDelete(value)} className="btn btn-sm btn-danger">Delete</button>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>

              </div>

              <div className="card-footer text-center text-muted">
                {task.length} Tasks Pending
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
